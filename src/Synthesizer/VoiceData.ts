export class VoiceData {
	envelope = {
		attack: 0,
		release: 0.4,
	};

	osc: {
		type: OscillatorType;
		detune: number;
		transpositionMultiplier: number;
	} = {
		type: "square",
		detune: 0,
		transpositionMultiplier: 0,
	};

	amp: {
		volume: number;
	} = {
		volume: 0.2,
	};

	modulation: {
		vibratoFreq: number;
		vibratoDepth: number;
		vibratoDelay: number;
		vibratoType: OscillatorType;
	} = {
		vibratoFreq: 1,
		vibratoDepth: 0.001,
		vibratoDelay: 0.001,
		vibratoType: "sine",
	};

	filter: {
		type: BiquadFilterType;
		startFreq: number;
		endFreq: number;
		attackTime: number;
		releaseTime: number;
		Q: number;
	} = {
		type: "lowpass",
		startFreq: 20000,
		endFreq: 20000,
		attackTime: 0.001,
		releaseTime: 0.001,
		Q: 0,
	};

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

	setVibratoDelay(value: number) {
		this.modulation.vibratoDelay = value;
	}

	setVibratoType(value: OscillatorType) {
		this.modulation.vibratoType = value;
	}

	setFilterType(value: BiquadFilterType) {
		this.filter.type = value;
	}

	setStartFreq(value: number) {
		this.filter.startFreq = value;
	}

	setEndFreq(value: number) {
		this.filter.endFreq = value;
	}

	setAttackTime(value: number) {
		this.filter.attackTime = value;
	}

	setReleaseTime(value: number) {
		this.filter.releaseTime = value;
	}

	setFilterQ(value: number) {
		this.filter.Q = value;
	}

	setTranspositionMultiplier(value: number) {
		this.osc.transpositionMultiplier = value;
	}
}
