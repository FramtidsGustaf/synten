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
		startFreq: number;
		endFreq: number;
		attackTime: number;
		releaseTime: number;
		Q: number;
	};

	constructor() {
		this.filter = {
			type: "highpass",
			startFreq: 20000,
			endFreq: 20000,
			attackTime: 0.001,
			releaseTime: 0.001,
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

	setFilterStartFreq(value: number) {
		this.filter.startFreq = value;
	}

	setFilterEndFreq(value: number) {
		this.filter.endFreq = value;
	}

	setFilterAttackTime(value: number) {
		this.filter.attackTime = value;
	}

	setFilterReleaseTime(value: number) {
		this.filter.releaseTime = value;
	}

	setFilterQ(value: number) {
		this.filter.Q = value;
	}
}
