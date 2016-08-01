// import qs from 'qs' // Add this at the top of the file
// import path from 'path'
import Express from 'express'
import React from 'react'
import {createStore} from 'redux'
import {Provider} from 'react-redux'
import dataStore from './ui/reducers'
import {App} from './ui/App'
// import {Blog} from './ui/components/blog/Blog'
// import {Router, Route, browserHistory} from "react-router";
import {renderToString} from 'react-dom/server';
import * as api from "./ui/api";
import  StartKeepAlive from "./heroku-alive";
const app = Express();
const port = 3000;

require('newrelic');

const alive = new StartKeepAlive();
alive.run();

// app.use('/', Express.static('public'));
app.get('/*.*', Express.static('public'));
app.get('/*', handleRender);

// This is fired every time the server side receives a request
// app.use('/', handleRender);

// We are going to fill these out in the sections to follow
function handleRender(req, res) {
	api.fetchBio().then(bioData =>
			api.fetchPosts().then(postsData => {
				// Read the counter from the request, if provided
				// const params = qs.parse(req.query)

				// Compile an initial state
				let initialState = {bioData, postsData};
				// Create a new Redux store instance
				const store = createStore(dataStore, initialState);

				// Render the component to a string
				const html = renderToString(
					<Provider store={store}>
						<App />
					</Provider>
				);

//						<Route path="/blog/(:id)" component={Blog}/>
				// Grab the initial state from our Redux store
				const finalState = store.getState();

				// Send the rendered page back to the client
				res.send(renderFullPage(html, finalState))
			})
	)
}

function renderFullPage(html, initialState) {
	return `
<!DOCTYPE html>
<html lang="en">
<base href="/"/>
<head>
	<meta charset="UTF-8">
	<title>Rostyslav Belmeha</title>
	<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.5.0/css/font-awesome.min.css">
	<link rel="stylesheet" href="style.css">
	<link rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/highlight.js/8.5/styles/github.min.css"/>
	<script src="//cdnjs.cloudflare.com/ajax/libs/highlight.js/8.5/highlight.min.js"></script>
</head>
<body>
<div id="app">${html}</div>
        <script>
          window.__INITIAL_STATE__ = ${JSON.stringify(initialState)}
        </script>
<script src="index.js"></script>
<script>
	(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
				(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
			m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
	})(window,document,'script','//www.google-analytics.com/analytics.js','ga');

	ga('create', 'UA-74194667-1', 'auto');
	ga('send', 'pageview');

</script>
</body>
</html>
`
}
app.listen(process.env.PORT || port);