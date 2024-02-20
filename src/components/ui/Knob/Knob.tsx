import {
	useState,
	useEffect,
	MouseEventHandler,
	useRef,
	TouchEventHandler,
} from "react";

import classes from "./Knob.module.css";

interface KnobProps {
	value: number;
	min: number;
	max: number;
	onChange: (value: number) => void;
	label: string;
}

const minRotation = 0;
const maxRotation = 270;

const Knob = ({ value, min, max, onChange, label }: KnobProps) => {
	const [rotationValue, setRotationValue] = useState(0);

	const firstUpdate = useRef(true);

	const handleMouseMove = (e: MouseEvent) => {
		setRotationValue((prev) => {
			const cur = prev + e.movementY * -1;
			if (cur < minRotation) return minRotation;
			if (cur > maxRotation) return maxRotation;
			return cur;
		});
	};

	const handleMouseUp = () => {
		window.removeEventListener("mousemove", handleMouseMove);
		window.removeEventListener("mouseup", handleMouseUp);
	};

	const handleMouseDown: MouseEventHandler<HTMLImageElement> = (e) => {
		e.preventDefault();
		window.addEventListener("mousemove", handleMouseMove);
		window.addEventListener("mouseup", handleMouseUp);
	};

	let previousY = 0;

	const handleTouchMove = (e: TouchEvent) => {
		const movement = e.changedTouches[0].clientY - previousY;
		setRotationValue((prev) => {
			const cur = prev + movement * -1;
			if (cur < minRotation) return minRotation;
			if (cur > maxRotation) return maxRotation;
			return cur;
		});
		previousY = e.changedTouches[0].clientY;
	};

	const handleTouchEnd = () => {
		window.removeEventListener("touchmove", handleTouchMove);
		window.removeEventListener("touchend", handleTouchEnd);
	};

	const handleTouchStart: TouchEventHandler<HTMLImageElement> = () => {
		window.addEventListener("touchmove", handleTouchMove);
		window.addEventListener("touchend", handleTouchEnd);
	};

	useEffect(() => {
		setRotationValue(((value - min) / (max - min)) * maxRotation);
	}, [value, min, max]);

	useEffect(() => {
		if (firstUpdate.current) {
			firstUpdate.current = false;
			return;
		}
		onChange(
			Number(((rotationValue / maxRotation) * (max - min) + min).toFixed(4))
		);
	}, [rotationValue]);

	return (
		<div className={classes.knobWrapper}>
			<p>{label}</p>
			<img
				src="images/knob.svg?url"
				className={classes.knob}
				alt="knob"
				style={{ transform: `rotate(${rotationValue}deg)` }}
				onMouseDown={handleMouseDown}
				onTouchStart={handleTouchStart}
			/>
		</div>
	);
};

export default Knob;
