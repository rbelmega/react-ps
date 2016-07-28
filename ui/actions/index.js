import * as api from "../api";


export const fetchBio = () => (dispatch) => {
	dispatch({
		type: "FETCH_DATA_REQUEST",
	});

	api.fetchBio().then(response =>
		dispatch({
			type: "FETCH_BIO_SUCCESS",
			response,
		})
	);
};


export const fetchPosts = () => (dispatch) => {
	dispatch({
		type: "FETCH_DATA_REQUEST",
	});

	api.fetchPosts().then(response =>
		dispatch({
			type: "FETCH_POSTS_SUCCESS",
			response,
		})
	);
};

export const fetchBlogPost = (blogID) => (dispatch) => {
	dispatch({
		type: "FETCH_DATA_REQUEST",
	});

	api.fetchBlogPost(blogID).then(response =>
		dispatch({
			type: "FETCH_BLOG_POST_SUCCESS",
			response,
		})
	);
};