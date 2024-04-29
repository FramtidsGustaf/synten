import { useEffect } from "react";
import { VerticalSpace } from "../../../components/layout/VerticalSpace";

import { allSavedPresetsNames } from "../../../store/Saved.store";
import { setIsDrawerOpen } from "../../../store/Drawer.store";

import { useTheme } from "../../../hooks/useTheme";
import { useConfirm } from "../../../hooks/useConfirm";

import {
	deleteSynth,
	getAllNames,
	getSynth,
	// getSynthToShare,
} from "../../../db/queries";

import classes from "./DrawerContent.module.css";

const DrawerContent = () => {
	const theme = useTheme();
	const confirm = useConfirm();

	const handleDelete = (name: string) => {
		confirm({
			message: `Är du säker på att du vill ta bort: ${name}?`,
			description: "När den är raderad är den borta för alltid.",
			onConfirm: () => {
				deleteSynth(name);
			},
		});
	};

	useEffect(() => {
		getAllNames();
	}, []);

	return (
		<div>
			<h2 className={classes.label}>SPARADE FÖRINSTÄLLNINGAR</h2>
			<VerticalSpace h={theme.sm} />
			<ul className={classes.list}>
				{allSavedPresetsNames.value.map((name) => (
					<li key={name as string} className={classes.listItem}>
						<div
							className={classes.savedTitle}
							onClick={() => {
								getSynth(name as string);
								setIsDrawerOpen(false);
							}}
						>
							{name as string}
						</div>
						<img
							src="/synt-trash.svg?url"
							alt="Släng"
							className={classes.icon}
							onClick={() => handleDelete(name as string)}
						/>
						{/*TBA*/}
						{/* <button
							onClick={() => {
								getSynthToShare(name as string);
							}}
						>
							Share
						</button> */}
					</li>
				))}
			</ul>
		</div>
	);
};

export default DrawerContent;
