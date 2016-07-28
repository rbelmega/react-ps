import React from "react";

class Bio extends React.Component {

	render() {
		return (
			<div className="bio">
				<h2 className="header">
					<i className="fa fa-reddit-alien"></i>
					<span>about me</span>
				</h2>
				<section>
					<article style={{
						margin: "10px 0"
					}}>
						{this.props.activities && this.props.activities.map((activity, index) => (
							<h3 key={index}>
								<i className={activity.iconClass}></i>
								{activity.text}
							</h3>

						))}
					</article>
					<p>
						{this.props.bio}
					</p>
				</section>
			</div>
		);
	}
}

export default Bio;