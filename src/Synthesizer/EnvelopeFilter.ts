export class EnvelopeFilter {
	filter: BiquadFilterNode;
	private startFreq: number = 0;
	private endFreq: number = 0;
	private attackTime: number = 0;
	private releaseTime: number = 0;
	private context: AudioContext;

	constructor(context: AudioContext) {
		this.filter = context.createBiquadFilter();
		this.context = context;
	}

	connect(destination: AudioNode) {
		this.filter.connect(destination);
	}

	disconnect() {
		this.filter.disconnect();
	}

	setStartFreq(freq: number) {
		this.startFreq = freq;
	}

	setAttackTime(time: number) {
		this.attackTime = time;
	}

	setReleaseTime(time: number) {
		this.releaseTime = time;
	}

	setEndFreq(freq: number) {
		this.endFreq = freq;
	}

	setFilterType(type: BiquadFilterType) {
		this.filter.type = type;
	}

	setFilterQ(value: number) {
		this.filter.Q.value = value;
	}

	start() {
		this.filter.frequency.cancelScheduledValues(this.context.currentTime);
		this.filter.frequency.setValueAtTime(
			this.startFreq,
			this.context.currentTime
		);
		this.filter.frequency.linearRampToValueAtTime(
			this.endFreq,
			this.context.currentTime + this.attackTime
		);
	}

	stop() {
		this.filter.frequency.cancelScheduledValues(this.context.currentTime);
		this.filter.frequency.setValueAtTime(
			this.filter.frequency.value,
			this.context.currentTime
		);
		this.filter.frequency.linearRampToValueAtTime(
			this.startFreq,
			this.context.currentTime + this.releaseTime
		);
	}
}
