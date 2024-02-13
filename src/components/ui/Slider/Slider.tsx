import { ChangeEventHandler } from "react";

import classes from "./Slider.module.css";

interface SliderProps {
	value: number;
	min: number;
	max: number;
	label: string;
	onChange: ChangeEventHandler<HTMLInputElement>;
}

const Slider = ({ value, onChange, min, max, label }: SliderProps) => {
	return (
		<div>
			<label>
				<p>{label}</p>
			</label>
			<input
				className={classes.slider}
				type="range"
				min={min}
				max={max}
				value={value}
				onChange={onChange}
				step="any"
			/>
		</div>
	);
};

export default Slider;
