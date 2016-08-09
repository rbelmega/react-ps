import React from "react";
import Header from "./components/header/Header"
import Body from "./components/body/Body"
import Helmet from 'react-helmet'

export const App = () => (
	<div style={{
		maxWidth: 1500,
		margin: "auto"
	}}>
		<Helmet title="Rostyslav Belmeha" />
		<Header />
		<Body />
	</div>
);
