import { useTheme } from "../../hooks/useTheme";
import {
	leftReverbDecay,
	leftReverbDuration,
	leftReverbFilterFreq,
	leftReverbFilterQ,
	leftReverbFilterType,
	leftReverbVolume,
	rightReverbDecay,
	rightReverbDuration,
	rightReverbFilterFreq,
	rightReverbFilterQ,
	rightReverbFilterType,
	rightReverbVolume,
	setLeftReverbDecay,
	setLeftReverbDuration,
	setLeftReverbFilterFreq,
	setLeftReverbFilterQ,
	setLeftReverbFilterType,
	setLeftReverbVolume,
	setRightReverbDecay,
	setRightReverbDuration,
	setRightReverbFilterFreq,
	setRightReverbFilterQ,
	setRightReverbFilterType,
	setRightReverbVolume,
} from "../../store/Reverb.store";
import { ModuleWrapper } from "../layout/ModuleWrapper";
import VerticalSpace from "../layout/VerticalSpace/VerticalSpace";
import { Group } from "../ui/Group";
import Slider from "../ui/Slider/Slider";

const Reverb = () => {
	const theme = useTheme();
	return (
		<ModuleWrapper label="EFTERKLANG">
			<h3>VÄNSTER</h3>
			<VerticalSpace h={theme.xs} />
			<Slider
				min={1}
				max={10}
				onChange={setLeftReverbDuration}
				label="TID"
				value={leftReverbDuration.value}
			/>
			<Slider
				min={0}
				max={20}
				onChange={setLeftReverbDecay}
				label="FÖRFALL"
				value={leftReverbDecay.value}
			/>
			<Slider
				min={0}
				max={1}
				onChange={setLeftReverbVolume}
				label="VOLYM"
				value={leftReverbVolume.value}
			/>
			<VerticalSpace h={theme.xs} />
			<h4>FILTER</h4>
			<VerticalSpace h={theme.xs} />
			<Group
				id="reverb-filter-left"
				data={[
					{
						label: "LÅG PASS",
						value: "lowpass",
					},
					{
						label: "HÖG PASS",
						value: "highpass",
					},
					{
						label: "BAND PASS",
						value: "bandpass",
					},
				]}
				value={leftReverbFilterType.value}
				onChange={setLeftReverbFilterType}
			/>
			<VerticalSpace h={theme.xs} />
			<Slider
				min={0}
				max={3000}
				onChange={setLeftReverbFilterFreq}
				label="FREKVENS"
				value={leftReverbFilterFreq.value}
			/>
			<Slider
				min={0}
				max={10}
				onChange={setLeftReverbFilterQ}
				label="TOPP"
				value={leftReverbFilterQ.value}
			/>
			<VerticalSpace h={theme.sm} />
			<h3>HÖGER</h3>
			<VerticalSpace h={theme.xs} />
			<Slider
				min={1}
				max={10}
				onChange={setRightReverbDuration}
				label="TID"
				value={rightReverbDuration.value}
			/>
			<Slider
				min={0}
				max={20}
				onChange={setRightReverbDecay}
				label="FÖRFALL"
				value={rightReverbDecay.value}
			/>
			<Slider
				min={0}
				max={1}
				onChange={setRightReverbVolume}
				label="VOLYM"
				value={rightReverbVolume.value}
			/>
			<VerticalSpace h={theme.xs} />
			<h4>FILTER</h4>
			<VerticalSpace h={theme.xs} />
			<Group
				id="reverb-filter-right"
				data={[
					{
						label: "LÅG PASS",
						value: "lowpass",
					},
					{
						label: "HÖG PASS",
						value: "highpass",
					},
					{
						label: "BAND PASS",
						value: "bandpass",
					},
				]}
				value={rightReverbFilterType.value}
				onChange={setRightReverbFilterType}
			/>
			<VerticalSpace h={theme.xs} />
			<Slider
				min={0}
				max={3000}
				onChange={setRightReverbFilterFreq}
				label="FREKVENS"
				value={rightReverbFilterFreq.value}
			/>
			<Slider
				min={0}
				max={10}
				onChange={setRightReverbFilterQ}
				label="TOPP"
				value={rightReverbFilterQ.value}
			/>
		</ModuleWrapper>
	);
};

export default Reverb;
