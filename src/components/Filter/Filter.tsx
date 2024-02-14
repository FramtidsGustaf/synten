import { ModuleWrapper } from "../layout/ModuleWrapper";
import VerticalSpace from "../layout/VerticalSpace/VerticalSpace";
import { Group } from "../ui/Group";
import Slider from "../ui/Slider/Slider";
import { filterVariants } from "../../utils/filterVariants";

import { useTheme } from "../../hooks/useTheme";

import * as filter from "../../store/Filter.store";

const Filter = () => {
	const theme = useTheme();

	return (
		<ModuleWrapper label="FILTER">
			<Group
				id="filters"
				data={filterVariants}
				onChange={(e) =>
					filter.setFilterType(e.target.value as BiquadFilterType)
				}
				value={filter.filterType.value}
			/>
			<VerticalSpace h={theme.sm} />
			<Slider
				min={0}
				max={3000}
				onChange={(e) => filter.setFilterFreq(e.target.valueAsNumber)}
				label="FREKVENS"
				value={filter.filterFreq.value}
			/>
			<Slider
				min={0}
				max={100}
				onChange={(e) => filter.setFilterQ(e.target.valueAsNumber)}
				label="TOPP"
				value={filter.filterQ.value}
			/>
		</ModuleWrapper>
	);
};

export default Filter;
