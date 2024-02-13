import { Signal, effect, signal } from "@preact/signals-react";
import { ChangeEvent } from "react";
import { synth } from "./Synth.store";

export const filterType: Signal<BiquadFilterType> = signal("lowpass");
export const filterFreq: Signal<number> = signal(2000);
export const filterQ: Signal<number> = signal(0);

export const setFilterType = (e: ChangeEvent<HTMLFormElement>) => {
	filterType.value = e.target.value as BiquadFilterType;
};

export const setFilterFreq = (e: ChangeEvent<HTMLInputElement>) => {
	filterFreq.value = e.target.valueAsNumber;
};

export const setFilterQ = (e: ChangeEvent<HTMLInputElement>) => {
	filterQ.value = e.target.valueAsNumber;
};

effect(() => {
	if (!synth.value) return;
	synth.value.setFilterType(filterType.value);
});

effect(() => {
	if (!synth.value) return;
	synth.value.setFilterFreq(filterFreq.value);
});

effect(() => {
	if (!synth.value) return;
	synth.value.setFilterQ(filterQ.value);
});
