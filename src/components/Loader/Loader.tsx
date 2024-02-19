const knob = new URL("../../images/knob.svg", import.meta.url).href;

import classes from "./Loader.module.css";

const Loader = () => {
	return <img src={knob} alt="Loading..." className={classes.loader} />;
};

export default Loader;
