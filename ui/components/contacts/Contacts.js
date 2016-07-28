import React from "react"

class Contacts extends React.Component {

	constructor() {
		super();
		this.color = "red";
		this.contacts = [
			{
				name: "Linkedin",
				link: "https://www.linkedin.com/in/rostyslav-belmega-8b540643",
				color: "#1A85BC",
				letter: "l"
			},
			{
				name: "Twitter",
				link: "https://twitter.com/izzz0",
				color: "#55ACEE",
				letter: "t"
			},
			{
				name: "Facebook",
				link: "https://www.facebook.com/r.belmega",
				color: "#3F5D9A",
				letter: "f"
			},
			{
				name: "GitHub",
				link: "https://github.com/rbelmega",
				color: "#2A2B2D",
				letter: "g"
			}
		];
	}

	update() {
		this.forceUpdate();
	}

	render() {
		return (
			<ul className="contact-list" style={{
				fontSize: "24px",
				width: 300,
				margin: 0,
				textAlign: "left"
			}}>
				{
					this.contacts.map((contact, index) => {
						return (
							<li key={index} ref="li">
								<a style={{color: contact.active ? contact.color: ""}}
									href={contact.link}
									onMouseEnter={() => {
										contact.active = true;
										this.update();
									}}
									onMouseLeave={() => {
										contact.active = false;
										this.update();
									}}
									target="_blank">
									{contact.name} </a>
							</li>
						)
					})}
			</ul>
		);
	}
}

export default Contacts;