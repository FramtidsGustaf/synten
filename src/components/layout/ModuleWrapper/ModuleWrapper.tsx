import { useTheme } from "../../../hooks/useTheme";
import VerticalSpace from "../VerticalSpace/VerticalSpace";
import classes from "./ModuleWrapper.module.css";

interface ModuleWrapperProps {
	children: React.ReactNode;
	label: string;
}

const ModuleWrapper = ({ children, label }: ModuleWrapperProps) => {
	const theme = useTheme();

	return (
		<div className={classes.moduleWrapper}>
			<h2>{label}</h2>
			<VerticalSpace h={theme.sm} />
			{children}
		</div>
	);
};

export default ModuleWrapper;
