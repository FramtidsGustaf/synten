import { DCA } from "./DCA";
import { DCO } from "./DCO";
import { VoiceData } from "./VoiceData";

// Voice connects a DCO with a DCA
export class Voice {
	private dco: DCO;
	private dca: DCA;

	constructor(context: AudioContext, voiceData: VoiceData, freq: number) {
		// Create the Oscillator and the Amplifier and connect them
		this.dco = new DCO(context);
		this.dca = new DCA(context);
		this.dco._connect(this.dca);

		//Configure the Oscillator and the Amplifier
		this.setWaveform(voiceData.osc.type);
		this.setVolume(voiceData.amp.volume);
		this.setFreq(freq);
		this.setDetune(voiceData.osc.detune);
		this.setVibratoFreq(voiceData.modulation.vibratoFreq);
		this.setVibratoDepth(voiceData.modulation.vibratoDepth);
		this.setAttackTime(voiceData.envelope.attack);
		this.setReleaseTime(voiceData.envelope.release);
		this.start(context.currentTime);
	}

	setWaveform(type: OscillatorType) {
		this.dco.waveform(type);
	}

	setFreq(freq: number) {
		this.dco.freq(freq);
	}

	connect(destination: AudioNode) {
		this.dca.connect(destination);
	}

	start(time: number) {
		this.dca.attack();
		this.dco.start(time);
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

	disconnect() {
		this.dca.disconnect();
		this.dco.disconnect();
		this.dco.vibrato.disconnect();
	}
}
