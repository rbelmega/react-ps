import React from "react";

class Header extends React.Component {
	render() {
		return (
			<header>
				<div className="header-wrapper">
					<div className="profile-info">
						<h3>Rostyslav Belmeha</h3>
						<p>Front-end developer at SoftServe</p>
					</div>
				</div>
			</header>
		)
	}
}

export default Header;