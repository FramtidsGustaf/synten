interface VerticalSpaceProps {
	h: string;
}

const VerticalSpace = ({ h }: VerticalSpaceProps) => {
	return <div style={{ height: h }} />;
};

export default VerticalSpace;
