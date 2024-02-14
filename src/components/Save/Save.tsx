import { Signal, signal } from "@preact/signals-react";
import { synth } from "../../store/Synth.store";

import floppy from "../../assets/images/synt-floppy.svg";
import close from "../../assets/images/synt-close.svg";
import ok from "../../assets/images/synt-ok.svg";

import classes from "./Save.module.css";
import { saveSynth } from "../../db/queries";

const isSaving: Signal<boolean> = signal(false);
const settingsName: Signal<string> = signal("");

const Save = () => {
	const save = () => {
		saveSynth(settingsName.value);
		isSaving.value = false;
	};
	return (
		<>
			{synth.value ? (
				<>
					{isSaving.value ? (
						<div className={classes.form}>
							<input
								placeholder="NAMN"
								className={classes.input}
								autoFocus
								onChange={(e) => {
									settingsName.value = e.target.value;
								}}
								value={settingsName.value}
							/>
							<img
								src={close}
								alt="close"
								className={classes.close}
								onClick={() => {
									isSaving.value = false;
								}}
							/>
							<img src={ok} alt="save" className={classes.ok} onClick={save} />
						</div>
					) : (
						<img
							src={floppy}
							alt="save"
							className={classes.floppy}
							onClick={() => {
								isSaving.value = true;
							}}
						/>
					)}
				</>
			) : null}
		</>
	);
};

export default Save;
