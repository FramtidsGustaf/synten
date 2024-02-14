type StereoChannel = "left" | "right";

interface Osc {
	type: string;
	detune: number;
	volume: number;
	attack: number;
	release: number;
	vibratoFreq: number;
	vibratoDepth: number;
}

interface Filter {
	type: string;
	freq: number;
	q: number;
}

interface Noise {
	volume: number;
	attack: number;
	release: number;
	filter: Filter;
}

interface Delay {
	time: number;
	feedback: number;
	volume: number;
}

interface Reverb {
	time: number;
	decay: number;
	volume: number;
	filter: Filter;
}
interface Synth {
	oscOne: Osc;
	oscTwo: Osc;
	oscThree: Osc;
	noise: Noise;
	filter: Filter;
	leftDelay: Delay;
	rightDelay: Delay;
	leftReverb: Reverb;
	rightReverb: Reverb;
}
