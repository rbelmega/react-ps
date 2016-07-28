import React from "react";
import {Link} from "react-router";

class BlogList extends React.Component {
	render() {

		return (
			<div className="blog">
				<h2 className="header">
					<i className="fa fa-pencil"></i>
					blog
				</h2>
				{this.props.posts && this.props.posts.map(post => {
					return (
						<p key={post.file}>
							<i className="fa fa-list-alt"></i>
							<span className="date">{post.date}</span>
							<Link to={`/blog/${post.id}`}>
								<span className="post">{post.name}</span>
							</Link>
						</p>
					);
				})}
			</div>
		);
	}
}

export default BlogList;