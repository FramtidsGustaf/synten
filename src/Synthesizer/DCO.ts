import { Vibrato } from "./Vibrato";

export class DCO extends OscillatorNode {
	vibrato: Vibrato;
	constructor(context: AudioContext) {
		super(context);

		this.vibrato = new Vibrato(context);
		this.connect(this.vibrato.input);
	}

	freq(freq: number) {
		this.frequency.value = freq;
	}

	waveform(type: OscillatorType) {
		this.type = type;
	}

	setVibratoFreq(value: number) {
		this.vibrato.setFrequency(value);
	}

	setVibratoDepth(value: number) {
		this.vibrato.setDepth(value);
	}

	setDetune(value: number) {
		this.detune.value = value;
	}

	_connect(destination: AudioNode) {
		this.vibrato.connect(destination);
	}
}
