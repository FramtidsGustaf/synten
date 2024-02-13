import { ModuleWrapper } from "../layout/ModuleWrapper";
import { Group } from "../ui/Group";
import Slider from "../ui/Slider/Slider";
import { filterVariants } from "../../utils/filterVariants";
import { VerticalSpace } from "../layout/VerticalSpace";

import { useTheme } from "../../hooks/useTheme";

import * as noise from "../../store/Noise.store";

const Noise = () => {
	const theme = useTheme();
	return (
		<ModuleWrapper label="BRUS">
			<h3>FÖRSTÄRKARE</h3>
			<VerticalSpace h={theme.xs} />
			<Slider
				min={0}
				max={1}
				label="VOLYM"
				onChange={noise.setNoiseVolume}
				value={noise.noiseVolume.value}
			/>
			<Slider
				min={0}
				max={10}
				label="ATTACK"
				onChange={noise.setNoiseAttack}
				value={noise.noiseAttack.value}
			/>
			<Slider
				min={0}
				max={10}
				label="SLÄPP"
				onChange={noise.setNoiseRelease}
				value={noise.noiseRelease.value}
			/>
			<VerticalSpace h={theme.sm} />
			<h3>FILTER</h3>
			<VerticalSpace h={theme.xs} />
			<Group
				id="noise"
				data={filterVariants}
				onChange={noise.setNoiseFilterType}
				value={noise.noiseFilterType.value}
			/>
			<VerticalSpace h={theme.sm} />
			<Slider
				label="FREKVENS"
				min={0}
				max={3000}
				onChange={noise.setNoiseFilterFreq}
				value={noise.noiseFilterFreq.value}
			/>
			<Slider
				label="TOPP"
				min={0}
				max={10}
				onChange={noise.setNoiseFilterQ}
				value={noise.noiseFilterQ.value}
			/>
		</ModuleWrapper>
	);
};

export default Noise;
