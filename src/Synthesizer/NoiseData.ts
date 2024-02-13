export class NoiseData {
	envelope = {
		attack: 0,
		release: 0.4,
	};
	amp = {
		volume: 0,
	};
	filter: {
		type: BiquadFilterType;
		frequency: number;
		Q: number;
	};

	constructor() {
		this.filter = {
			type: "highpass",
			frequency: 2000,
			Q: 0,
		};
	}

	setAttack(value: number) {
		this.envelope.attack = value;
	}

	setRelease(value: number) {
		this.envelope.release = value;
	}

	setVolume(value: number) {
		this.amp.volume = value;
	}

	setFilterType(value: BiquadFilterType) {
		this.filter.type = value;
	}

	setFilterFrequency(value: number) {
		this.filter.frequency = value;
	}

	setFilterQ(value: number) {
		this.filter.Q = value;
	}
}
