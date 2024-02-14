import { DCA } from "./DCA";
import { DCO } from "./DCO";
import { EnvelopeFilter } from "./EnvelopeFilter";
import { VoiceData } from "./VoiceData";

// Voice connects a DCO with a DCA
export class Voice {
	private dco: DCO;
	private dca: DCA;
	private envelopeFilter: EnvelopeFilter;

	constructor(context: AudioContext, voiceData: VoiceData, freq: number) {
		// Create the Oscillator and the Amplifier and connect them
		this.dco = new DCO(context);
		this.dca = new DCA(context);
		this.envelopeFilter = new EnvelopeFilter(context);
		this.dco.connect(this.dca);

		this.dca.connect(this.envelopeFilter.filter);

		//Configure the Oscillator and the Amplifier
		this.setWaveform(voiceData.osc.type);
		this.setVolume(voiceData.amp.volume);
		this.setFreq(freq);
		this.setDetune(voiceData.osc.detune);
		this.setVibratoFreq(voiceData.modulation.vibratoFreq);
		this.setVibratoDepth(voiceData.modulation.vibratoDepth);
		this.setVibratoDelay(voiceData.modulation.vibratoDelay);
		this.setVibratoType(voiceData.modulation.vibratoType);
		this.setAttackTime(voiceData.envelope.attack);
		this.setReleaseTime(voiceData.envelope.release);
		this.setFilterType(voiceData.filter.type);
		this.setFilterStartFreq(voiceData.filter.startFreq);
		this.setFilterEndFreq(voiceData.filter.endFreq);
		this.setFilterQ(voiceData.filter.Q);
		this.setFilterAttackTime(voiceData.filter.attackTime);
		this.setFilterReleaseTime(voiceData.filter.releaseTime);
		this.start(context.currentTime);
	}

	setWaveform(type: OscillatorType) {
		this.dco.waveform(type);
	}

	setFreq(freq: number) {
		this.dco.freq(freq);
	}

	connect(destination: AudioNode) {
		this.envelopeFilter.connect(destination);
	}

	start(time: number) {
		this.dca.attack();
		this.dco.start(time);
		this.dco.lfo.start();
		this.envelopeFilter.start();
	}

	stop(time: number) {
		this.dco.stop(time);
	}

	setDetune(value: number) {
		this.dco.setDetune(value);
	}

	setAttack() {
		this.dca.attack();
	}

	setAttackTime(time: number) {
		this.dca.setAttackTime(time);
	}

	setReleaseTime(time: number) {
		this.dca.setReleaseTime(time);
	}

	release() {
		this.dca.release();
	}

	setVolume(value: number) {
		this.dca.setVolume(value);
	}

	setVibratoFreq(value: number) {
		this.dco.setVibratoFreq(value);
	}

	setVibratoDepth(value: number) {
		this.dco.setVibratoDepth(value);
	}

	setVibratoDelay(value: number) {
		this.dco.setVibratoDelay(value);
	}

	setVibratoType(value: OscillatorType) {
		this.dco.setVibratoType(value);
	}

	setFilterType(type: BiquadFilterType) {
		this.envelopeFilter.setFilterType(type);
	}

	setFilterStartFreq(freq: number) {
		this.envelopeFilter.setStartFreq(freq);
	}

	setFilterEndFreq(freq: number) {
		this.envelopeFilter.setEndFreq(freq);
	}

	setFilterQ(value: number) {
		this.envelopeFilter.setFilterQ(value);
	}

	setFilterAttackTime(time: number) {
		this.envelopeFilter.setAttackTime(time);
	}

	setFilterReleaseTime(time: number) {
		this.envelopeFilter.setReleaseTime(time);
	}

	disconnect() {
		this.dca.disconnect();
		this.dco.disconnect();
		this.dco.lfo.disconnect();
	}
}
