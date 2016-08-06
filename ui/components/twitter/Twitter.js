import React from "react"
// import {Timeline} from 'react-twitter-widgets'

class Twitter extends React.Component {
	constructor() {
		super();

		if (typeof window !== "undefined") {
			this.classLoaded = window.twttr ? "loaded" : "";
		}

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
				{!this.classLoaded && <div className="sk-cube-grid">
					<div className="sk-cube sk-cube1"></div>
					<div className="sk-cube sk-cube2"></div>
					<div className="sk-cube sk-cube3"></div>
					<div className="sk-cube sk-cube4"></div>
					<div className="sk-cube sk-cube5"></div>
					<div className="sk-cube sk-cube6"></div>
					<div className="sk-cube sk-cube7"></div>
					<div className="sk-cube sk-cube8"></div>
					<div className="sk-cube sk-cube9"></div>
				</div>
				}
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