import { Suspense, useEffect } from "react";
import { useLocation } from "wouter";

import { Delay } from "../../components/Delay";
import { Oscillator } from "../../components/Oscillator";
import { Reverb } from "../../components/Reverb";
import { Noise } from "../../components/Noise";
import { VerticalSpace } from "../../components/layout/VerticalSpace";
import { Drawer } from "../../components/ui/Drawer/";
import DrawerContent from "./DrawerContent/DrawerContent";
import { Loader } from "../../components/Loader";

import { oscOne, oscTwo, oscThree } from "../../store/Osc.store";
import { synth } from "../../store/Synth.store";

import { Midi } from "../../Synthesizer/Midi";
import { initDB } from "../../db/initDB";

import { useTheme } from "../../hooks/useTheme";

import classes from "./SynthPage.module.css";

const SynthPage = () => {
	const location = useLocation();
	const theme = useTheme();
	useEffect(() => {
		initDB();
		if (!synth.value) return;
		new Midi(synth.value);
	}, []);

	useEffect(() => {
		if (!synth.value) {
			location[1]("/");
		}
	}, [synth.value]);

	return (
		<Suspense fallback={<Loader />}>
			<div className={classes.modules}>
				<div className={classes.firstRow}>
					<div className={classes.oscs}>
						<Oscillator osc={oscOne} id="oscillator-1" label="OSCILLATOR ETT" />
						<Oscillator osc={oscTwo} id="oscillator-2" label="OSCILLATOR TVÅ" />
						<Oscillator
							osc={oscThree}
							id="oscollator-3"
							label="OSCILLATOR TRE"
						/>
					</div>
					<div className={classes.noise}>
						<Noise />
					</div>
				</div>
				<div className={classes.effects}>
					<Delay />
					<Reverb />
				</div>
			</div>
			<Drawer>
				<DrawerContent />
			</Drawer>
			<a href="https://github.com/FramtidsGustaf/synten">
				<img
					src="/github-mark.svg?url"
					alt="github"
					className={classes.github}
				/>
			</a>
			<VerticalSpace h={theme.xl} />
		</Suspense>
	);
};

export default SynthPage;
