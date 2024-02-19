import { Signal, signal } from "@preact/signals-react";

export const allSavedPresetsNames: Signal<IDBValidKey[]> = signal([]);

export const setAllSavedPresetsNames = (names: IDBValidKey[]) => {
    allSavedPresetsNames.value = names;
};