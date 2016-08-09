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
import ReactDOM, {renderToString} from 'react-dom/server';
import * as api from "./ui/api";
import  StartKeepAlive from "./heroku-alive";
import Html from './ui/components/html/Html';

const app = Express();
const port = 3000;

const alive = new StartKeepAlive();
alive.run();

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
				res.send(render(finalState, appHtml))
			})
		})
	)
}

function render(state, html) {
	return ReactDOM.renderToString(
		<Html
			state={state}
			html={html}
		/>
	)
}

app.listen(process.env.PORT || port);