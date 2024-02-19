import { Signal, signal } from "@preact/signals-react";

export const isDrawerOpen: Signal<boolean> = signal(false);

export const setIsDrawerOpen = (b: boolean) => {
	isDrawerOpen.value = b;
};
