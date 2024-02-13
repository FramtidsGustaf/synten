import { Signal, effect, signal } from "@preact/signals-react";
import { synth } from "./Synth.store";
import { ChangeEvent } from "react";

export const noiseVolume: Signal<number> = signal(0);
export const noiseAttack: Signal<number> = signal(0);
export const noiseRelease: Signal<number> = signal(0);
export const noiseFilterType: Signal<BiquadFilterType> = signal("lowpass");
export const noiseFilterFreq: Signal<number> = signal(0);
export const noiseFilterQ: Signal<number> = signal(0);

export const setNoiseVolume = (e: ChangeEvent<HTMLInputElement>) => {
	noiseVolume.value = e.target.valueAsNumber;
};

export const setNoiseAttack = (e: ChangeEvent<HTMLInputElement>) => {
	noiseAttack.value = e.target.valueAsNumber;
};

export const setNoiseRelease = (e: ChangeEvent<HTMLInputElement>) => {
	noiseRelease.value = e.target.valueAsNumber;
};

export const setNoiseFilterType = (e: ChangeEvent<HTMLFormElement>) => {
	noiseFilterType.value = e.target.value;
};

export const setNoiseFilterFreq = (e: ChangeEvent<HTMLInputElement>) => {
	noiseFilterFreq.value = e.target.valueAsNumber;
};

export const setNoiseFilterQ = (e: ChangeEvent<HTMLInputElement>) => {
	noiseFilterQ.value = e.target.valueAsNumber;
};

effect(() => {
	if (!synth.value) return;
	synth.value.setNoiseVolume(noiseVolume.value);
});

effect(() => {
	if (!synth.value) return;
	synth.value.setNoiseAttack(noiseAttack.value);
});

effect(() => {
	if (!synth.value) return;
	synth.value.setNoiseRelease(noiseRelease.value);
});

effect(() => {
	if (!synth.value) return;
	synth.value.setNoiseFilterType(noiseFilterType.value);
});

effect(() => {
	if (!synth.value) return;
	synth.value.setNoiseFilterFreq(noiseFilterFreq.value);
});

effect(() => {
	if (!synth.value) return;
	synth.value.setNoiseFilterQ(noiseFilterQ.value);
});
