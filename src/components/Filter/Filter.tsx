import { useTheme } from "../../hooks/useTheme";
import {
	filterFreq,
	filterQ,
	filterType,
	setFilterFreq,
	setFilterQ,
	setFilterType,
} from "../../store/Filter.store";
import { ModuleWrapper } from "../layout/ModuleWrapper";
import VerticalSpace from "../layout/VerticalSpace/VerticalSpace";
import { Group } from "../ui/Group";
import Slider from "../ui/Slider/Slider";

const Filter = () => {
	const theme = useTheme();

	const filterTypes = [
		{
			label: "LÅGPASS",
			value: "lowpass",
		},
		{
			label: "HÖGPASS",
			value: "highpass",
		},
		{
			label: "BANDPASS",
			value: "bandpass",
		},
	];

	return (
		<ModuleWrapper label="FILTER">
			<Group
				id="filters"
				data={filterTypes}
				onChange={setFilterType}
				value={filterType.value}
			/>
			<VerticalSpace h={theme.sm} />
			<Slider
				min={0}
				max={3000}
				onChange={setFilterFreq}
				label="FREKVENS"
				value={filterFreq.value}
			/>
			{/* <VerticalSpace h={theme.sm} /> */}
			<Slider
				min={0}
				max={100}
				onChange={setFilterQ}
				label="TOPP"
				value={filterQ.value}
			/>
		</ModuleWrapper>
	);
};

export default Filter;
