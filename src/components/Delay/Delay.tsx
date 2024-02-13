import { ModuleWrapper } from "../layout/ModuleWrapper";
import VerticalSpace from "../layout/VerticalSpace/VerticalSpace";
import Slider from "../ui/Slider/Slider";

import { useTheme } from "../../hooks/useTheme";

import * as delay from "../../store/Delay.store";

import classes from "./Delay.module.css";

const Delay = () => {
	const theme = useTheme();
	return (
		<ModuleWrapper label="EKO">
			<div className={classes.delaySidesWrapper}>
				<div>
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
				</div>
				<div>
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
				</div>
			</div>
		</ModuleWrapper>
	);
};

export default Delay;
