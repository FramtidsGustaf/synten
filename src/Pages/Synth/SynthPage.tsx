import { useEffect } from "react";

import { Filter } from "../../components/Filter";
import { Delay } from "../../components/Delay";
import { Oscillator } from "../../components/Oscillator";
import { Reverb } from "../../components/Reverb";
import { VerticalSpace } from "../../components/layout/VerticalSpace";
import { oscOne, oscTwo, oscThree } from "../../store/Osc.store";
import { useTheme } from "../../hooks/useTheme";

import { synth } from "../../store/Synth.store";

import { Midi } from "../../Synthesizer/Midi";

import classes from "./SynthPage.module.css";

const SynthPage = () => {
	const theme = useTheme();

	useEffect(() => {
		if (!synth.value) return;
		new Midi(synth.value);
	}, []);

	return (
		<div className={classes.modules}>
			<Oscillator osc={oscOne} id="oscillator-1" />
			<Oscillator osc={oscTwo} id="oscillator-2" />
			<Oscillator osc={oscThree} id="oscollator-3" />
			<div>
				<Filter />
				<VerticalSpace h={theme.xs} />
				<Delay />
			</div>
			<Reverb />
		</div>
	);
};

export default SynthPage;
