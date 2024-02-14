import { Signal, effect, signal } from "@preact/signals-react";
import { synth } from "./Synth.store";

export const noiseVolume: Signal<number> = signal(0);
export const noiseAttack: Signal<number> = signal(0);
export const noiseRelease: Signal<number> = signal(0);
export const noiseFilterType: Signal<BiquadFilterType> = signal("lowpass");
export const noiseFilterFreq: Signal<number> = signal(0);
export const noiseFilterQ: Signal<number> = signal(0);

export const setNoiseVolume = (n: number) => {
	noiseVolume.value = n;
};

export const setNoiseAttack = (n: number) => {
	noiseAttack.value = n;
};

export const setNoiseRelease = (n: number) => {
	noiseRelease.value = n;
};

export const setNoiseFilterType = (f: BiquadFilterType) => {
	noiseFilterType.value = f;
};

export const setNoiseFilterFreq = (n: number) => {
	noiseFilterFreq.value = n;
};

export const setNoiseFilterQ = (n: number) => {
	noiseFilterQ.value = n;
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
