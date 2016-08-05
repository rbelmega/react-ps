import React from "react";
import {Route, IndexRoute} from "react-router";
import {App} from "./App";
import Blog from "./components/blog/Blog";

module.exports = (
	<Route path="/">
		<IndexRoute component={App}/>
		<Route path="/blog/(:id)" component={Blog}/>
	</Route>
);