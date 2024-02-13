import { useTheme } from "../../hooks/useTheme";
import * as delay from "../../store/Delay.store";
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
				onChange={delay.setLeftDelayTime}
				label="TID"
				value={delay.leftDelayTime.value}
			/>
			<Slider
				min={0}
				max={10}
				onChange={delay.setLeftDelayFeedback}
				label="RESPONS"
				value={delay.leftDelayFeedback.value}
			/>
			<Slider
				min={0}
				max={1}
				onChange={delay.setLeftDelayVolume}
				label="VOLYM"
				value={delay.leftDelayVolume.value}
			/>
			<VerticalSpace h={theme.sm} />
			<h3>HÖGER</h3>
			<VerticalSpace h={theme.xs} />
			<Slider
				min={0}
				max={10}
				onChange={delay.setRightDelayTime}
				label="TID"
				value={delay.rightDelayTime.value}
			/>
			<Slider
				min={0}
				max={10}
				onChange={delay.setRightDelayFeedback}
				label="RESPONS"
				value={delay.rightDelayFeedback.value}
			/>
			<Slider
				min={0}
				max={1}
				onChange={delay.setRightDelayVolume}
				label="VOLYM"
				value={delay.rightDelayVolume.value}
			/>
		</ModuleWrapper>
	);
};

export default Delay;
