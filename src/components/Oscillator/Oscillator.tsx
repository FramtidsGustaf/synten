import { useTheme } from "../../hooks/useTheme";
import { OscStore } from "../../store/Osc.store";
import { ModuleWrapper } from "../layout/ModuleWrapper";
import VerticalSpace from "../layout/VerticalSpace/VerticalSpace";
import { Group } from "../ui/Group";
import Slider from "../ui/Slider/Slider";
import { waveforms } from "../../utils/waveforms";
import { filterVariants } from "../../utils/filterVariants";

interface OscillatorProps {
	id: string;
	osc: ReturnType<typeof OscStore>;
	label: string;
}

const Oscillator = ({ id, osc, label }: OscillatorProps) => {
	const theme = useTheme();

	return (
		<ModuleWrapper label={label}>
			<Group
				onChange={(e) => osc.setWaveform(e.target.value as OscillatorType)}
				id={id}
				data={waveforms}
				value={osc.waveform.value}
			/>
			<VerticalSpace h={theme.sm} />
			<Slider
				min={-100}
				max={100}
				onChange={(e) => osc.setDetune(e.target.valueAsNumber)}
				label="OSTÄM"
				value={osc.detune.value}
			/>
			<VerticalSpace h={theme.sm} />
			<h3>FÖRSTÄRKARE</h3>
			<VerticalSpace h={theme.xs} />
			<Slider
				min={0}
				max={1}
				onChange={(e) => osc.setVolume(e.target.valueAsNumber)}
				label="VOLYM"
				value={osc.volume.value}
			/>
			<Slider
				min={0}
				max={10}
				onChange={(e) => osc.setAttack(e.target.valueAsNumber)}
				label="ATTACK"
				value={osc.attack.value}
			/>
			<Slider
				min={0}
				max={10}
				onChange={(e) => osc.setRelease(e.target.valueAsNumber)}
				label="SLÄPP"
				value={osc.release.value}
			/>

			<VerticalSpace h={theme.sm} />

			<h3>VIBRATO</h3>
			<VerticalSpace h={theme.xs} />
			<Group
				data={waveforms}
				onChange={(e) => osc.setVibratoType(e.target.value as OscillatorType)}
				value={osc.vibratoType.value}
				id={id + "vibrato"}
			/>
			<VerticalSpace h={theme.sm} />
			<Slider
				min={0}
				max={50}
				onChange={(e) => osc.setVibratoFreq(e.target.valueAsNumber)}
				label="FREKVENS"
				value={osc.vibratoFreq.value}
			/>
			<Slider
				min={0}
				max={100}
				onChange={(e) => osc.setVibratoDepth(e.target.valueAsNumber)}
				label="DJUP"
				value={osc.vibratoDepth.value}
			/>
			<Slider
				min={0}
				max={10}
				onChange={(e) => osc.setVibratoDelay(e.target.valueAsNumber)}
				label="FÖRDRÖJNING"
				value={osc.vibratoDelay.value}
			/>
			<VerticalSpace h={theme.sm} />
			<h3>FÖRÄNDRINGSFILTER</h3>
			<VerticalSpace h={theme.xs} />
			<Group
				data={filterVariants}
				onChange={(e) => osc.setFilterType(e.target.value as BiquadFilterType)}
				value={osc.filterType.value}
				id={id + "filter"}
			/>
			<VerticalSpace h={theme.sm} />
			<Slider
				min={0}
				max={20000}
				onChange={(e) => osc.setFilterStartFreq(e.target.valueAsNumber)}
				label="STARTFREKVENS"
				value={osc.filterStartFreq.value}
			/>

			<Slider
				min={0}
				max={20000}
				onChange={(e) => osc.setFilterEndFreq(e.target.valueAsNumber)}
				label="SLUTFREKVENS"
				value={osc.filterEndFreq.value}
			/>

			<Slider
				min={0}
				max={10}
				onChange={(e) => osc.setFilterQ(e.target.valueAsNumber)}
				label="Q"
				value={osc.filterQ.value}
			/>

			<Slider
				min={0}
				max={10}
				onChange={(e) => osc.setFilterAttackTime(e.target.valueAsNumber)}
				label="FÖRÄNDINSTID"
				value={osc.filterAttackTime.value}
			/>

			<Slider
				min={0}
				max={10}
				onChange={(e) => osc.setFilterReleaseTime(e.target.valueAsNumber)}
				label="SLÄPP"
				value={osc.filterReleaseTime.value}
			/>
		</ModuleWrapper>
	);
};

export default Oscillator;
