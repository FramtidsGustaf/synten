import { ReactNode } from "react";

import classes from "./Row.module.css";

interface RowProps {
	children: ReactNode;
}

const Row = ({ children }: RowProps) => {
	return <div className={classes.row}>{children}</div>;
};

export default Row;
