import React, { Component } from "react";

class Homepage extends Component {
	render() {
		return (
			<div>
				<ul>
					<li>
						<a href="/">Home</a>
					</li>
					<li>
						<a href="/about">About</a>
					</li>
					<li>
						<a href="/something">A broken page</a>
					</li>
				</ul>
				<h1>Welcome to our beautiful homepage</h1>
			</div>
		);
	}
}

export default Homepage;
