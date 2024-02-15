import { Signal, effect, signal } from "@preact/signals-react";
import { synth } from "./Synth.store";

export const OscStore = (oscNumber: number) => {
	const waveform: Signal<OscillatorType> = signal("sine");
	const detune: Signal<number> = signal(0);
	const transpositionMultiplier: Signal<number> = signal(0);
	const volume: Signal<number> = signal(0.2);
	const attack: Signal<number> = signal(0);
	const release: Signal<number> = signal(0.4);
	const vibratoFreq: Signal<number> = signal(0);
	const vibratoDepth: Signal<number> = signal(0);
	const vibratoDelay: Signal<number> = signal(0);
	const vibratoType: Signal<OscillatorType> = signal("sine");
	const filterType: Signal<BiquadFilterType> = signal("lowpass");
	const filterStartFreq: Signal<number> = signal(20000);
	const filterEndFreq: Signal<number> = signal(20000);
	const filterAttackTime: Signal<number> = signal(0.001);
	const filterReleaseTime: Signal<number> = signal(0.001);
	const filterQ: Signal<number> = signal(0);

	const setWaveform = (o: OscillatorType) => {
		waveform.value = o;
	};

	const setDetune = (n: number) => {
		detune.value = n;
	};

	const setTranspositionMultiplier = (n: number) => {
		transpositionMultiplier.value = n;
	};

	const setVolume = (n: number) => {
		volume.value = n;
	};

	const setAttack = (n: number) => {
		attack.value = n;
	};

	const setRelease = (n: number) => {
		release.value = n;
	};

	const setVibratoFreq = (n: number) => {
		vibratoFreq.value = n;
	};

	const setVibratoDepth = (n: number) => {
		vibratoDepth.value = n;
	};

	const setVibratoDelay = (n: number) => {
		vibratoDelay.value = n;
	};

	const setVibratoType = (o: OscillatorType) => {
		vibratoType.value = o;
	};

	const setFilterType = (o: BiquadFilterType) => {
		filterType.value = o;
	};

	const setFilterStartFreq = (n: number) => {
		filterStartFreq.value = n;
	};

	const setFilterEndFreq = (n: number) => {
		filterEndFreq.value = n;
	};

	const setFilterAttackTime = (n: number) => {
		filterAttackTime.value = n;
	};

	const setFilterReleaseTime = (n: number) => {
		filterReleaseTime.value = n;
	};

	const setFilterQ = (n: number) => {
		filterQ.value = n;
	};

	effect(() => {
		if (!synth.value) return;
		synth.value.setVoiceFilterType(oscNumber, filterType.value);
	});

	effect(() => {
		if (!synth.value) return;
		synth.value.setVoiceFilterStartFreq(oscNumber, filterStartFreq.value);
	});

	effect(() => {
		if (!synth.value) return;
		synth.value.setVoiceFilterEndFreq(oscNumber, filterEndFreq.value);
	});

	effect(() => {
		if (!synth.value) return;
		synth.value.setVoiceFilterQ(oscNumber, filterQ.value);
	});

	effect(() => {
		if (!synth.value) return;
		synth.value.setVoiceFilterAttackTime(oscNumber, filterAttackTime.value);
	});

	effect(() => {
		if (!synth.value) return;
		synth.value.setVoiceFilterReleaseTime(oscNumber, filterReleaseTime.value);
	});

	effect(() => {
		if (!synth.value) return;
		synth.value.setVoiceWaveform(oscNumber, waveform.value);
	});

	effect(() => {
		if (!synth.value) return;
		synth.value.setVoiceDetune(oscNumber, detune.value);
	});

	effect(() => {
		if (!synth.value) return;
		synth.value.setVoiceTranspositionMultiplier(
			oscNumber,
			transpositionMultiplier.value
		);
	});

	effect(() => {
		if (!synth.value) return;
		synth.value.setVoiceVolume(oscNumber, volume.value);
	});

	effect(() => {
		if (!synth.value) return;
		synth.value.setVoiceAttack(oscNumber, attack.value);
	});

	effect(() => {
		if (!synth.value) return;
		synth.value.setVoiceRelease(oscNumber, release.value);
	});

	effect(() => {
		if (!synth.value) return;
		synth.value.setVoiceVibratoFreq(oscNumber, vibratoFreq.value);
	});

	effect(() => {
		if (!synth.value) return;
		synth.value.setVoiceVibratoDepth(oscNumber, vibratoDepth.value);
	});

	effect(() => {
		if (!synth.value) return;
		synth.value.setVoiceVibratoDelay(oscNumber, vibratoDelay.value);
	});

	effect(() => {
		if (!synth.value) return;
		synth.value.setVoiceVibratoType(oscNumber, vibratoType.value);
	});

	return {
		waveform,
		detune,
		transpositionMultiplier,
		volume,
		attack,
		release,
		vibratoFreq,
		vibratoDepth,
		vibratoDelay,
		vibratoType,
		filterType,
		filterStartFreq,
		filterEndFreq,
		filterAttackTime,
		filterReleaseTime,
		filterQ,
		setWaveform,
		setDetune,
		setTranspositionMultiplier,
		setVolume,
		setAttack,
		setRelease,
		setVibratoFreq,
		setVibratoDepth,
		setVibratoDelay,
		setVibratoType,
		setFilterType,
		setFilterStartFreq,
		setFilterEndFreq,
		setFilterAttackTime,
		setFilterReleaseTime,
		setFilterQ,
	};
};

export const oscOne = OscStore(0);
export const oscTwo = OscStore(1);
export const oscThree = OscStore(2);
