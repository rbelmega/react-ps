import React from "react";
import {Link} from "react-router";
import {withRouter} from "react-router";
import {connect} from "react-redux";
import * as actions from "../../actions/index";
// import ReactMarkdown from 'react-markdown';
// import CodeBlock from "./CodeBlock"
import Helmet from 'react-helmet';
import MDReactComponent from 'markdown-react-js';

class Blog extends React.Component {

	componentDidMount() {
		this.fetchData();
		this.markdownFile = require('raw!../../data/posts/post-1.md');
		this.forceUpdate();
		var interval = setInterval(function() {
			if (typeof window !== "undefined") {
				let codes = document.querySelectorAll(".javascript pre");
				codes.forEach((code) => {window.hljs.highlightBlock(code);});
				clearInterval(interval);
			}
		}, 100);
	}

	fetchData() {
		const {fetchBlogPost, params} = this.props;
		fetchBlogPost(`post-${params.id}.md`);
	}

	render() {
		return (
			<section>
				<Helmet title="Rostyslav Belmeha | Blog" />
				<Link to="/">
					<h2 className="dev-name"><span className="post">Rostyslav Belmeha</span></h2>
				</Link>
				<header>should you be an engineer (part 1)?</header>
				<section className="fake-post"></section>
				<section className="blog-wrapper">
					<p className="post-date">Posted on Mar 1, 2016</p>
					<article className="javascript">
						<MDReactComponent
							text={this.markdownFile || ""}
						/>
					</article>
				</section>
			</section>
		);
	}

}

const MapStateToProps = (state, {params}) => {
	return {
		blogPost: state.blogData,
		params
	};
};

Blog = withRouter(connect(
	MapStateToProps,
	actions
)(Blog));

export default Blog;