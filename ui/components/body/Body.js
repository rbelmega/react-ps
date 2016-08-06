import React from "react";
import {connect} from "react-redux";
import Twitter from "../twitter/Twitter";
import Bio from "../bio/Bio";
import Contacts from "../contacts/Contacts";
import Footer from "../footer/Footer";
import * as actions from "../../actions/index";

class Body extends React.Component {

	componentDidMount() {
		this.fetchData();
	}

	fetchData() {
		const {fetchBio} = this.props;
		fetchBio();
	}

	render() {
		return (
			<div style={{
				margin: "0 5%",
				backgroundColor: "#252525",
				borderTop: "3px solid #00a3cd"
			}} >
				<div className="wrapper" style={{
					alignItems: "stretch"
				}}>
					<Twitter />
					<Bio bio={this.props.bio} activities={this.props.activities}/>

					<div>
						<section className="profile-image-wrapper">
							<div className="profile-image"></div>
						</section>
						{/*<p><i className='fa fa-map-marker'></i>Ivano-Frankivsk, Ukraine</p>*/}
						<Contacts />
					</div>
				</div>
				<Footer />
			</div>

		);
	}
}

const MapStateToProps = (state) => {
	return {
		bio: state.bioData.bio,
		activities: state.bioData.activities
	};
};

Body = connect(
	MapStateToProps,
	actions
)(Body);

export default Body;