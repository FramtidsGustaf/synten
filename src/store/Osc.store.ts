import { Signal, effect, signal } from "@preact/signals-react";
import { ChangeEvent } from "react";
import { synth } from "./Synth.store";

export const Osc = (oscNumber: number) => {
	const waveform: Signal<OscillatorType> = signal("sine");
	const detune: Signal<number> = signal(0);
	const volume: Signal<number> = signal(0.2);
	const attack: Signal<number> = signal(0);
	const release: Signal<number> = signal(0.4);
	const filterFreq: Signal<number> = signal(2000);
	const filterQ: Signal<number> = signal(0);
	const filterAttack: Signal<number> = signal(0);
	const filterRelease: Signal<number> = signal(0.4);
	const vibratoFreq: Signal<number> = signal(0);
	const vibratoDepth: Signal<number> = signal(0);

	const setWaveform = (e: ChangeEvent<HTMLFormElement>) => {
		waveform.value = e.target.value as OscillatorType;
	};

	const setDetune = (e: ChangeEvent<HTMLInputElement>) => {
		detune.value = e.target.valueAsNumber;
	};

	const setVolume = (e: ChangeEvent<HTMLInputElement>) => {
		volume.value = e.target.valueAsNumber;
	};

	const setAttack = (e: ChangeEvent<HTMLInputElement>) => {
		attack.value = e.target.valueAsNumber;
	};

	const setRelease = (e: ChangeEvent<HTMLInputElement>) => {
		release.value = e.target.valueAsNumber;
	};

	const setVibratoFreq = (e: ChangeEvent<HTMLInputElement>) => {
		vibratoFreq.value = e.target.valueAsNumber;
	};

	const setVibratoDepth = (e: ChangeEvent<HTMLInputElement>) => {
		vibratoDepth.value = e.target.valueAsNumber;
	};

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

	return {
		waveform,
		detune,
		volume,
		attack,
		release,
		filterFreq,
		filterQ,
		filterAttack,
		filterRelease,
		vibratoFreq,
		vibratoDepth,
		setWaveform,
		setDetune,
		setVolume,
		setAttack,
		setRelease,
		setVibratoFreq,
		setVibratoDepth,
	};
};

export const oscOne = Osc(0);
export const oscTwo = Osc(1);
export const oscThree = Osc(2);
