import { Signal, signal } from "@preact/signals-react";
import { synth } from "../../store/Synth.store";

import floppy from "../../../public/images/synt-floppy.svg";
import close from "../../../public/images/synt-close.svg";
import ok from "../../../public/images/synt-on-button.svg";

import { saveSynth } from "../../db/queries";
import { useConfirm } from "../../hooks/useConfirm";

import classes from "./Save.module.css";
import { FormEventHandler } from "react";

const isSaving: Signal<boolean> = signal(false);
const settingsName: Signal<string> = signal("");

const Save = () => {
	const confirm = useConfirm();

	const save = () => {
		saveSynth(settingsName.value);
		settingsName.value = "";
		isSaving.value = false;
	};

	const handleSave: FormEventHandler = (e) => {
		e.preventDefault();
		if (!settingsName.value) return;
		confirm({
			message: "Vill du spara denna förinställning?",
			description: `Förinställningen kommer att sparas på din enhet \noch kommer finnas kvar tills du tar bort den.`,
			onConfirm: () => {
				save();
				isSaving.value = false;
			},
		});
	};

	const handleCancel = () => {
		isSaving.value = false;
		settingsName.value = "";
	};

	return (
		<>
			{synth.value ? (
				<>
					<form
						className={`${classes.form} ${
							isSaving.value ? classes.formOpen : ""
						}`}
						onSubmit={handleSave}
					>
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
							alt="cancel"
							className={classes.close}
							onClick={() => {
								handleCancel();
							}}
						/>
						<input type="image" src={ok} className={classes.ok} alt="save" />
					</form>

					<img
						src={floppy}
						alt="save"
						className={`${classes.floppy} ${
							isSaving.value ? classes.floppyHidden : ""
						}`}
						onClick={() => {
							isSaving.value = true;
						}}
					/>
				</>
			) : null}
		</>
	);
};

export default Save;
