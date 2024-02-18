import classes from "./Switch.module.css";

interface SwitchProps {
	checked: boolean;
	onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Switch = ({ checked, onChange }: SwitchProps) => {
	return (
		<label className={classes.switch}>
			<input
				type="checkbox"
				checked={checked}
				className={classes.input}
				onChange={onChange}
			/>
			<span className={classes.slider} />
		</label>
	);
};

export default Switch;
