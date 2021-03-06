// import qs from 'qs' // Add this at the top of the file
// import path from 'path'
require('newrelic');
import Express from 'express'
import React from 'react'
import {createStore} from 'redux'
import {Provider} from 'react-redux'
import dataStore from './ui/reducers'
import {match, RouterContext} from 'react-router'
import routes from './ui/routes'
import {renderToString} from 'react-dom/server';
import * as api from "./ui/api";
import  StartKeepAlive from "./heroku-alive";
const app = Express();
const port = 3000;

const alive = new StartKeepAlive();
alive.run();

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.get('/*.*', Express.static('public'));
app.get('*', handleRender);


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

			// Grab the initial state from our Redux store
			const finalState = store.getState();

			// Send the rendered page back to the client

			match({routes: routes, location: req.url}, (err, redirect, props) => {
				// `RouterContext` is the what `Router` renders. `Router` keeps these
				// `props` in its state as it listens to `browserHistory`. But on the
				// server our app is stateless, so we need to use `match` to
				// get these props before rendering.
				// Render the component to a string
				const appHtml = renderToString(
					<Provider store={store}>
						<RouterContext {...props}/>
					</Provider>);

				// dump the HTML into a template, lots of ways to do this, but none are
				// really influenced by React Router, so we're just using a little
				// function, `renderPage`
				res.send(renderFullPage(appHtml, finalState))
			})
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
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<title>Rostyslav Belmeha</title>
	<link rel="stylesheet" href="style.css">
	<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.5.0/css/font-awesome.min.css">
	<link rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/highlight.js/8.5/styles/github.min.css"/>
	<script async src="//cdnjs.cloudflare.com/ajax/libs/highlight.js/8.5/highlight.min.js"></script>
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