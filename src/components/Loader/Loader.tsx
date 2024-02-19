import knob from "/images/knob.svg?url";

import classes from "./Loader.module.css";

const Loader = () => {
	return <img src={knob} alt="Loading..." className={classes.loader} />;
};

export default Loader;
