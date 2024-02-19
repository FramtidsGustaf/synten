import { Visualizer } from "../Visualizer";
import { Save } from "../Save";
import classes from "./Header.module.css";

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
