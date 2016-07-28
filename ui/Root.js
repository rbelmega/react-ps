import React from "react";
import {Provider} from "react-redux";
import {App} from "./App";
import Blog from "./components/blog/Blog";
import {Router, Route, browserHistory} from "react-router";

const Root = ({store}) => (
	<Provider store={store}>
		<Router history={browserHistory}>
			<Route path="/" component={App}/>
			<Route path="/blog/(:id)" component={Blog}/>
		</Router>
	</Provider>
);

export default Root;