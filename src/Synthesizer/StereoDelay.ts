class Delay {
	delay: DelayNode;
	feedback: GainNode;
	gain: GainNode;

	constructor(context: AudioContext) {
		this.delay = context.createDelay(5);
		this.feedback = context.createGain();
		this.delay.connect(this.feedback);
		this.feedback.connect(this.delay);
		this.gain = context.createGain();
		this.delay.connect(this.gain);
		this.delay.delayTime.value = 0;
		this.feedback.gain.value = 0;
	}

	connect(destination: AudioNode) {
		this.gain.connect(destination);
	}

	setDelayTime(time: number) {
		this.delay.delayTime.value = time;
	}

	setVolume(value: number) {
		this.gain.gain.value = value;
	}

	setFeedback(value: number) {
		this.feedback.gain.value = value;
	}
}

export class StereoDelay {
	left: Delay;
	right: Delay;
	input: GainNode;
	private leftPanner: StereoPannerNode;
	private rightPanner: StereoPannerNode;

	constructor(context: AudioContext) {
		this.left = new Delay(context);
		this.right = new Delay(context);
		this.input = context.createGain();

		this.input.connect(this.left.delay);
		this.input.connect(this.right.delay);

		this.leftPanner = context.createStereoPanner();
		this.rightPanner = context.createStereoPanner();
		this.leftPanner.pan.value = -1;
		this.rightPanner.pan.value = 1;

		this.left.gain.connect(this.leftPanner);
		this.right.gain.connect(this.rightPanner);
	}

	connect(destination: AudioNode) {
		this.leftPanner.connect(destination);
		this.rightPanner.connect(destination);
	}

	setDelayTime(time: number, side: StereoChannel) {
		if (side === "left") return this.left.setDelayTime(time);
		this.right.setDelayTime(time);
	}

	setFeedback(value: number, side: StereoChannel) {
		if (side === "left") return this.left.setFeedback(value);
		this.right.setFeedback(value);
	}

	setVolume(value: number, side: StereoChannel) {
		if (side === "left") return this.left.setVolume(value);
		this.right.setVolume(value);
	}
}
