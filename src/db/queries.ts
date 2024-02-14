import * as noise from "../store/Noise.store";
import * as filter from "../store/Filter.store";
import * as delay from "../store/Delay.store";
import * as reverb from "../store/Reverb.store";
import { oscOne, oscThree, oscTwo } from "../store/Osc.store";

export const getSynth = (name: string) => {
	const request = window.indexedDB.open("synth", 1);

	request.onsuccess = () => {
		const db = request.result;
		const transaction = db.transaction("synth", "readwrite");
		const synthStore = transaction.objectStore("synth");
		const synth = synthStore.get(name);

		synth.onsuccess = () => {
			const { synth: s } = synth.result;

			oscOne.setAttack(s.oscOne.attack);
			oscOne.setDetune(s.oscOne.detune);
			oscOne.setRelease(s.oscOne.release);
			oscOne.setVibratoDepth(s.oscOne.vibratoDepth);
			oscOne.setVibratoFreq(s.oscOne.vibratoFreq);
			oscOne.setVolume(s.oscOne.volume);
			oscOne.setWaveform(s.oscOne.waveform);

			oscTwo.setAttack(s.oscTwo.attack);
			oscTwo.setDetune(s.oscTwo.detune);
			oscTwo.setRelease(s.oscTwo.release);
			oscTwo.setVibratoDepth(s.oscTwo.vibratoDepth);
			oscTwo.setVibratoFreq(s.oscTwo.vibratoFreq);
			oscTwo.setVolume(s.oscTwo.volume);
			oscTwo.setWaveform(s.oscTwo.waveform);

			oscThree.setAttack(s.oscThree.attack);
			oscThree.setDetune(s.oscThree.detune);
			oscThree.setRelease(s.oscThree.release);
			oscThree.setVibratoDepth(s.oscThree.vibratoDepth);
			oscThree.setVibratoFreq(s.oscThree.vibratoFreq);
			oscThree.setVolume(s.oscThree.volume);
			oscThree.setWaveform(s.oscThree.waveform);

			noise.setNoiseAttack(s.noise.noiseAttack);
			noise.setNoiseFilterFreq(s.noise.noiseFilterFreq);
			noise.setNoiseFilterQ(s.noise.noiseFilterQ);
			noise.setNoiseFilterType(s.noise.noiseFilterType);
			noise.setNoiseRelease(s.noise.noiseRelease);
			noise.setNoiseVolume(s.noise.noiseVolume);

			filter.setFilterFreq(s.filter.filterFreq);
			filter.setFilterQ(s.filter.filterQ);
			filter.setFilterType(s.filter.filterType);

			delay.setLeftDelayFeedback(s.delay.left.feedback);
			delay.setLeftDelayTime(s.delay.left.time);
			delay.setLeftDelayVolume(s.delay.left.volume);

			delay.setRightDelayFeedback(s.delay.right.feedback);
			delay.setRightDelayTime(s.delay.right.time);
			delay.setRightDelayVolume(s.delay.right.volume);

			reverb.setLeftReverbDecay(s.reverb.left.decay);
			reverb.setLeftReverbDuration(s.reverb.left.duration);
			reverb.setLeftReverbFilterFreq(s.reverb.left.filterFreq);
			reverb.setLeftReverbFilterQ(s.reverb.left.filterQ);
			reverb.setLeftReverbFilterType(s.reverb.left.filterType);
			reverb.setLeftReverbVolume(s.reverb.left.volume);

			reverb.setRightReverbDecay(s.reverb.right.decay);
			reverb.setRightReverbDuration(s.reverb.right.duration);
			reverb.setRightReverbFilterFreq(s.reverb.right.filterFreq);
			reverb.setRightReverbFilterQ(s.reverb.right.filterQ);
			reverb.setRightReverbFilterType(s.reverb.right.filterType);
			reverb.setRightReverbVolume(s.reverb.right.volume);
		};
	};
};

export const saveSynth = (name: string) => {
	const request = window.indexedDB.open("synth", 1);

	const synth = {
		oscOne: {
			waveform: oscOne.waveform.value,
			detune: oscOne.detune.value,
			volume: oscOne.volume.value,
			attack: oscOne.attack.value,
			release: oscOne.release.value,
			vibratoFreq: oscOne.vibratoFreq.value,
			vibratoDepth: oscOne.vibratoDepth.value,
		},
		oscTwo: {
			waveform: oscTwo.waveform.value,
			detune: oscTwo.detune.value,
			volume: oscTwo.volume.value,
			attack: oscTwo.attack.value,
			release: oscTwo.release.value,
			vibratoFreq: oscTwo.vibratoFreq.value,
			vibratoDepth: oscTwo.vibratoDepth.value,
		},
		oscThree: {
			waveform: oscThree.waveform.value,
			detune: oscThree.detune.value,
			volume: oscThree.volume.value,
			attack: oscThree.attack.value,
			release: oscThree.release.value,
			vibratoFreq: oscThree.vibratoFreq.value,
			vibratoDepth: oscThree.vibratoDepth.value,
		},
		noise: {
			noiseVolume: noise.noiseVolume.value,
			noiseAttack: noise.noiseAttack.value,
			noiseRelease: noise.noiseRelease.value,
			noiseFilterType: noise.noiseFilterType.value,
			noiseFilterFreq: noise.noiseFilterType.value,
			noiseFilterQ: noise.noiseFilterType.value,
		},
		filter: {
			filterType: filter.filterType.value,
			filterFreq: filter.filterFreq.value,
			filterQ: filter.filterQ.value,
		},
		delay: {
			left: {
				time: delay.leftDelayTime.value,
				feedback: delay.leftDelayFeedback.value,
				volume: delay.leftDelayVolume.value,
			},
			right: {
				time: delay.rightDelayTime.value,
				feedback: delay.rightDelayFeedback.value,
				volume: delay.rightDelayVolume.value,
			},
		},
		reverb: {
			left: {
				duration: reverb.leftReverbDuration.value,
				decay: reverb.leftReverbDecay.value,
				volume: reverb.leftReverbVolume.value,
				filterType: reverb.leftReverbFilterType.value,
				filterFreq: reverb.leftReverbFilterFreq.value,
				filterQ: reverb.leftReverbFilterQ.value,
			},
			right: {
				duration: reverb.rightReverbDuration.value,
				decay: reverb.rightReverbDecay.value,
				volume: reverb.rightReverbVolume.value,
				filterType: reverb.rightReverbFilterType.value,
				filterFreq: reverb.rightReverbFilterFreq.value,
				filterQ: reverb.rightReverbFilterQ.value,
			},
		},
	};

	request.onsuccess = () => {
		const db = request.result;
		const transaction = db.transaction("synth", "readwrite");
		const synthStore = transaction.objectStore("synth");

		synthStore.put({ id: name, synth });
	};
};
