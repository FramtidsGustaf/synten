import { DCA } from "./DCA";
import { EnvelopeFilter } from "./EnvelopeFilter";
import { NoiseData } from "./NoiseData";

export class Noise {
	private buffersize: number;
	private noiseBuffer: AudioBuffer;
	private output: Float32Array;
	private noise: AudioBufferSourceNode;
	private dca: DCA;
	private envelopeFilter: EnvelopeFilter;

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

		this.envelopeFilter = new EnvelopeFilter(context);
		this.setFilterType(noiseData.filter.type);
		this.setFilterStartFreq(noiseData.filter.startFreq);
		this.setFilterEndFreq(noiseData.filter.endFreq);
		this.setFilterAttackTime(noiseData.filter.attackTime);
		this.setFilterReleaseTime(noiseData.filter.releaseTime);
		this.setFilterQ(noiseData.filter.Q);

		// this.noise.start(context.currentTime);
		this.noise.connect(this.envelopeFilter.filter);
		this.envelopeFilter.connect(this.dca);

		this.start(context.currentTime);
	}

	start(time: number) {
		this.dca.attack();
		this.noise.start(time);
		this.envelopeFilter.start();
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

	setFilterType(type: BiquadFilterType) {
		this.envelopeFilter.setFilterType(type);
	}

	setFilterStartFreq(value: number) {
		this.envelopeFilter.setStartFreq(value);
	}

	setFilterEndFreq(value: number) {
		this.envelopeFilter.setEndFreq(value);
	}

	setFilterAttackTime(value: number) {
		this.envelopeFilter.setAttackTime(value);
	}

	setFilterReleaseTime(value: number) {
		this.envelopeFilter.setReleaseTime(value);
	}

	setFilterQ(value: number) {
		this.envelopeFilter.setFilterQ(value);
	}

	disconnect() {
		this.dca.disconnect();
		this.envelopeFilter.disconnect();
	}
}
