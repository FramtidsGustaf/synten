import { Route, Switch } from "wouter";
import classes from "./App.module.css";
import { LandingPage } from "./Pages/Landing";
import SynthPage from "./Pages/Synth/SynthPage";

function App() {
	return (
		<>
			<div className={classes.header}>
				<h1>SYNT</h1>
			</div>

			<Switch>
				<Route path="/" component={LandingPage} />
				<Route path="/synth" component={SynthPage} />
			</Switch>
		</>
	);
}

export default App;
