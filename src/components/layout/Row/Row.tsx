import { ReactNode } from "react";

import classes from "./Row.module.css";

interface RowProps {
	children: ReactNode;
	spacebetween?: boolean;
}

const Row = ({ children, spacebetween }: RowProps) => {
	const classNames = () => {
		if (spacebetween) return classes.rowSpaceBetween;
		return classes.row;
	};

	return <div className={classNames()}>{children}</div>;
};

export default Row;
