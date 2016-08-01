import {createStore, applyMiddleware} from 'redux';
import createLogger from "redux-logger";
import thunk from "redux-thunk";
import dataStore from "./reducers/index"


// Grab the state from a global injected into server-generated HTML
const preloadedState = window.__PRELOADED_STATE__ж

const configureStore = () => {
	const middlewares = [thunk, createLogger()];

	return createStore(
		dataStore,
		preloadedState,
		applyMiddleware(...middlewares)
	);
};

export default configureStore;