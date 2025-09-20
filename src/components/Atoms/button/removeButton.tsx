import { translate } from "@docusaurus/Translate";
import { Icon } from "@iconify/react";
import {
	Button,
	IconButton,
	Tooltip,
	useMediaQuery,
	useTheme,
} from "@mui/material";
import type { FC } from "react";
import { useMemo } from "react";

type RemoveButtonProps = {
	onClick: () => void;
	size: number;
};

type SubComponentProps = {
	onClick: () => void;
	size: number;
};

const RemoveIconButton = ({ onClick, size }: SubComponentProps) => {
	const sizeClass = size === 1280 ? "xl" : "2xl";
	return (
		<Tooltip
			title={translate({ message: "Supprimer ce champ" })}
			classes={{ popper: "remove" }}
			arrow
		>
			<IconButton
				onClick={onClick}
				size="small"
				className={`manage-button !p-px relative top-2.5 min-[0px]:max-${sizeClass}:w-full`}
				aria-label={translate({ message: "Supprimer ce champ" })}
			>
				<Icon icon="lucide:delete" height="24" className="delete-button" />
			</IconButton>
		</Tooltip>
	);
};

const RemoveTextButton = ({ onClick, size }: SubComponentProps) => {
	const sizeClass = size === 1280 ? "xl" : "2xl";
	return (
		<Button
			onClick={onClick}
			className={`!p-1 relative ${sizeClass}:top-2.5 min-[0px]:max-${sizeClass}:w-full delete-button`}
			variant="outlined"
			size="medium"
			aria-label={translate({ message: "Supprimer ce champ" })}
		>
			<Icon
				icon="lucide:delete"
				height="24"
				className="delete-button text-button"
			/>
			{translate({ message: "Supprimer" })}
		</Button>
	);
};

const RemoveButton: FC<RemoveButtonProps> = ({ onClick, size }) => {
	const theme = useTheme();

	// Mémoriser le breakpoint pour éviter les re-rendus excessifs
	const breakpoint = useMemo(() => theme.breakpoints.down(size), [theme, size]);
	const matches = useMediaQuery(breakpoint);

	// Mémoriser les props communes pour éviter les recréations inutiles
	const commonProps = useMemo(() => ({ onClick, size }), [onClick, size]);

	// Retourner directement le composant approprié
	return matches ? (
		<RemoveTextButton {...commonProps} />
	) : (
		<RemoveIconButton {...commonProps} />
	);
};

export default RemoveButton;
