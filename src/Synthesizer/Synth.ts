import { Compressor } from "./Compressor";
import { Filter } from "./Filter";
import { Noise } from "./Noise";
import { NoiseData } from "./NoiseData";
import { StereoDelay } from "./StereoDelay";
import { StereoReverb } from "./StereoReverb";
import { Voice } from "./Voice";
import { VoiceData } from "./VoiceData";

export class Synth {
	private context = new AudioContext();
	private master = this.context.createGain();
	private filter = new Filter(this.context);
	private delay = new StereoDelay(this.context);
	private stereoReverb = new StereoReverb(this.context);

	private currentVoices = new Map<number, Voice[]>();
	private currentNoise = new Map<number, Noise>();

	private voiceData = [new VoiceData(), new VoiceData(), new VoiceData()];

	private noiseData = new NoiseData();

	private compressor = new Compressor(this.context);

	constructor() {
		this.master.connect(this.context.destination);
		this.setMasterVolume(0.5);
	}

	stop(freq: number) {
		const voices = this.currentVoices.get(freq);

		if (voices) {
			for (let i = 0; i < voices.length; i++) {
				const voiceData = this.voiceData[i];

				const voice = voices[i];

				voice.release();
				voice.stop(this.context.currentTime + voiceData.envelope.release);

				setTimeout(() => {
					voice.disconnect();
				}, voiceData.envelope.release * 1000);
			}
		}

		const noise = this.currentNoise.get(freq);

		if (noise) {
			noise.release();
			noise.stop(this.context.currentTime + this.noiseData.envelope.release);
			setTimeout(() => {
				noise.disconnect();
			}, this.noiseData.envelope.release * 1000);
		}
	}

	play(freq: number) {
		if (this.currentVoices.has(freq)) {
			this.currentVoices.delete(freq);
		}

		const voiceOne = new Voice(this.context, this.voiceData[0], freq);
		const voiceTwo = new Voice(this.context, this.voiceData[1], freq);
		const voiceThree = new Voice(this.context, this.voiceData[2], freq);

		voiceOne.connect(this.filter.filter);
		voiceTwo.connect(this.filter.filter);
		voiceThree.connect(this.filter.filter);

		this.currentVoices.set(freq, [voiceOne, voiceTwo, voiceThree]);

		const noise = new Noise(this.context, this.noiseData);
		this.currentNoise.set(freq, noise);

		noise.connect(this.filter.filter);

		this.filter.connect(this.master);

		this.filter.connect(this.delay.input);
		this.delay.connect(this.master);

		this.filter.connect(this.stereoReverb.input);
		this.stereoReverb.connect(this.master);

		// this.filter.connect(this.compressor.compressor);
		// this.compressor.connect(this.master);
	}

	//---Reverb setters---

	setReverbFilterType(value: BiquadFilterType, side: StereoChannel) {
		this.stereoReverb.setReverbFilterType(value, side);
	}

	setReverbFilterFreq(value: number, side: StereoChannel) {
		this.stereoReverb.setReverbFilterFrequency(value, side);
	}

	setReverbVolume(value: number, side: StereoChannel) {
		this.stereoReverb.setReverbVolume(value, side);
	}

	setReverbFilterQ(value: number, side: StereoChannel) {
		this.stereoReverb.setReverbFilterQ(value, side);
	}

	setReverbDuration(value: number, side: StereoChannel) {
		this.stereoReverb.setReverbDuration(value, side);
	}

	setReverbDecay(value: number, side: StereoChannel) {
		this.stereoReverb.setReverbDecay(value, side);
	}

	//---Filter setters---

	setFilterFreq(value: number) {
		this.filter.setFrequency(value);
	}

	setFilterQ(value: number) {
		this.filter.setQ(value);
	}

	setFilterType(value: BiquadFilterType) {
		this.filter.setType(value);
	}

	//---Delay setters---

	setDelayTime(time: number, side: StereoChannel) {
		this.delay.setDelayTime(time, side);
	}

	setDelayFeedback(value: number, side: StereoChannel) {
		this.delay.setFeedback(value, side);
	}

	setDelayVolume(value: number, side: StereoChannel) {
		this.delay.setVolume(value, side);
	}

	//---Compressor setters---

	setCompressorThreshold(value: number) {
		this.compressor.setThreshold(value);
	}

	setCompressorKnee(value: number) {
		this.compressor.setKnee(value);
	}

	setCompressorRatio(value: number) {
		this.compressor.setRatio(value);
	}

	setCompressorAttack(value: number) {
		this.compressor.setAttack(value);
	}

	setCompressorRelease(value: number) {
		this.compressor.setRelease(value);
	}

	//---Voice setters---

	setVoiceAttack(voice: number, value: number) {
		this.voiceData[voice].setAttack(value);
	}

	setVoiceRelease(voice: number, value: number) {
		this.voiceData[voice].setRelease(value);
	}

	setVoiceVolume(voice: number, value: number) {
		this.voiceData[voice].setVolume(value);
	}

	setVoiceWaveform(voice: number, value: OscillatorType) {
		this.voiceData[voice].setWaveform(value);
	}

	setVoiceDetune(voice: number, value: number) {
		this.voiceData[voice].setDetune(value);
	}

	setVoiceVibratoFreq(voice: number, value: number) {
		this.voiceData[voice].setVibratoFreq(value);
	}

	setVoiceVibratoDepth(voice: number, value: number) {
		this.voiceData[voice].setVibratoDepth(value);
	}

	//---Noise setters---

	setNoiseVolume(value: number) {
		this.noiseData.amp.volume = value;
	}

	setNoiseAttack(value: number) {
		this.noiseData.envelope.attack = value;
	}

	setNoiseRelease(value: number) {
		this.noiseData.envelope.release = value;
	}

	setNoiseFilterFreq(value: number) {
		this.noiseData.filter.frequency = value;
	}

	//---Master setters---

	setMasterVolume(value: number) {
		this.master.gain.value = value;
	}
}
