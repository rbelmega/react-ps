import React from "react";
import {connect} from "react-redux";

import BlogList from "../blog-list/BlogList";
import * as actions from "../../actions/index";

class Footer extends React.Component {

	componentDidMount() {
		this.fetchData();
	}

	fetchData() {
		const {fetchPosts} = this.props;
		fetchPosts();
	}

	render() {
		return (
			<div style={{
				padding: 30
			}} ><BlogList posts={this.props.posts}/>
			</div>

		);
	}
}

const MapStateToProps = (state) => {
	return {
		posts: state.postsData
	};
};

Footer = connect(
	MapStateToProps,
	actions
)(Footer);

export default Footer;