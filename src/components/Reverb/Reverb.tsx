import { useTheme } from "../../hooks/useTheme";
import * as reverb from "../../store/Reverb.store";
import { ModuleWrapper } from "../layout/ModuleWrapper";
import VerticalSpace from "../layout/VerticalSpace/VerticalSpace";
import { Group } from "../ui/Group";
import Slider from "../ui/Slider/Slider";
import { filterVariants } from "../../utils/filterVariants";

const Reverb = () => {
	const theme = useTheme();
	return (
		<ModuleWrapper label="EFTERKLANG">
			<h3>VÄNSTER</h3>
			<VerticalSpace h={theme.xs} />
			<Slider
				min={1}
				max={10}
				onChange={reverb.setLeftReverbDuration}
				label="TID"
				value={reverb.leftReverbDuration.value}
			/>
			<Slider
				min={0}
				max={20}
				onChange={reverb.setLeftReverbDecay}
				label="FÖRFALL"
				value={reverb.leftReverbDecay.value}
			/>
			<Slider
				min={0}
				max={1}
				onChange={reverb.setLeftReverbVolume}
				label="VOLYM"
				value={reverb.leftReverbVolume.value}
			/>
			<VerticalSpace h={theme.xs} />
			<h4>FILTER</h4>
			<VerticalSpace h={theme.xs} />
			<Group
				id="reverb-filter-left"
				data={filterVariants}
				value={reverb.leftReverbFilterType.value}
				onChange={reverb.setLeftReverbFilterType}
			/>
			<VerticalSpace h={theme.xs} />
			<Slider
				min={0}
				max={3000}
				onChange={reverb.setLeftReverbFilterFreq}
				label="FREKVENS"
				value={reverb.leftReverbFilterFreq.value}
			/>
			<Slider
				min={0}
				max={10}
				onChange={reverb.setLeftReverbFilterQ}
				label="TOPP"
				value={reverb.leftReverbFilterQ.value}
			/>
			<VerticalSpace h={theme.sm} />
			<h3>HÖGER</h3>
			<VerticalSpace h={theme.xs} />
			<Slider
				min={1}
				max={10}
				onChange={reverb.setRightReverbDuration}
				label="TID"
				value={reverb.rightReverbDuration.value}
			/>
			<Slider
				min={0}
				max={20}
				onChange={reverb.setRightReverbDecay}
				label="FÖRFALL"
				value={reverb.rightReverbDecay.value}
			/>
			<Slider
				min={0}
				max={1}
				onChange={reverb.setRightReverbVolume}
				label="VOLYM"
				value={reverb.rightReverbVolume.value}
			/>
			<VerticalSpace h={theme.xs} />
			<h4>FILTER</h4>
			<VerticalSpace h={theme.xs} />
			<Group
				id="reverb-filter-right"
				data={filterVariants}
				value={reverb.rightReverbFilterType.value}
				onChange={reverb.setRightReverbFilterType}
			/>
			<VerticalSpace h={theme.xs} />
			<Slider
				min={0}
				max={3000}
				onChange={reverb.setRightReverbFilterFreq}
				label="FREKVENS"
				value={reverb.rightReverbFilterFreq.value}
			/>
			<Slider
				min={0}
				max={10}
				onChange={reverb.setRightReverbFilterQ}
				label="TOPP"
				value={reverb.rightReverbFilterQ.value}
			/>
		</ModuleWrapper>
	);
};

export default Reverb;
