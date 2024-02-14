import { Route, Switch } from "wouter";

import { LandingPage } from "./Pages/Landing";
import { SynthPage } from "./Pages/Synth";

import { Visualizer } from "./components/Visualizer";

import classes from "./App.module.css";

function App() {
	return (
		<>
			<div className={classes.header}>
				<h1>SYNTEN</h1>
				<Visualizer />
			</div>

			<Switch>
				<Route path="/" component={LandingPage} />
				<Route path="/synt" component={SynthPage} />
			</Switch>
		</>
	);
}

export default App;
