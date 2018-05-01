import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Homepage from "./homepage";
import About from "./about";
import NotFound from "./not-found";

export default () => (
	<Router>
		<Switch>
			<Route exact path="/" component={Homepage} />
			<Route exact path="/about" component={About} />
			<Route component={NotFound} />
		</Switch>
	</Router>
);
