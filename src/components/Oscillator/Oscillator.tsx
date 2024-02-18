import { useTheme } from "../../hooks/useTheme";
import { OscStore } from "../../store/Osc.store";
import { ModuleWrapper } from "../layout/ModuleWrapper";
import VerticalSpace from "../layout/VerticalSpace/VerticalSpace";
import { Group } from "../ui/Group";
import { waveforms } from "../../utils/waveforms";
import { filterVariants } from "../../utils/filterVariants";
import { Knob } from "../ui/Knob";
import Row from "../layout/Row/Row";
import { Button } from "../ui/Button";

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
			<VerticalSpace h={theme.xs} />
			<p>TRANSPONERING</p>
			<Group
				id={id + "octave"}
				data={[
					{ label: "-2", value: -2 },
					{ label: "-1", value: -1 },
					{ label: "0", value: 0 },
					{ label: "+1", value: 1 },
					{ label: "+2", value: 2 },
				]}
				value={osc.transpositionMultiplier.value}
				onChange={(e) => osc.setTranspositionMultiplier(e.target.value)}
			/>
			<Row>
				<Knob
					min={-100}
					max={100}
					onChange={osc.setDetune}
					label="OSTÄM"
					value={osc.detune.value}
				/>
				<Button onClick={osc.tune}>STÄM</Button>
			</Row>
			<h3>FÖRSTÄRKARE</h3>
			<Row>
				<Knob
					min={0}
					max={1}
					onChange={osc.setVolume}
					label="VOLYM"
					value={osc.volume.value}
				/>
				<Knob
					min={0}
					max={10}
					onChange={osc.setAttack}
					label="ATTACK"
					value={osc.attack.value}
				/>
				<Knob
					min={0}
					max={10}
					onChange={osc.setRelease}
					label="SLÄPP"
					value={osc.release.value}
				/>
			</Row>

			<VerticalSpace h={theme.xs} />

			<h3>VIBRATO</h3>
			<VerticalSpace h={theme.xs} />
			<Group
				data={waveforms}
				onChange={(e) => osc.setVibratoType(e.target.value as OscillatorType)}
				value={osc.vibratoType.value}
				id={id + "vibrato"}
			/>
			<VerticalSpace h={theme.xs} />
			<Row>
				<Knob
					min={0}
					max={50}
					onChange={osc.setVibratoFreq}
					label="FREKVENS"
					value={osc.vibratoFreq.value}
				/>
				<Knob
					min={0}
					max={100}
					onChange={osc.setVibratoDepth}
					label="DJUP"
					value={osc.vibratoDepth.value}
				/>
				<Knob
					min={0}
					max={10}
					onChange={osc.setVibratoDelay}
					label="NÄR"
					value={osc.vibratoDelay.value}
				/>
			</Row>
			<VerticalSpace h={theme.xs} />
			<h3>FÖRÄNDRINGSFILTER</h3>
			<VerticalSpace h={theme.xs} />
			<Group
				data={filterVariants}
				onChange={(e) => osc.setFilterType(e.target.value as BiquadFilterType)}
				value={osc.filterType.value}
				id={id + "filter"}
			/>
			<VerticalSpace h={theme.xs} />
			<Row>
				<Knob
					min={0}
					max={20000}
					onChange={osc.setFilterStartFreq}
					label="START"
					value={osc.filterStartFreq.value}
				/>

				<Knob
					min={0}
					max={20000}
					onChange={osc.setFilterEndFreq}
					label="MÅL"
					value={osc.filterEndFreq.value}
				/>

				<Knob
					min={0}
					max={10}
					onChange={osc.setFilterQ}
					label="Q"
					value={osc.filterQ.value}
				/>

				<Knob
					min={0}
					max={10}
					onChange={osc.setFilterAttackTime}
					label="TID"
					value={osc.filterAttackTime.value}
				/>

				<Knob
					min={0}
					max={10}
					onChange={osc.setFilterReleaseTime}
					label="SLÄPP"
					value={osc.filterReleaseTime.value}
				/>
			</Row>
		</ModuleWrapper>
	);
};

export default Oscillator;
