import type { Synth } from "./Synth";

export class Midi {
	frequencyArray: number[] = this.genereateFrequencyArray();
	synth: Synth;

	constructor(synth: Synth) {
		this.init();
		this.synth = synth;
	}

	private async init() {
		const midi = await navigator.requestMIDIAccess();
		const inputs = midi.inputs.values();

		for (const input of inputs) {
			input.onmidimessage = (event: Event) => {
				const message = event as MIDIMessageEvent;
				const [command, note] = message.data;

				switch (command) {
					case 144:
						this.synth.play(this.frequencyArray[note]);
						break;
					case 128:
						this.synth.stop(this.frequencyArray[note]);
						break;
				}
			};
		}
	}

	private getFrequency(note: number) {
		return 440 * Math.pow(2, (note - 49) / 12);
	}

	private genereateFrequencyArray() {
		const frequencyArray = [];
		for (let i = 1; i < 88; i++) {
			frequencyArray.push(this.getFrequency(i));
		}
		return frequencyArray;
	}
}
