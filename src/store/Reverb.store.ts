import { Signal, effect, signal } from "@preact/signals-react";
import { synth } from "./Synth.store";

export const leftReverbDuration: Signal<number> = signal(1);
export const leftReverbDecay: Signal<number> = signal(0);
export const leftReverbVolume: Signal<number> = signal(0);
export const leftReverbFilterType: Signal<BiquadFilterType> = signal("lowpass");
export const leftReverbFilterFreq: Signal<number> = signal(0);
export const leftReverbFilterQ: Signal<number> = signal(0);

export const rightReverbDuration: Signal<number> = signal(1);
export const rightReverbDecay: Signal<number> = signal(0);
export const rightReverbVolume: Signal<number> = signal(0);
export const rightReverbFilterType: Signal<BiquadFilterType> =
	signal("lowpass");
export const rightReverbFilterFreq: Signal<number> = signal(0);
export const rightReverbFilterQ: Signal<number> = signal(0);

export const setLeftReverbDuration = (n: number) => {
	leftReverbDuration.value = n;
};

export const setLeftReverbDecay = (n: number) => {
	leftReverbDecay.value = n;
};

export const setLeftReverbVolume = (n: number) => {
	leftReverbVolume.value = n;
};

export const setLeftReverbFilterType = (f: BiquadFilterType) => {
	leftReverbFilterType.value = f;
};

export const setLeftReverbFilterFreq = (n: number) => {
	leftReverbFilterFreq.value = n;
};

export const setLeftReverbFilterQ = (n: number) => {
	leftReverbFilterQ.value = n;
};

export const setRightReverbDuration = (n: number) => {
	rightReverbDuration.value = n;
};

export const setRightReverbDecay = (n: number) => {
	rightReverbDecay.value = n;
};

export const setRightReverbVolume = (n: number) => {
	rightReverbVolume.value = n;
};

export const setRightReverbFilterType = (f: BiquadFilterType) => {
	rightReverbFilterType.value = f;
};

export const setRightReverbFilterFreq = (n: number) => {
	rightReverbFilterFreq.value = n;
};

export const setRightReverbFilterQ = (n: number) => {
	rightReverbFilterQ.value = n;
};

effect(() => {
	if (!synth.value) return;
	synth.value.setReverbDuration(leftReverbDuration.value, "left");
});

effect(() => {
	if (!synth.value) return;
	synth.value.setReverbDecay(leftReverbDecay.value, "left");
});

effect(() => {
	if (!synth.value) return;
	synth.value.setReverbVolume(leftReverbVolume.value, "left");
});

effect(() => {
	if (!synth.value) return;
	synth.value.setReverbFilterType(leftReverbFilterType.value, "left");
});

effect(() => {
	if (!synth.value) return;
	synth.value.setReverbFilterFreq(leftReverbFilterFreq.value, "left");
});

effect(() => {
	if (!synth.value) return;
	synth.value.setReverbFilterQ(leftReverbFilterQ.value, "left");
});

effect(() => {
	if (!synth.value) return;
	synth.value.setReverbDuration(rightReverbDuration.value, "right");
});

effect(() => {
	if (!synth.value) return;
	synth.value.setReverbDecay(rightReverbDecay.value, "right");
});

effect(() => {
	if (!synth.value) return;
	synth.value.setReverbVolume(rightReverbVolume.value, "right");
});

effect(() => {
	if (!synth.value) return;
	synth.value.setReverbFilterType(rightReverbFilterType.value, "right");
});

effect(() => {
	if (!synth.value) return;
	synth.value.setReverbFilterFreq(rightReverbFilterFreq.value, "right");
});

effect(() => {
	if (!synth.value) return;
	synth.value.setReverbFilterQ(rightReverbFilterQ.value, "right");
});
