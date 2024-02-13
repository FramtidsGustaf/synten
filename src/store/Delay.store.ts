import { Signal, effect, signal } from "@preact/signals-react";
import { ChangeEvent } from "react";
import { synth } from "./Synth.store";

export const leftDelayTime: Signal<number> = signal(0);
export const leftDelayFeedback: Signal<number> = signal(0);
export const leftDelayVolume: Signal<number> = signal(0);

export const rightDelayTime: Signal<number> = signal(0);
export const rightDelayFeedback: Signal<number> = signal(0);
export const rightDelayVolume: Signal<number> = signal(0);

export const setLeftDelayTime = (e: ChangeEvent<HTMLInputElement>) => {
	leftDelayTime.value = e.target.valueAsNumber;
};

export const setLeftDelayFeedback = (e: ChangeEvent<HTMLInputElement>) => {
	leftDelayFeedback.value = e.target.valueAsNumber;
};

export const setLeftDelayVolume = (e: ChangeEvent<HTMLInputElement>) => {
	leftDelayVolume.value = e.target.valueAsNumber;
};

export const setRightDelayTime = (e: ChangeEvent<HTMLInputElement>) => {
	rightDelayTime.value = e.target.valueAsNumber;
};

export const setRightDelayFeedback = (e: ChangeEvent<HTMLInputElement>) => {
	rightDelayFeedback.value = e.target.valueAsNumber;
};

export const setRightDelayVolume = (e: ChangeEvent<HTMLInputElement>) => {
	rightDelayVolume.value = e.target.valueAsNumber;
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
