export class Compressor {
	compressor: DynamicsCompressorNode;

	constructor(context: AudioContext) {
		this.compressor = context.createDynamicsCompressor();
	}

	connect(destination: AudioNode) {
		this.compressor.connect(destination);
	}

	setThreshold(value: number) {
		this.compressor.threshold.value = value;
	}

	setKnee(value: number) {
		this.compressor.knee.value = value;
	}

	setRatio(value: number) {
		this.compressor.ratio.value = value;
	}

	setAttack(value: number) {
		this.compressor.attack.value = value;
	}

	setRelease(value: number) {
		this.compressor.release.value = value;
	}
}
