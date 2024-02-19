import { useLocation } from "wouter";
import { synth } from "../../store/Synth.store";
import { Synth } from "../../Synthesizer/Synth";

const syntOnButton = new URL("../../assets/images/synt-on-button.svg", import.meta.url)
	.href;

import classes from "./LandingPage.module.css";

const LandingPage = () => {
	const location = useLocation();

	const handleClick = () => {
		synth.value = new Synth();
		location[1]("/synt");
	};

	return (
		<div>
			<img
				src={syntOnButton}
				alt="Synt On Button"
				className={classes.onButton}
				onClick={handleClick}
			/>
		</div>
	);
};

export default LandingPage;
