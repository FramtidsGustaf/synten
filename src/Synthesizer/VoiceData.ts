export class VoiceData {
	envelope = {
		attack: 0,
		release: 0.4,
	};
	osc: {
		type: OscillatorType;
		detune: number;
	};
	amp: {
		volume: number;
	};
	modulation: {
		vibratoFreq: number;
		vibratoDepth: number;
	};

	constructor() {
		this.osc = {
			type: "square",
			detune: 0,
		};
		this.modulation = {
			vibratoFreq: 1,
			vibratoDepth: 0.001,
		};
		this.amp = {
			volume: 0.2,
		};
	}

	setAttack(value: number) {
		this.envelope.attack = value;
	}

	setRelease(value: number) {
		this.envelope.release = value;
	}

	setWaveform(value: OscillatorType) {
		this.osc.type = value;
	}

	setDetune(value: number) {
		this.osc.detune = value;
	}

	setVibratoFreq(value: number) {
		this.modulation.vibratoFreq = value;
	}

	setVibratoDepth(value: number) {
		this.modulation.vibratoDepth = value;
	}

	setVolume(value: number) {
		this.amp.volume = value;
	}
}
