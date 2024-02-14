import { Signal, effect, signal } from "@preact/signals-react";
import { synth } from "./Synth.store";

export const leftDelayTime: Signal<number> = signal(0);
export const leftDelayFeedback: Signal<number> = signal(0);
export const leftDelayVolume: Signal<number> = signal(0);

export const rightDelayTime: Signal<number> = signal(0);
export const rightDelayFeedback: Signal<number> = signal(0);
export const rightDelayVolume: Signal<number> = signal(0);

export const setLeftDelayTime = (n: number) => {
	leftDelayTime.value = n;
};

export const setLeftDelayFeedback = (n: number) => {
	leftDelayFeedback.value = n;
};

export const setLeftDelayVolume = (n: number) => {
	leftDelayVolume.value = n;
};

export const setRightDelayTime = (n: number) => {
	rightDelayTime.value = n;
};

export const setRightDelayFeedback = (n: number) => {
	rightDelayFeedback.value = n;
};

export const setRightDelayVolume = (n: number) => {
	rightDelayVolume.value = n;
};

effect(() => {
	if (!synth.value) return;
	synth.value.setDelayTime(leftDelayTime.value, "left");
});

effect(() => {
	if (!synth.value) return;
	synth.value.setDelayFeedback(leftDelayFeedback.value, "left");
});

effect(() => {
	if (!synth.value) return;
	synth.value.setDelayVolume(leftDelayVolume.value, "left");
});

effect(() => {
	if (!synth.value) return;
	synth.value.setDelayTime(rightDelayTime.value, "right");
});

effect(() => {
	if (!synth.value) return;
	synth.value.setDelayFeedback(rightDelayFeedback.value, "right");
});

effect(() => {
	if (!synth.value) return;
	synth.value.setDelayVolume(rightDelayVolume.value, "right");
});
