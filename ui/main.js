import React from "react";
import ReactDOM from "react-dom";
import Root from "./Root";
import configureStore from "./configureStore";
import "./analytics";

const store = configureStore();

ReactDOM.render(
	<Root store={store}/>,
	document.getElementById("app"));