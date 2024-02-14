export class LFO {
	private osc: OscillatorNode;
	private gain: GainNode;
	private gainValue: number = 0.0001;
	private delay: number = 0;
	private context: AudioContext;

	constructor(context: AudioContext) {
		this.context = context;
		this.osc = context.createOscillator();
		this.gain = context.createGain();
		this.gain.gain.value = 0;
		this.osc.connect(this.gain);
	}

	setFrequency(value: number) {
		this.osc.frequency.value = value;
	}

	start() {
		this.gain.gain.cancelScheduledValues(this.context.currentTime);
		this.gain.gain.setValueAtTime(0, this.context.currentTime);
		this.gain.gain.setValueAtTime(
			this.gainValue,
			this.context.currentTime + this.delay
		);
		this.osc.start(this.context.currentTime);
	}

	setDelay(value: number) {
		this.delay = value;
	}

	setDepth(value: number) {
		this.gainValue = value;
	}

	setType(type: OscillatorType) {
		this.osc.type = type;
	}

	connect(destination: AudioParam) {
		return this.gain.connect(destination);
	}

	disconnect() {
		this.gain.disconnect();
		this.osc.disconnect();
	}
}
