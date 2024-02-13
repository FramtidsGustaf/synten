import { useTheme } from "../../hooks/useTheme";
import { Osc } from "../../store/Osc.store";
import { ModuleWrapper } from "../layout/ModuleWrapper";
import VerticalSpace from "../layout/VerticalSpace/VerticalSpace";
import { Group } from "../ui/Group";
import Slider from "../ui/Slider/Slider";

interface OscillatorProps {
	id: string;
	osc: ReturnType<typeof Osc>;
}

const Oscillator = ({ id, osc }: OscillatorProps) => {
	const theme = useTheme();

	const waveforms = [
		{
			label: "SINUS",
			value: "sine",
		},
		{
			label: "FYRKANT",
			value: "square",
		},
		{
			label: "TREKANT",
			value: "triangle",
		},
		{
			label: "SÅGTAND",
			value: "sawtooth",
		},
	];

	return (
		<ModuleWrapper label="OSCILLATOR">
			<Group
				onChange={osc.setWaveform}
				id={id}
				data={waveforms}
				value={osc.waveform.value}
			/>
			<VerticalSpace h={theme.sm} />
			<Slider
				min={-100}
				max={100}
				onChange={osc.setDetune}
				label="OSTÄM"
				value={osc.detune.value}
			/>
			<VerticalSpace h={theme.sm} />
			<h3>FÖRSTÄRKARE</h3>
			<VerticalSpace h={theme.xs} />
			<Slider
				min={0}
				max={1}
				onChange={osc.setVolume}
				label="VOLYM"
				value={osc.volume.value}
			/>
			<Slider
				min={0}
				max={10}
				onChange={osc.setAttack}
				label="ATTACK"
				value={osc.attack.value}
			/>
			<Slider
				min={0}
				max={10}
				onChange={osc.setRelease}
				label="SLÄPP"
				value={osc.release.value}
			/>
			<VerticalSpace h={theme.sm} />
			<h3>VIBRATO</h3>
			<VerticalSpace h={theme.xs} />
			<Slider
				min={0}
				max={1000}
				onChange={osc.setVibratoFreq}
				label="FREKVENS"
				value={osc.vibratoFreq.value}
			/>
			<Slider
				min={0}
				max={5}
				onChange={osc.setVibratoDepth}
				label="DJUP"
				value={osc.vibratoDepth.value}
			/>
		</ModuleWrapper>
	);
};

export default Oscillator;
