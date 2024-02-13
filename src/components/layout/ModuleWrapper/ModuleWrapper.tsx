import VerticalSpace from "../VerticalSpace/VerticalSpace";

import { useTheme } from "../../../hooks/useTheme";

interface ModuleWrapperProps {
	children: React.ReactNode;
	label: string;
}

const ModuleWrapper = ({ children, label }: ModuleWrapperProps) => {
	const theme = useTheme();

	return (
		<div>
			<h2>{label}</h2>
			<VerticalSpace h={theme.sm} />
			{children}
		</div>
	);
};

export default ModuleWrapper;
