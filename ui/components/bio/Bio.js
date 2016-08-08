import React from "react";

class Bio extends React.Component {

	render() {
		return (
			<div className="bio">
				<section>
					<article style={{
						margin: "10px 0"
					}}>
						<h3 style={{
							fontSize: 30,
							fontWeight: "lighter",
							marginBottom: 20
						}}
						>About</h3>

						{this.props.activities && this.props.activities.map((activity, index) => (
							<h3 key={index}>
								<i className={activity.iconClass}></i>
								{activity.text}
							</h3>

						))}
					</article>
					<p style={{
						margin: "50px 0  0"
					}}>
						{this.props.bio}
					</p>
				</section>
			</div>
		);
	}
}

export default Bio;