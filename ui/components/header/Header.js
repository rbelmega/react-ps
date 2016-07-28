import React from "react";
import Contacts from "../contacts/Contacts";

class Header extends React.Component {
	render() {
		return (
			<header>
				<div className="wrapper">
					<Contacts />
					<section className="profile-image-wrapper">
						<div className="test">
							<div className="fb">
								<span>F</span>
							</div>
						</div>
						<div className="profile-image"></div>
					</section>
					<div className="profile-info">
						<h3>Rostyslav Belmeha</h3>
						<p>Front-end developer at SoftServe</p>
						<p><i className='fa fa-map-marker'></i>Ivano-Frankivsk, Ukraine</p>
					</div>
				</div>
			</header>
		)
	}
}

export default Header;