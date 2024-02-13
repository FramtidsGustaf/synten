export class Vibrato {
	private delay: DelayNode;
	private LFOGain: GainNode;
	private LFO: OscillatorNode;
	input: DelayNode;

	constructor(context: AudioContext) {
		this.delay = context.createDelay();
		this.delay.delayTime.value = 0;
		this.LFOGain = context.createGain();
		this.LFOGain.gain.value = 0;
		this.LFO = context.createOscillator();
		this.LFO.frequency.value = 0;
		this.LFO.type = "sine";
		this.LFO.start();
		this.LFO.connect(this.LFOGain);
		this.LFOGain.connect(this.delay.delayTime);
		this.input = this.delay;
	}

	setFrequency(value: number) {
		this.LFO.frequency.value = value;
	}

	setDepth(value: number) {
		this.LFOGain.gain.value = value;
	}

	connect(destination: AudioNode) {
		this.delay.connect(destination);
	}

	disconnect() {
		this.delay.disconnect();
		this.LFO.disconnect();
		this.LFOGain.disconnect();
	}
}
