import classes from "./Loader.module.css";

const Loader = () => {
	return (
		<img
			src="knob.svg?url"
			alt="Loading..."
			className={classes.loader}
		/>
	);
};

export default Loader;
