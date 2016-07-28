import React from "react";
import {combineReducers} from "redux"



const bioData = (state = {}, action) => {
	switch (action.type) {
		case "FETCH_DATA_REQUEST":
			return state;
		case "FETCH_BIO_SUCCESS":
			return action.response;
		default:
			return state
	}
};

const postsData = (state = [], action) => {
	switch (action.type) {
		case "FETCH_DATA_REQUEST":
			return state;
		case "FETCH_POSTS_SUCCESS":
			return action.response;
		default:
			return state
	}
};

const blogData = (state = [], action) => {
	switch (action.type) {
		case "FETCH_DATA_REQUEST":
			return state;
		case "FETCH_BLOG_POST_SUCCESS":
			return action.response;
		default:
			return state
	}
};

const dataStore = combineReducers({
	bioData,
	postsData,
	blogData
});


export default dataStore;