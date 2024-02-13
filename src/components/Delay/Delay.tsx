import { useTheme } from "../../hooks/useTheme";
import {
	leftDelayFeedback,
	leftDelayTime,
	leftDelayVolume,
	rightDelayFeedback,
	rightDelayTime,
	rightDelayVolume,
	setLeftDelayFeedback,
	setLeftDelayTime,
	setLeftDelayVolume,
	setRightDelayFeedback,
	setRightDelayTime,
	setRightDelayVolume,
} from "../../store/Delay.store";
import { ModuleWrapper } from "../layout/ModuleWrapper";
import VerticalSpace from "../layout/VerticalSpace/VerticalSpace";
import Slider from "../ui/Slider/Slider";

const Delay = () => {
	const theme = useTheme();
	return (
		<ModuleWrapper label="EKO">
			<h3>VÄNSTER</h3>
			<VerticalSpace h={theme.xs} />
			<Slider
				min={0}
				max={10}
				onChange={setLeftDelayTime}
				label="TID"
				value={leftDelayTime.value}
			/>
			<Slider
				min={0}
				max={10}
				onChange={setLeftDelayFeedback}
				label="RESPONS"
				value={leftDelayFeedback.value}
			/>
			<Slider
				min={0}
				max={1}
				onChange={setLeftDelayVolume}
				label="VOLYM"
				value={leftDelayVolume.value}
			/>
			<VerticalSpace h={theme.sm} />
			<h3>HÖGER</h3>
			<VerticalSpace h={theme.xs} />
			<Slider
				min={0}
				max={10}
				onChange={setRightDelayTime}
				label="TID"
				value={rightDelayTime.value}
			/>
			<Slider
				min={0}
				max={10}
				onChange={setRightDelayFeedback}
				label="RESPONS"
				value={rightDelayFeedback.value}
			/>
			<Slider
				min={0}
				max={1}
				onChange={setRightDelayVolume}
				label="VOLYM"
				value={rightDelayVolume.value}
			/>
		</ModuleWrapper>
	);
};

export default Delay;
