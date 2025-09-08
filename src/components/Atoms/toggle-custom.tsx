import { translate } from "@docusaurus/Translate";
import { Icon } from "@iconify/react";
import { Tooltip, useMediaQuery, useTheme } from "@mui/material";
import ToggleButton from "@mui/material/ToggleButton";

type StandaloneToggleButtonProps = {
	selected: boolean;
	onChange: () => void;
	size: number;
	maxLen?: number;
	length?: number;
	opt: "naturalDice" | "affectSkill" | "excludedStat";
};

type NeededProps = {
	title: string;
	value: string;
	class: string;
	icon: {
		selected: string;
		unselected: string;
	};
};

const getProps = (
	opt: "naturalDice" | "affectSkill" | "excludedStat",
): NeededProps => {
	if (opt === "naturalDice") {
		return {
			title: translate({ message: "Affecter uniquement les dés naturels" }),
			value: "onNaturalDice",
			icon: {
				selected: "game-icons:dice-target",
				unselected: "game-icons:perspective-dice-six-faces-three",
			},
			class: "onNatDice",
		};
	}
	if (opt === "excludedStat") {
		return {
			title: translate({
				message: "Exclure de la sélection des dés de statistiques",
			}),
			value: "excludedStat",
			icon: {
				selected: "fluent:table-simple-exclude-16-regular",
				unselected: "fluent:table-simple-include-16-filled",
			},
			class: "excludedStat",
		};
	}
	return {
		title: translate({ message: "Utilisable sur les macros" }),
		value: "affectSkill",
		icon: {
			selected: "pepicons-pencil:sword-shield-circle",
			unselected: "pepicons-pencil:sword-shield-circle-off",
		},
		class: "affectSkill",
	};
};

const StandaloneToggleIconButton = ({ selected, onChange, size, opt }) => {
	const sizeClass = size === 1280 ? "xl" : "2xl";
	const opts = getProps(opt);
	return (
		<Tooltip
			title={opts.title}
			classes={{ popper: `toggle-tooltip ${opts.class}` }}
			arrow
		>
			<ToggleButton
				value={opts.value}
				size={"small"}
				onChange={onChange}
				selected={selected}
				className={`manage-button !p-px relative top-1 min-[0px]:max-${sizeClass}:w-full toggle !border-[0px] align-middle ${opts.class}`}
			>
				<Icon
					icon={selected ? opts.icon.selected : opts.icon.unselected}
					height="32"
					className={`text-button toggle-button ml-[5px] ${selected ? "checked" : ""} ${opts.class}`}
				/>
			</ToggleButton>
		</Tooltip>
	);
};

const StandaloneToggleTextButton = ({ selected, onChange, size, opt }) => {
	const sizeClass = size === 1280 ? "xl" : "2xl";
	const opts = getProps(opt);
	return (
		<ToggleButton
			value={opts.value}
			className={`!p-1 relative ${sizeClass}:top-2.5 min-[0px]:max-${sizeClass}:w-full toggle-button toggle ${opts.class}`}
			size="small"
			selected={selected}
			onChange={onChange}
			aria-label={opts.title}
			title={opts.title}
		>
			<Icon
				icon={opts.icon.selected}
				height="24"
				className="text-button dice-button"
			/>
			{opts.title}
		</ToggleButton>
	);
};

export default function StandaloneToggleButton({
	selected,
	onChange,
	size,
	opt,
}: StandaloneToggleButtonProps) {
	const theme = useTheme();
	const matches = useMediaQuery(theme.breakpoints.down(size));
	return matches ? (
		<StandaloneToggleTextButton
			selected={selected}
			onChange={onChange}
			size={size}
			opt={opt}
		/>
	) : (
		<StandaloneToggleIconButton
			selected={selected}
			onChange={onChange}
			size={size}
			opt={opt}
		/>
	);
}
