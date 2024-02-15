import { Route, Switch } from "wouter";

import { Header } from "./components/Header";

import { LandingPage } from "./Pages/Landing";
import { SynthPage } from "./Pages/Synth";

function App() {
	return (
		<>
			<Header />
			<Switch>
				<Route path="/" component={LandingPage} />
				<Route path="/synt" component={SynthPage} />
			</Switch>
		</>
	);
}

export default App;
