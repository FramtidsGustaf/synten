export class Filter {
	filter: BiquadFilterNode;

	constructor(context: AudioContext) {
		this.filter = context.createBiquadFilter();
	}

	connect(destination: AudioNode) {
		this.filter.connect(destination);
	}

	setFrequency(value: number) {
		this.filter.frequency.value = value;
	}

	setQ(value: number) {
		this.filter.Q.value = value;
	}

	setType(value: BiquadFilterType) {
		this.filter.type = value;
	}
}
