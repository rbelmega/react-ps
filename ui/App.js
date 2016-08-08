import React from "react";
import Header from "./components/header/Header"
import Body from "./components/body/Body"


export const App = () => (
	<div style={{
		maxWidth: 1500,
		margin: "auto"
	}}>
		<Header />
		<Body />
	</div>
);
