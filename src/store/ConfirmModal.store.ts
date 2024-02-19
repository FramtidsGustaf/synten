import { Signal, effect, signal } from "@preact/signals-react";

export const isModalOpen: Signal<boolean> = signal(false);
export const modalMessage: Signal<string> = signal("");
export const modalDescription: Signal<string> = signal("");
export const onConfirmCB: Signal<() => void> = signal(() => {});

export const setOnConfirmCB = (cb: () => void) => {
	onConfirmCB.value = cb;
};

export const setModalDescription = (s: string) => {
	modalDescription.value = s;
};

export const setModalMessage = (s: string) => {
	modalMessage.value = s;
};

export const setIsModalOpen = (b: boolean) => {
	isModalOpen.value = b;
};

const resetModal = () => {
	setModalMessage("");
	setModalDescription("");
	setOnConfirmCB(() => {});
};

effect(() => {
	if (!isModalOpen.value) {
		resetModal();
	}
});
