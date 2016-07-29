import React from "react";
import {connect} from "react-redux";
import Twitter from "../twitter/Twitter";
import Bio from "../bio/Bio";
import BlogList from "../blog-list/BlogList";
import * as actions from "../../actions/index";


class Body extends React.Component {

	componentDidMount(){
		this.fetchData();
	}

	fetchData() {
		const {fetchBio, fetchPosts} = this.props;
		fetchBio();
		fetchPosts();
	}

	render() {
		return (
			<div className="wrapper" style={{
				alignItems: "stretch",
				background: "#ffffff"
			}}>
				<Twitter />
				<Bio bio = {this.props.bio} activities = {this.props.activities}/>
				<BlogList posts = {this.props.posts} />
			</div>
		);
	}
}


const MapStateToProps = (state) => {
	return {
		bio: state.bioData.bio,
		activities: state.bioData.activities,
		posts: state.postsData
	};
};

Body = connect(
	MapStateToProps,
	actions
)(Body);

export default Body;