import React from 'react';
import Helmet from 'react-helmet';
import ReactDOM from 'react-dom/server';

/**
 * Wrapper component containing HTML metadata and boilerplate tags.
 * Used in server-side code only to wrap the string output of the
 * rendered route component.
 *
 * The only thing this component doesn't (and can't) include is the
 * HTML doctype declaration, which is added to the rendered output
 * by the server.js file.
 */
const Html = ({ state, component }) => {
	const head = Helmet.rewind();
	const content = component ? ReactDOM.renderToString(component) : '';
	const domApp = { __html: content };
	const domState = { __html: `window.__INITIAL_STATE__=${JSON.stringify(state)};` };

	return (
		<html lang="en-us">
		<head>
			{head.base.toComponent()}
			{head.title.toComponent()}
			{head.meta.toComponent()}
			{head.link.toComponent()}
			{head.script.toComponent()}
			<link rel="shortcut icon" href="./favicon.ico" />
			<meta name="viewport" content="width=device-width, initial-scale=1" />
			<link rel="stylesheet" href="http://www.belmeha.com/style.css" />
			<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.5.0/css/font-awesome.min.css"/>
			<link rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/highlight.js/8.5/styles/github.min.css"/>
			<script async src="//cdnjs.cloudflare.com/ajax/libs/highlight.js/8.5/highlight.min.js" charSet="UTF-8" />
		</head>
		<body>
		{/*<script src={assets.javascript.vendor} charSet="UTF-8" />*/}
		<div id="app" dangerouslySetInnerHTML={domApp}></div>
		<script dangerouslySetInnerHTML={domState} charSet="UTF-8" />
		<script src="http://www.belmeha.com/index.js" charSet="UTF-8" />
		</body>
		</html>
	);
};
//
// Html.propTypes = {
// 	assets: PropTypes.object,
// 	component: PropTypes.node,
// 	store: PropTypes.object
// };

export default Html;