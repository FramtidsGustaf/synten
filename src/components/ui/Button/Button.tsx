import { ButtonHTMLAttributes } from "react";

import classes from "./Button.module.css";

const Button = ({
	children,
	...props
}: ButtonHTMLAttributes<HTMLButtonElement>) => {
	return (
		<button className={classes.button} {...props}>
			{children}
		</button>
	);
};

export default Button;
