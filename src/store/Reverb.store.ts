import { Signal, effect, signal } from "@preact/signals-react";
import { ChangeEvent } from "react";
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

export const setLeftReverbDuration = (e: ChangeEvent<HTMLInputElement>) => {
	leftReverbDuration.value = e.target.valueAsNumber;
};

export const setLeftReverbDecay = (e: ChangeEvent<HTMLInputElement>) => {
	leftReverbDecay.value = e.target.valueAsNumber;
};

export const setLeftReverbVolume = (e: ChangeEvent<HTMLInputElement>) => {
	leftReverbVolume.value = e.target.valueAsNumber;
};

export const setLeftReverbFilterType = (e: ChangeEvent<HTMLFormElement>) => {
	leftReverbFilterType.value = e.target.value as BiquadFilterType;
};

export const setLeftReverbFilterFreq = (e: ChangeEvent<HTMLInputElement>) => {
	leftReverbFilterFreq.value = e.target.valueAsNumber;
};

export const setLeftReverbFilterQ = (e: ChangeEvent<HTMLInputElement>) => {
	leftReverbFilterQ.value = e.target.valueAsNumber;
};

export const setRightReverbDuration = (e: ChangeEvent<HTMLInputElement>) => {
	rightReverbDuration.value = e.target.valueAsNumber;
};

export const setRightReverbDecay = (e: ChangeEvent<HTMLInputElement>) => {
	rightReverbDecay.value = e.target.valueAsNumber;
};

export const setRightReverbVolume = (e: ChangeEvent<HTMLInputElement>) => {
	rightReverbVolume.value = e.target.valueAsNumber;
};

export const setRightReverbFilterType = (e: ChangeEvent<HTMLFormElement>) => {
	rightReverbFilterType.value = e.target.value as BiquadFilterType;
};

export const setRightReverbFilterFreq = (e: ChangeEvent<HTMLInputElement>) => {
	rightReverbFilterFreq.value = e.target.valueAsNumber;
};

export const setRightReverbFilterQ = (e: ChangeEvent<HTMLInputElement>) => {
	rightReverbFilterQ.value = e.target.valueAsNumber;
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
