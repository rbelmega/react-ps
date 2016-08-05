import React from "react";
var hljs;

if (typeof window !== "undefined") {
	hljs = window.hljs;
}

class CodeBlock extends React.Component {
	componentDidMount() {
		this.highlightCode();
	};

	componentDidUpdate() {
		this.highlightCode();
	};

	highlightCode() {
		if (typeof hljs !== "undefined") {
			hljs.highlightBlock(this.refs.code);
		}

	};

	render() {
		return (
			<pre>
              <code className={this.props.language} ref="code">
                {this.props.literal}
              </code>
            </pre>
		);
	}
}

export default CodeBlock;