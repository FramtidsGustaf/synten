import { Signal, effect, signal } from "@preact/signals-react";
import { synth } from "./Synth.store";

export const noiseVolume: Signal<number> = signal(0);
export const noiseAttack: Signal<number> = signal(0);
export const noiseRelease: Signal<number> = signal(0);
export const noiseFilterType: Signal<BiquadFilterType> = signal("lowpass");
export const noiseFilterStartFreq: Signal<number> = signal(0);
export const noiseFilterEndFreq: Signal<number> = signal(0);
export const noiseFilterAttackTime: Signal<number> = signal(0);
export const noiseFilterReleaseTime: Signal<number> = signal(0);
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

export const setNoiseFilterStartFreq = (n: number) => {
	noiseFilterStartFreq.value = n;
};

export const setNoiseFilterEndFreq = (n: number) => {
	noiseFilterEndFreq.value = n;
};

export const setNoiseFilterAttackTime = (n: number) => {
	noiseFilterAttackTime.value = n;
};

export const setNoiseFilterReleaseTime = (n: number) => {
	noiseFilterReleaseTime.value = n;
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
	synth.value.setNoiseFilterStartFreq(noiseFilterStartFreq.value);
});

effect(() => {
	if (!synth.value) return;
	synth.value.setNoiseFilterEndFreq(noiseFilterEndFreq.value);
});

effect(() => {
	if (!synth.value) return;
	synth.value.setNoiseFilterAttackTime(noiseFilterAttackTime.value);
});

effect(() => {
	if (!synth.value) return;
	synth.value.setNoiseFilterReleaseTime(noiseFilterReleaseTime.value);
});

effect(() => {
	if (!synth.value) return;
	synth.value.setNoiseFilterQ(noiseFilterQ.value);
});
