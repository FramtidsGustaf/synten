import { Signal, effect, signal } from "@preact/signals-react";
import { synth } from "./Synth.store";

export const filterType: Signal<BiquadFilterType> = signal("lowpass");
export const filterFreq: Signal<number> = signal(2000);
export const filterQ: Signal<number> = signal(0);

export const setFilterType = (f: BiquadFilterType) => {
	filterType.value = f;
};

export const setFilterFreq = (n: number) => {
	filterFreq.value = n;
};

export const setFilterQ = (n: number) => {
	filterQ.value = n;
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
