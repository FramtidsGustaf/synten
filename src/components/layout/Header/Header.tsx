import { Visualizer } from "../../Visualizer";

import classes from "./Header.module.css";
import Save from "../../Save/Save";

const Header = () => {
	return (
		<header className={classes.header}>
			<div className={classes.left}>
				<h1>SYNTEN</h1>
				<Visualizer />
			</div>

			<Save />
		</header>
	);
};

export default Header;
