import React from "react"
import {Timeline} from 'react-twitter-widgets'

class Twitter extends React.Component {
	constructor() {
		super();
		this.classLoaded = "";
	}
	getScript() {
		var d = document;
		var s = "script";
		var id = "twitter-wjs";
		var js;
		var fjs = d.getElementById("tweets");
		if (!d.getElementById(id)) {
			js = d.createElement(s);
			js.id = id;
			js.src = "http://platform.twitter.com/widgets.js";
			fjs.parentNode.insertBefore(js, fjs);
		}
	}

	componentDidMount() {
		// this.getScript();
	}

	loaded() {
		this.classLoaded = "loaded";
		this.forceUpdate()
	}

	render() {

		return (
			<div className="twitter">
				<div className={this.classLoaded}>
					<Timeline
						widgetId={'694262144762822658'}
						options={{
							username: 'izzz0',
							chrome: "nofooter noheader noborder noscrollbar transparent",
							theme: "dark",
							linkColor: "#000"
						}}
						onLoad={() => this.loaded()}
					/>
				</div>
			</div>
			// <div className="twitter">
			// 	<a className="twitter-timeline"
			// 		data-chrome="nofooter noheader noborder noscrollbar transparent"
			// 		href="https://twitter.com/izzz0"
			// 		data-theme="dark"
			// 		data-link-color="#000"
			// 		data-widget-id="694262144762822658">Tweets by @izzz0</a>
			// 	<div id="tweets"></div>
			// </div>
		);

	}
}

export default Twitter;