import { Signal, signal } from "@preact/signals-react";

export const allSavedPresetsNames: Signal<IDBValidKey[]> = signal([]);
