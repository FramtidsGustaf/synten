import { useLocation } from "wouter";
import { synth } from "../../store/Synth.store";
import { Synth } from "../../Synthesizer/Synth";
import { Button } from "../../components/ui/Button";

const LandingPage = () => {
	const location = useLocation();
	const handleClick = () => {
		synth.value = new Synth();
		location[1]("/synth");
	};

	return (
		<div>
			<Button onClick={handleClick}>Till Synten</Button>
		</div>
	);
};

export default LandingPage;
