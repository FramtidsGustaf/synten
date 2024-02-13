import { DCA } from "./DCA";
import { NoiseData } from "./NoiseData";

export class Noise {
	private buffersize: number;
	private noiseBuffer: AudioBuffer;
	private output: Float32Array;
	private noise: AudioBufferSourceNode;
	private dca: DCA;
	private filter: BiquadFilterNode;

	constructor(context: AudioContext, noiseData: NoiseData) {
		this.buffersize = 2 * context.sampleRate;
		this.noiseBuffer = context.createBuffer(
			1,
			this.buffersize,
			context.sampleRate
		);
		this.output = this.noiseBuffer.getChannelData(0);

		for (let i = 0; i < this.buffersize; i++) {
			this.output[i] = Math.random() * 2 - 1;
		}

		this.noise = context.createBufferSource();
		this.noise.buffer = this.noiseBuffer;
		this.noise.loop = true;

		this.dca = new DCA(context);

		this.setVolume(noiseData.amp.volume);
		this.setAttack(noiseData.envelope.attack);
		this.setRelease(noiseData.envelope.release);
		this.dca.attack();

		this.filter = context.createBiquadFilter();
		this.filter.type = noiseData.filter.type;
		this.filter.frequency.value = noiseData.filter.frequency;
		this.filter.Q.value = noiseData.filter.Q;
		this.noise.start(context.currentTime);
		this.noise.connect(this.filter);
		this.filter.connect(this.dca);
	}

	start(time: number) {
		this.noise.start(time);
	}

	stop(time: number) {
		this.noise.stop(time);
	}

	release() {
		this.dca.release();
	}

	connect(destination: AudioNode) {
		this.dca.connect(destination);
	}

	setAttack(time: number) {
		this.dca.setAttackTime(time);
	}

	setRelease(time: number) {
		this.dca.setReleaseTime(time);
	}

	setVolume(value: number) {
		this.dca.setVolume(value);
	}

	setNoiseFilterAmount(value: number) {
		this.filter.frequency.value = value;
	}

	setNoiseFilterType(type: BiquadFilterType) {
		this.filter.type = type;
	}

	setNoiseFilterQ(value: number) {
		this.filter.Q.value = value;
	}

	disconnect() {
		this.dca.disconnect();
		this.filter.disconnect();
	}
}
