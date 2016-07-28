import {createStore, applyMiddleware} from 'redux';
import createLogger from "redux-logger";
import thunk from "redux-thunk";
import dataStore from "./reducers/index"

const configureStore = () => {
	const middlewares = [thunk, createLogger()];

	return createStore(
		dataStore,
		applyMiddleware(...middlewares)
	);
};

export default configureStore;