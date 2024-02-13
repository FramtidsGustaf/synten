import { ChangeEvent } from "react";
import classes from "./Group.module.css";

interface DataPart {
	label: string;
	value: string;
}

interface GroupProps {
	data: DataPart[];
	id: string;
	onChange: (value: ChangeEvent<HTMLFormElement>) => void;
	value: string;
}

const Group = ({ data, id, onChange, value }: GroupProps) => {
	const handleOnChange = (e: ChangeEvent<HTMLFormElement>) => {
		onChange(e);
	};

	return (
		<form className={classes.groupWrapper} onChange={handleOnChange}>
			{data.map((d) => {
				const ID = `${id}-${d.value}`;
				return (
					<div key={ID}>
						<input
							type="radio"
							id={ID}
							value={d.value}
							name={id}
							className={classes.radio}
							hidden
							defaultChecked={d.value === value}
						/>
						<label htmlFor={ID} className={classes.label}>
							{d.label}
						</label>
					</div>
				);
			})}
		</form>
	);
};

export default Group;
