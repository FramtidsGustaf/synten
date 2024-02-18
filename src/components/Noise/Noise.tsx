import { ModuleWrapper } from "../layout/ModuleWrapper";
import { Group } from "../ui/Group";
import { filterVariants } from "../../utils/filterVariants";
import { VerticalSpace } from "../layout/VerticalSpace";
import { Knob } from "../ui/Knob";

import { useTheme } from "../../hooks/useTheme";

import * as noise from "../../store/Noise.store";
import Row from "../layout/Row/Row";

const Noise = () => {
	const theme = useTheme();
	return (
		<ModuleWrapper label="BRUS">
			<h3>FÖRSTÄRKARE</h3>
			<VerticalSpace h={theme.xs} />
			<Row>
				<Knob
					min={0}
					max={1}
					label="VOLYM"
					onChange={noise.setNoiseVolume}
					value={noise.noiseVolume.value}
				/>
				<Knob
					min={0}
					max={10}
					label="ATTACK"
					onChange={noise.setNoiseAttack}
					value={noise.noiseAttack.value}
				/>
				<Knob
					min={0}
					max={5}
					label="SLÄPP"
					onChange={noise.setNoiseRelease}
					value={noise.noiseRelease.value}
				/>
			</Row>

			<VerticalSpace h={theme.sm} />
			<h3>FÖRÄNDRINGSFILTER</h3>
			<VerticalSpace h={theme.xs} />
			<Group
				id="noise"
				data={filterVariants}
				onChange={(e) =>
					noise.setNoiseFilterType(e.target.value as BiquadFilterType)
				}
				value={noise.noiseFilterType.value}
			/>
			<VerticalSpace h={theme.xs} />
			<Row>
				<Knob
					label="START"
					min={0}
					max={20000}
					onChange={noise.setNoiseFilterStartFreq}
					value={noise.noiseFilterStartFreq.value}
				/>

				<Knob
					label="MÅL"
					min={0}
					max={20000}
					onChange={noise.setNoiseFilterEndFreq}
					value={noise.noiseFilterEndFreq.value}
				/>
				<Knob
					label="TOPP"
					min={0}
					max={10}
					onChange={noise.setNoiseFilterQ}
					value={noise.noiseFilterQ.value}
				/>

				<Knob
					label="TID"
					min={0}
					max={10}
					onChange={noise.setNoiseFilterAttackTime}
					value={noise.noiseFilterAttackTime.value}
				/>

				<Knob
					label="SLÄPP"
					min={0}
					max={10}
					onChange={noise.setNoiseFilterReleaseTime}
					value={noise.noiseFilterReleaseTime.value}
				/>
			</Row>
		</ModuleWrapper>
	);
};

export default Noise;
