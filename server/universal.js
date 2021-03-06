import path from "path";
import fs from "fs";

import React from "react";
import { renderToString } from "react-dom/server";
import Helmet from "react-helmet";

import { Route } from "react-router-dom";

import App from "../src/containers/app";

// A simple helper function to prepare the HTML markup
const prepHTML = (data, { html, head, body }) => {
	data = data.replace('<html lang="en">', `<html ${html}`);
	data = data.replace("</head>", `${head}</head>`);
	data = data.replace('<div id="root"></div>', `<div id="root">${body}</div>`);
	return data;
};

const universalLoader = (req, res) => {
	// Load in our HTML file from our build
	const filePath = path.resolve(__dirname, "../build/index.html");

	fs.readFile(filePath, "utf8", (err, htmlData) => {
		// If there's an error... serve up something nasty
		if (err) {
			console.error("Read error", err);

			return res.status(404).end();
		}

		// Render App in React
		const routeMarkup = renderToString(App);

		// Let Helmet know to insert the right tags
		const helmet = Helmet.renderStatic();

		// Form the final HTML response
		const html = prepHTML(htmlData, {
			html: helmet.htmlAttributes.toString(),
			head: helmet.title.toString() + helmet.meta.toString() + helmet.link.toString(),
			body: routeMarkup
		});

		// Up, up, and away...
		res.send(html);
	});
};

export default universalLoader;
