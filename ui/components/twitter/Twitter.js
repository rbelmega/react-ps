import React from "react"

class Twitter extends React.Component {
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
		this.getScript();
	}

	render() {
		return (
			<div className="twitter">
				<a className="twitter-timeline"
					data-chrome="nofooter noheader noborder noscrollbar transparent"
					href="https://twitter.com/izzz0"
					data-theme="dark"
					data-link-color="#000"
					data-widget-id="694262144762822658">Tweets by @izzz0</a>
				<div id="tweets"></div>
			</div>
		);

	}
}

export default Twitter;