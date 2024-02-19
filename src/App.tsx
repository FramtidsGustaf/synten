import { Route, Switch } from "wouter";

import { Header } from "./components/Header";
import { Notification } from "./components/ui/Notification";

import { LandingPage } from "./Pages/Landing";
import { SynthPage } from "./Pages/Synth";
import { ConfirmModal } from "./components/ui/ConfirmModal";

function App() {
	return (
		<>
			<Header />
			<Switch>
				<Route path="/" component={LandingPage} />
				<Route path="/synt" component={SynthPage} />
			</Switch>
			<ConfirmModal />
			<Notification />
		</>
	);
}

export default App;
