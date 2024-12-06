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
};

const StandaloneToggleIconButton = ({ selected, onChange, size }) => {
	const sizeClass = size === 1280 ? "xl" : "2xl";

	return (
		<Tooltip
			title="Affecte uniquement les dés naturels"
			classes={{ popper: "toggle-tooltip" }}
			arrow
		>
			<ToggleButton
				value="check"
				size={"small"}
				onChange={onChange}
				selected={selected}
				className={`manage-button !p-px relative top-1 min-[0px]:max-${sizeClass}:w-full toggle !border-[0px] align-middle`}
			>
				<Icon
					icon={
						selected
							? "game-icons:dice-target"
							: "game-icons:perspective-dice-six-faces-three"
					}
					height="32"
					className={`text-button toggle-button ml-[5px] ${selected ? "checked" : ""}`}
				/>
			</ToggleButton>
		</Tooltip>
	);
};

const StandaloneToggleTextButton = ({ selected, onChange, size }) => {
	const sizeClass = size === 1280 ? "xl" : "2xl";
	return (
		<ToggleButton
			value="check"
			className={`!p-1 relative ${sizeClass}:top-2.5 min-[0px]:max-${sizeClass}:w-full toggle-button toggle`}
			size="small"
			selected={selected}
			onChange={onChange}
			aria-label="Affecte uniquement les dés naturels"
			title="Affecte uniquement les dés naturels"
		>
			<Icon
				icon="game-icons:dice-target"
				height="24"
				className="text-button dice-button"
			/>
			{translate({ message: "Affecter uniquement les dés naturels" })}
		</ToggleButton>
	);
};

export default function StandaloneToggleButton({
	selected,
	onChange,
	size,
}: StandaloneToggleButtonProps) {
	const theme = useTheme();
	const matches = useMediaQuery(theme.breakpoints.down(size));
	return matches ? (
		<StandaloneToggleTextButton
			selected={selected}
			onChange={onChange}
			size={size}
		/>
	) : (
		<StandaloneToggleIconButton
			selected={selected}
			onChange={onChange}
			size={size}
		/>
	);
}
