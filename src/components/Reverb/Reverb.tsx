import { ModuleWrapper } from "../layout/ModuleWrapper";
import VerticalSpace from "../layout/VerticalSpace/VerticalSpace";
import { Group } from "../ui/Group";
import Slider from "../ui/Slider/Slider";
import { filterVariants } from "../../utils/filterVariants";

import { useTheme } from "../../hooks/useTheme";

import * as reverb from "../../store/Reverb.store";

import classes from "./Reverb.module.css";

const Reverb = () => {
	const theme = useTheme();
	return (
		<ModuleWrapper label="EFTERKLANG">
			<div className={classes.reverbSidesWrapper}>
				<div>
					<h3>VÄNSTER</h3>
					<VerticalSpace h={theme.xs} />
					<Slider
						min={1}
						max={10}
						onChange={(e) =>
							reverb.setLeftReverbDuration(e.target.valueAsNumber)
						}
						label="TID"
						value={reverb.leftReverbDuration.value}
					/>
					<Slider
						min={0}
						max={20}
						onChange={(e) => reverb.setLeftReverbDecay(e.target.valueAsNumber)}
						label="FÖRFALL"
						value={reverb.leftReverbDecay.value}
					/>
					<Slider
						min={0}
						max={1}
						onChange={(e) => reverb.setLeftReverbVolume(e.target.valueAsNumber)}
						label="VOLYM"
						value={reverb.leftReverbVolume.value}
					/>
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
					<Slider
						min={0}
						max={3000}
						onChange={(e) =>
							reverb.setLeftReverbFilterFreq(e.target.valueAsNumber)
						}
						label="FREKVENS"
						value={reverb.leftReverbFilterFreq.value}
					/>
					<Slider
						min={0}
						max={10}
						onChange={(e) =>
							reverb.setLeftReverbFilterQ(e.target.valueAsNumber)
						}
						label="TOPP"
						value={reverb.leftReverbFilterQ.value}
					/>
				</div>
				<div>
					<h3>HÖGER</h3>
					<VerticalSpace h={theme.xs} />
					<Slider
						min={1}
						max={10}
						onChange={(e) =>
							reverb.setRightReverbDuration(e.target.valueAsNumber)
						}
						label="TID"
						value={reverb.rightReverbDuration.value}
					/>
					<Slider
						min={0}
						max={20}
						onChange={(e) => reverb.setRightReverbDecay(e.target.valueAsNumber)}
						label="FÖRFALL"
						value={reverb.rightReverbDecay.value}
					/>
					<Slider
						min={0}
						max={1}
						onChange={(e) =>
							reverb.setRightReverbVolume(e.target.valueAsNumber)
						}
						label="VOLYM"
						value={reverb.rightReverbVolume.value}
					/>
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
					<Slider
						min={0}
						max={3000}
						onChange={(e) =>
							reverb.setRightReverbFilterFreq(e.target.valueAsNumber)
						}
						label="FREKVENS"
						value={reverb.rightReverbFilterFreq.value}
					/>
					<Slider
						min={0}
						max={10}
						onChange={(e) =>
							reverb.setRightReverbFilterQ(e.target.valueAsNumber)
						}
						label="TOPP"
						value={reverb.rightReverbFilterQ.value}
					/>
				</div>
			</div>
		</ModuleWrapper>
	);
};

export default Reverb;
