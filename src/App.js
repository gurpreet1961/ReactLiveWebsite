import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.min.js";
import Home from "./component/Home";
import About from "./component/About";
import Service from "./component/Service";
import Contact from "./component/Contact";
import Navbar from "./component/NavBar";
import Footer from "./component/Footer";
import "./App.css";
import { Switch, Route, Redirect } from "react-router-dom";
const App = () => {
	return (
		<>
			<Navbar />
			<Switch>
				<Route exact path="/" component={Home} />
				<Route exact path="/home" component={Home} />
				<Route exact path="/about" component={About} />
				<Route exact path="/service" component={Service} />
				<Route exact path="/contact" component={Contact} />
				<Redirect to="/" />
			</Switch>
			<Footer />
		</>
	);
};
export default App;
