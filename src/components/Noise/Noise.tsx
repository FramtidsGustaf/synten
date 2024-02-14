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
				onChange={(e) => noise.setNoiseVolume(e.target.valueAsNumber)}
				value={noise.noiseVolume.value}
			/>
			<Slider
				min={0}
				max={10}
				label="ATTACK"
				onChange={(e) => noise.setNoiseAttack(e.target.valueAsNumber)}
				value={noise.noiseAttack.value}
			/>
			<Slider
				min={0}
				max={10}
				label="SLÄPP"
				onChange={(e) => noise.setNoiseRelease(e.target.valueAsNumber)}
				value={noise.noiseRelease.value}
			/>
			<VerticalSpace h={theme.sm} />
			<h3>FILTER</h3>
			<VerticalSpace h={theme.xs} />
			<Group
				id="noise"
				data={filterVariants}
				onChange={(e) =>
					noise.setNoiseFilterType(e.target.value as BiquadFilterType)
				}
				value={noise.noiseFilterType.value}
			/>
			<VerticalSpace h={theme.sm} />
			<Slider
				label="FREKVENS"
				min={0}
				max={3000}
				onChange={(e) => noise.setNoiseFilterFreq(e.target.valueAsNumber)}
				value={noise.noiseFilterFreq.value}
			/>
			<Slider
				label="TOPP"
				min={0}
				max={10}
				onChange={(e) => noise.setNoiseFilterQ(e.target.valueAsNumber)}
				value={noise.noiseFilterQ.value}
			/>
		</ModuleWrapper>
	);
};

export default Noise;
