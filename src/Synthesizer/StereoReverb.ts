class Reverb {
	convolver: ConvolverNode;
	private duration = 1;
	private decay = 0;
	private context: AudioContext;
	private filter: BiquadFilterNode;
	private gain: GainNode;

	constructor(context: AudioContext) {
		this.context = context;
		this.convolver = context.createConvolver();
		this.filter = context.createBiquadFilter();
		this.convolver.connect(this.filter);
		this.gain = context.createGain();
		this.filter.connect(this.gain);
	}

	connect(destination: AudioNode) {
		this.convolver.buffer = this.createImpulse();
		this.gain.connect(destination);
	}

	private createImpulse() {
		const length = this.context.sampleRate * this.duration;
		const impulse = this.context.createBuffer(
			1,
			length,
			this.context.sampleRate
		);

		const IR = impulse.getChannelData(0);
		for (let i = 0; i < length; i++) {
			IR[i] = (Math.random() * 2 - 1) * Math.pow(1 - i / length, this.decay);
		}
		return impulse;
	}

	setFilterType(value: BiquadFilterType) {
		this.filter.type = value;
	}

	setFilterFrequency(value: number) {
		this.filter.frequency.value = value;
	}

	setFilterQ(value: number) {
		this.filter.Q.value = value;
	}

	setVolume(value: number) {
		this.gain.gain.value = value;
	}

	setDuration(value: number) {
		this.duration = value;
		this.convolver.buffer = this.createImpulse();
	}

	setDecay(value: number) {
		this.decay = value;
		this.convolver.buffer = this.createImpulse();
	}
}

export class StereoReverb {
	private leftReverb: Reverb;
	private rightReverb: Reverb;
	private leftPanner: StereoPannerNode;
	private rightPanner: StereoPannerNode;
	input: GainNode;

	constructor(context: AudioContext) {
		this.leftPanner = context.createStereoPanner();
		this.rightPanner = context.createStereoPanner();
		this.leftReverb = new Reverb(context);
		this.rightReverb = new Reverb(context);

		this.input = context.createGain();

		this.input.connect(this.leftReverb.convolver);
		this.input.connect(this.rightReverb.convolver);

		this.leftPanner.pan.value = -1;
		this.rightPanner.pan.value = 1;

		this.leftReverb.connect(this.leftPanner);
		this.rightReverb.connect(this.rightPanner);
	}

	connect(destination: AudioNode) {
		this.leftPanner.connect(destination);
		this.rightPanner.connect(destination);
	}

	setReverbVolume(value: number, side: StereoChannel) {
		if (side === "left") return this.leftReverb.setVolume(value);
		this.rightReverb.setVolume(value);
	}

	setReverbFilterFrequency(value: number, side: StereoChannel) {
		if (side === "left") return this.leftReverb.setFilterFrequency(value);
		this.rightReverb.setFilterFrequency(value);
	}

	setReverbFilterQ(value: number, side: StereoChannel) {
		if (side === "left") return this.leftReverb.setFilterQ(value);
		this.rightReverb.setFilterQ(value);
	}

	setReverbFilterType(value: BiquadFilterType, side: StereoChannel) {
		if (side === "left") return this.leftReverb.setFilterType(value);
		this.rightReverb.setFilterType(value);
	}

	setReverbDuration(value: number, side: StereoChannel) {
		if (side === "left") return this.leftReverb.setDuration(value);
		this.rightReverb.setDuration(value);
	}

	setReverbDecay(value: number, side: StereoChannel) {
		if (side === "left") return this.leftReverb.setDecay(value);
		this.rightReverb.setDecay(value);
	}
}
