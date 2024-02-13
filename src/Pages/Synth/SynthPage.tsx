import { useEffect } from "react";

import { Filter } from "../../components/Filter";
import { Delay } from "../../components/Delay";
import { Oscillator } from "../../components/Oscillator";
import { Reverb } from "../../components/Reverb";
import { Noise } from "../../components/Noise";

import { oscOne, oscTwo, oscThree } from "../../store/Osc.store";
import { synth } from "../../store/Synth.store";

import { Midi } from "../../Synthesizer/Midi";

import classes from "./SynthPage.module.css";

const SynthPage = () => {
	useEffect(() => {
		if (!synth.value) return;
		new Midi(synth.value);
	}, []);

	return (
		<div className={classes.modules}>
			<div className={classes.firstRow}>
				<Oscillator osc={oscOne} id="oscillator-1" />
				<Oscillator osc={oscTwo} id="oscillator-2" />
				<Oscillator osc={oscThree} id="oscollator-3" />
				<Noise />
				<Filter />
			</div>
			<div className={classes.effects}>
				<Delay />
				<Reverb />
			</div>
		</div>
	);
};

export default SynthPage;
