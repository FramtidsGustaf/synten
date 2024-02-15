import { ModuleWrapper } from "../layout/ModuleWrapper";
import VerticalSpace from "../layout/VerticalSpace/VerticalSpace";
import { Group } from "../ui/Group";
import { Knob } from "../ui/Knob";
import Row from "../layout/Row/Row";

import { filterVariants } from "../../utils/filterVariants";

import { useTheme } from "../../hooks/useTheme";

import * as reverb from "../../store/Reverb.store";

const Reverb = () => {
	const theme = useTheme();
	return (
		<ModuleWrapper label="EFTERKLANG">
			<Row>
				<div>
					<h3>VÄNSTER</h3>
					<Row>
						<Knob
							min={1}
							max={10}
							onChange={reverb.setLeftReverbDuration}
							label="TID"
							value={reverb.leftReverbDuration.value}
						/>
						<Knob
							min={0}
							max={20}
							onChange={reverb.setLeftReverbDecay}
							label="FÖRFALL"
							value={reverb.leftReverbDecay.value}
						/>
						<Knob
							min={0}
							max={1}
							onChange={reverb.setLeftReverbVolume}
							label="VOLYM"
							value={reverb.leftReverbVolume.value}
						/>
					</Row>
					<VerticalSpace h={theme.sm} />
					<h3>FILTER</h3>
					<VerticalSpace h={theme.xs} />
					<Group
						id="reverb-filter-left"
						data={filterVariants}
						value={reverb.leftReverbFilterType.value}
						onChange={(e) =>
							reverb.setLeftReverbFilterType(e.target.value as BiquadFilterType)
						}
					/>
					<VerticalSpace h={theme.sm} />
					<Row>
						<Knob
							min={0}
							max={3000}
							onChange={reverb.setLeftReverbFilterFreq}
							label="GRÄNS"
							value={reverb.leftReverbFilterFreq.value}
						/>
						<Knob
							min={0}
							max={10}
							onChange={reverb.setLeftReverbFilterQ}
							label="TOPP"
							value={reverb.leftReverbFilterQ.value}
						/>
					</Row>
				</div>
				<div>
					<h3>HÖGER</h3>
					<Row>
						<Knob
							min={1}
							max={10}
							onChange={reverb.setRightReverbDuration}
							label="TID"
							value={reverb.rightReverbDuration.value}
						/>
						<Knob
							min={0}
							max={20}
							onChange={reverb.setRightReverbDecay}
							label="FÖRFALL"
							value={reverb.rightReverbDecay.value}
						/>
						<Knob
							min={0}
							max={1}
							onChange={reverb.setRightReverbVolume}
							label="VOLYM"
							value={reverb.rightReverbVolume.value}
						/>
					</Row>
					<VerticalSpace h={theme.sm} />
					<h3>FILTER</h3>
					<VerticalSpace h={theme.xs} />
					<Group
						id="reverb-filter-right"
						data={filterVariants}
						value={reverb.rightReverbFilterType.value}
						onChange={(e) =>
							reverb.setRightReverbFilterType(
								e.target.value as BiquadFilterType
							)
						}
					/>
					<VerticalSpace h={theme.sm} />
					<Row>
						<Knob
							min={0}
							max={3000}
							onChange={reverb.setRightReverbFilterFreq}
							label="GRÄNS"
							value={reverb.rightReverbFilterFreq.value}
						/>
						<Knob
							min={0}
							max={10}
							onChange={reverb.setRightReverbFilterQ}
							label="TOPP"
							value={reverb.rightReverbFilterQ.value}
						/>
					</Row>
				</div>
			</Row>
		</ModuleWrapper>
	);
};

export default Reverb;
