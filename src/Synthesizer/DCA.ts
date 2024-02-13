export class DCA extends GainNode {
	context: AudioContext;
	attackTime = 0;
	releaseTime = 0;
	volume = 0;

	constructor(context: AudioContext) {
		super(context);
		this.context = context;
	}

	attack() {
		this.gain.cancelScheduledValues(this.context.currentTime);
		this.gain.setValueAtTime(0, this.context.currentTime);
		this.gain.linearRampToValueAtTime(
			this.volume,
			this.attackTime + this.context.currentTime
		);
	}

	release() {
		this.gain.setValueAtTime(this.gain.value, this.context.currentTime);
		this.gain.linearRampToValueAtTime(
			0.0001,
			this.releaseTime + this.context.currentTime
		);
	}

	setVolume(value: number) {
		this.volume = value;
	}

	setAttackTime(time: number) {
		this.attackTime = time;
	}

	setReleaseTime(time: number) {
		this.releaseTime = time;
	}
}
