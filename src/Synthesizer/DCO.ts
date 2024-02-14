import { LFO } from "./LFO";

export class DCO extends OscillatorNode {
	lfo: LFO;
	constructor(context: AudioContext) {
		super(context);

		this.lfo = new LFO(context);
		this.lfo.connect(this.detune);
	}

	freq(freq: number) {
		this.frequency.value = freq;
	}

	waveform(type: OscillatorType) {
		this.type = type;
	}

	setVibratoFreq(value: number) {
		this.lfo.setFrequency(value);
	}

	setVibratoDepth(value: number) {
		this.lfo.setDepth(value);
	}

	setDetune(value: number) {
		this.detune.value = value;
	}

	setVibratoDelay(value: number) {
		this.lfo.setDelay(value);
	}

	setVibratoType(type: OscillatorType) {
		this.lfo.setType(type);
	}
}
