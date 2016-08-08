import React from "react";
import {connect} from "react-redux";
import BlogList from "../blog-list/BlogList";
import * as actions from "../../actions/index";
import $ from "jquery";

let token = '321136775.3cb013a.1ad40a92d27f452d8320bb1c45b0baf5';
let username = 'rbelmega';
let num_photos = 10;

class Footer extends React.Component {

	componentDidMount() {
		this.fetchData();
	}

	fetchData() {
		let self = this;
		const {fetchPosts} = this.props;
		fetchPosts();

		$.ajax({
			url: 'https://api.instagram.com/v1/users/321136775/media/recent?access_token=' + token,
			dataType: 'JSONP',
			jsonpCallback: 'callback',
			type: 'GET',
			success: function (data) {
				self.data = data.data;
				self.forceUpdate();
			}
		});

	}

	render() {
		return (
			<div style={{
			}}>
				<div style={{
					whiteSpace: "nowrap",
					overflowY: "auto"
				}}>
					{this.data && this.data.map(img => <img src={img.images.thumbnail.url}/>)}
				</div>
				<div style={{
					padding: 30
				}}>
					<BlogList posts={this.props.posts}/>
				</div>
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