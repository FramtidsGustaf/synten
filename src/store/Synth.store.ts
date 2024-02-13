import { Signal, signal } from "@preact/signals-react";
import { Synth } from "../Synthesizer/Synth";

export const synth: Signal<Synth | undefined> = signal(undefined);
export const isActive: Signal<boolean> = signal(false);
