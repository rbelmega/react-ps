import React from "react"
// import {Timeline} from 'react-twitter-widgets'

class Twitter extends React.Component {
	constructor() {
		super();
		this.classLoaded = "";
	}

	getScript() {
		let self = this;
		window.twttr = (function (d, s, id) {
			var js, fjs = d.getElementById("tweets"),
				t = window.twttr || {};
			if (d.getElementById(id)) {
				return;
			}
			js = d.createElement(s);
			js.id = id;
			js.src = "https://platform.twitter.com/widgets.js";
			fjs.parentNode.insertBefore(js, fjs);

			t._e = [];
			t.ready = function (f) {
				t._e.push(f);
			};

			return t;
		}(document, "script", "twitter-wjs"));

		// / Wait for the asynchronous resources to load
		twttr.ready(function (twttr) {
			twttr.events.bind(
				'rendered',
				function (event) {
					self.loaded();
				}
			);
		});
	}

	componentDidMount() {
		this.getScript();
	}

	loaded() {
		this.classLoaded = "loaded";
		this.forceUpdate()
	}

	render() {

		return (
			<div className="twitter">
				<div className={this.classLoaded}>
					<a className="twitter-timeline"
						data-chrome="nofooter noheader noborder noscrollbar transparent"
						href="https://twitter.com/izzz0"
						data-theme="dark"
						data-link-color="#000"
						data-widget-id="694262144762822658">Tweets by @izzz0</a>
					<div id="tweets"></div>
				</div>
			</div>
		);

	}
}

export default Twitter;