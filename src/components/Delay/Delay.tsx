import { ModuleWrapper } from "../layout/ModuleWrapper";
import VerticalSpace from "../layout/VerticalSpace/VerticalSpace";
import { Knob } from "../ui/Knob";

import { useTheme } from "../../hooks/useTheme";

import * as delay from "../../store/Delay.store";

import Row from "../layout/Row/Row";

const Delay = () => {
	const theme = useTheme();
	return (
		<ModuleWrapper label="EKO">
			<h3>VÄNSTER</h3>
			<Row>
				<Knob
					min={0}
					max={2}
					onChange={delay.setLeftDelayTime}
					label="TID"
					value={delay.leftDelayTime.value}
				/>
				<Knob
					min={0}
					max={1}
					onChange={delay.setLeftDelayFeedback}
					label="RESPONS"
					value={delay.leftDelayFeedback.value}
				/>
				<Knob
					min={0}
					max={1}
					onChange={delay.setLeftDelayVolume}
					label="VOLYM"
					value={delay.leftDelayVolume.value}
				/>
			</Row>

			<VerticalSpace h={theme.xs} />

			<h3>HÖGER</h3>
			<Row>
				<Knob
					min={0}
					max={2}
					onChange={delay.setRightDelayTime}
					label="TID"
					value={delay.rightDelayTime.value}
				/>
				<Knob
					min={0}
					max={1}
					onChange={delay.setRightDelayFeedback}
					label="RESPONS"
					value={delay.rightDelayFeedback.value}
				/>
				<Knob
					min={0}
					max={1}
					onChange={delay.setRightDelayVolume}
					label="VOLYM"
					value={delay.rightDelayVolume.value}
				/>
			</Row>
		</ModuleWrapper>
	);
};

export default Delay;
