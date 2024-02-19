import { Signal, effect, signal } from "@preact/signals-react";

export const isNotificationOpen: Signal<boolean> = signal(false);
export const notificationMessage: Signal<string> = signal("");

export const setIsNotificationOpen = (b: boolean) => {
	isNotificationOpen.value = b;
};

export const setNotificationMessage = (s: string) => {
	notificationMessage.value = s;
};

effect(() => {
	if (isNotificationOpen.value) {
		setTimeout(() => {
			setIsNotificationOpen(false);
		}, 2000);
	}
});
