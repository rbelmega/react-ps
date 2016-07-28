import {v4} from "node-uuid";
import fetch from 'isomorphic-fetch'

const myBio = {
	activities: [
		{
			iconClass: "fa fa-heartbeat heartbeat",
			text: "85 bpm"
		},
		{
			iconClass: "fa fa-coffee",
			text: "128 cups"
		},
		{
			iconClass: "fa fa-code",
			text: "128K lines of codee"
		},
		{
			iconClass: "fa fa-google",
			text: "12K queries"
		},
		{
			iconClass: "fa fa-stack-overflow",
			text: "1K found answers"
		}
	],
	bio: "I have over 4+ years of experience in Web development. I have been involved in numerous of project as of small startups nature as well as big enterprise solutions.  I have experience working I different team sizes and distribution of all over the world. Had experience leading the technical solution and act as team lead. At the this moment I focus on modern new web ui frameworks and have good experience working with numerous frameworks and libraries such as Angular, React, NodeJS, JQuery, Bootstrap, etc. I had strong experience working with a couple of Business Intelligence platforms and creating customizable rich web UI dashboards In the ways of extending the native components and creating rich interfaces."

};

const posts = [
	{
		"name": "should you be an engineer (part 1)?",
		"date": "1 Mar 2016",
		"id": "1",
		"file": "post-1.md"
	}
];

const delay = (ms) =>
	new Promise(resolve => setTimeout(resolve, ms));

export const fetchBio = () =>
	delay(5).then(() => {
		return myBio;
	});

export const fetchPosts = () =>
	delay(5).then(() => {
		return posts;
	});

export const fetchBlogPost = (blogID) =>
	fetch(`/data/posts/${blogID}`)
		.then(response => response.body);