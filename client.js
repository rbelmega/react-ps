import React from 'react'
import { render } from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import App from './ui/App'
import dataStore from './ui/reducers';

// Grab the state from a global injected into server-generated HTML
const initialState = window.__INITIAL_STATE__;

// Create Redux store with initial state
const store = createStore(dataStore, initialState);

render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.getElementById('app')
);