import * as noise from "../store/Noise.store";
import * as delay from "../store/Delay.store";
import * as reverb from "../store/Reverb.store";
import { oscOne, oscThree, oscTwo } from "../store/Osc.store";
import { setAllSavedPresetsNames } from "../store/Saved.store";
import {
	setIsNotificationOpen,
	setNotificationMessage,
} from "../store/Notification.store";

export const getSynthToShare = (name: string) => {
	const request = window.indexedDB.open("synth", 1);

	request.onsuccess = () => {
		const db = request.result;
		const transaction = db.transaction("presets", "readonly");
		const synthStore = transaction.objectStore("presets");
		const synth = synthStore.get(name);

		synth.onsuccess = () => {
			const { synth: s } = synth.result;
			const encoded = btoa(JSON.stringify(s));
			console.log(encoded);

			console.log(atob(encoded));
		};
	};
};

export const getSynth = (name: string) => {
	const request = window.indexedDB.open("synth", 1);

	request.onsuccess = () => {
		const db = request.result;
		const transaction = db.transaction("presets", "readonly");
		const synthStore = transaction.objectStore("presets");
		const synth = synthStore.get(name);

		synth.onsuccess = () => {
			const { synth: s } = synth.result;

			oscOne.setAttack(s.oscOne.attack);
			oscOne.setDetune(s.oscOne.detune);
			oscOne.setTranspositionMultiplier(s.oscOne.transpositionMultiplier);
			oscOne.setRelease(s.oscOne.release);
			oscOne.setVibratoDepth(s.oscOne.vibratoDepth);
			oscOne.setVibratoFreq(s.oscOne.vibratoFreq);
			oscOne.setVolume(s.oscOne.volume);
			oscOne.setWaveform(s.oscOne.waveform);
			oscOne.setFilterStartFreq(s.oscOne.filterStartFreq);
			oscOne.setFilterEndFreq(s.oscOne.filterEndFreq);
			oscOne.setFilterQ(s.oscOne.filterQ);
			oscOne.setFilterType(s.oscOne.filterType);
			oscOne.setFilterAttackTime(s.oscOne.filterAttack);
			oscOne.setFilterReleaseTime(s.oscOne.filterRelease);

			oscTwo.setAttack(s.oscTwo.attack);
			oscTwo.setDetune(s.oscTwo.detune);
			oscTwo.setTranspositionMultiplier(s.oscTwo.transpositionMultiplier);
			oscTwo.setRelease(s.oscTwo.release);
			oscTwo.setVibratoDepth(s.oscTwo.vibratoDepth);
			oscTwo.setVibratoFreq(s.oscTwo.vibratoFreq);
			oscTwo.setVolume(s.oscTwo.volume);
			oscTwo.setWaveform(s.oscTwo.waveform);
			oscTwo.setFilterStartFreq(s.oscTwo.filterStartFreq);
			oscTwo.setFilterEndFreq(s.oscTwo.filterEndFreq);
			oscTwo.setFilterQ(s.oscTwo.filterQ);
			oscTwo.setFilterType(s.oscTwo.filterType);
			oscTwo.setFilterAttackTime(s.oscTwo.filterAttack);
			oscTwo.setFilterReleaseTime(s.oscTwo.filterRelease);

			oscThree.setAttack(s.oscThree.attack);
			oscThree.setDetune(s.oscThree.detune);
			oscThree.setTranspositionMultiplier(s.oscThree.transpositionMultiplier);
			oscThree.setRelease(s.oscThree.release);
			oscThree.setVibratoDepth(s.oscThree.vibratoDepth);
			oscThree.setVibratoFreq(s.oscThree.vibratoFreq);
			oscThree.setVolume(s.oscThree.volume);
			oscThree.setWaveform(s.oscThree.waveform);
			oscThree.setFilterStartFreq(s.oscThree.filterStartFreq);
			oscThree.setFilterEndFreq(s.oscThree.filterEndFreq);
			oscThree.setFilterQ(s.oscThree.filterQ);
			oscThree.setFilterType(s.oscThree.filterType);
			oscThree.setFilterAttackTime(s.oscThree.filterAttack);
			oscThree.setFilterReleaseTime(s.oscThree.filterRelease);

			noise.setNoiseAttack(s.noise.noiseAttack);
			noise.setNoiseFilterStartFreq(s.noise.noiseFilterStartFreq);
			noise.setNoiseFilterEndFreq(s.noise.noiseFilterEndFreq);
			noise.setNoiseFilterQ(s.noise.noiseFilterQ);
			noise.setNoiseFilterType(s.noise.noiseFilterType);
			noise.setNoiseFilterAttackTime(s.noise.noiseFilterAttackTime);
			noise.setNoiseFilterReleaseTime(s.noise.noiseFilterReleaseTime);

			noise.setNoiseRelease(s.noise.noiseRelease);
			noise.setNoiseVolume(s.noise.noiseVolume);

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
			transpositionMultiplier: oscOne.transpositionMultiplier.value,
			volume: oscOne.volume.value,
			attack: oscOne.attack.value,
			release: oscOne.release.value,
			vibratoFreq: oscOne.vibratoFreq.value,
			vibratoDepth: oscOne.vibratoDepth.value,
			filterStartFreq: oscOne.filterStartFreq.value,
			filterEndFreq: oscOne.filterEndFreq.value,
			filterQ: oscOne.filterQ.value,
			filterType: oscOne.filterType.value,
			filterAttack: oscOne.filterAttackTime.value,
			filterRelease: oscOne.filterReleaseTime.value,
		},
		oscTwo: {
			waveform: oscTwo.waveform.value,
			detune: oscTwo.detune.value,
			transpositionMultiplier: oscTwo.transpositionMultiplier.value,
			volume: oscTwo.volume.value,
			attack: oscTwo.attack.value,
			release: oscTwo.release.value,
			vibratoFreq: oscTwo.vibratoFreq.value,
			vibratoDepth: oscTwo.vibratoDepth.value,
			filterStartFreq: oscTwo.filterStartFreq.value,
			filterEndFreq: oscTwo.filterEndFreq.value,
			filterQ: oscTwo.filterQ.value,
			filterType: oscTwo.filterType.value,
			filterAttack: oscTwo.filterAttackTime.value,
			filterRelease: oscTwo.filterReleaseTime.value,
		},
		oscThree: {
			waveform: oscThree.waveform.value,
			detune: oscThree.detune.value,
			transpositionMultiplier: oscThree.transpositionMultiplier.value,
			volume: oscThree.volume.value,
			attack: oscThree.attack.value,
			release: oscThree.release.value,
			vibratoFreq: oscThree.vibratoFreq.value,
			vibratoDepth: oscThree.vibratoDepth.value,
			filterStartFreq: oscThree.filterStartFreq.value,
			filterEndFreq: oscThree.filterEndFreq.value,
			filterQ: oscThree.filterQ.value,
			filterType: oscThree.filterType.value,
			filterAttack: oscThree.filterAttackTime.value,
			filterRelease: oscThree.filterReleaseTime.value,
		},
		noise: {
			noiseVolume: noise.noiseVolume.value,
			noiseAttack: noise.noiseAttack.value,
			noiseRelease: noise.noiseRelease.value,
			noiseFilterType: noise.noiseFilterType.value,
			noiseFilterStartFreq: noise.noiseFilterStartFreq.value,
			noiseFilterEndFreq: noise.noiseFilterEndFreq.value,
			noiseFilterReleaseTime: noise.noiseFilterReleaseTime.value,
			noiseFilterAttackTime: noise.noiseFilterAttackTime.value,
			noiseFilterQ: noise.noiseFilterQ.value,
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

		const transaction = db.transaction("presets", "readwrite");
		const synthStore = transaction.objectStore("presets");

		synthStore.put({ id: name, synth });
		setNotificationMessage("Förinställningen är sparad!");
		setIsNotificationOpen(true);
	};
};

export const deleteSynth = (name: string) => {
	const request = window.indexedDB.open("synth", 1);

	request.onsuccess = () => {
		const db = request.result;
		const transaction = db.transaction("presets", "readwrite");
		const synthStore = transaction.objectStore("presets");

		synthStore.delete(name);

		transaction.oncomplete = () => {
			getAllNames();
			setNotificationMessage("Förinställningen är borttagen!");
			setIsNotificationOpen(true);
		};
	};
};

export const getAllNames = () => {
	const request = window.indexedDB.open("synth", 1);

	request.onsuccess = () => {
		const db = request.result;
		const transaction = db.transaction("presets", "readonly");
		const synthStore = transaction.objectStore("presets");
		const names = synthStore.getAllKeys();

		names.onsuccess = () => {
			setAllSavedPresetsNames(names.result);
		};
	};
};
