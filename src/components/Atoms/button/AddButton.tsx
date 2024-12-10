import { translate } from "@docusaurus/Translate";
import { Icon } from "@iconify/react";
import { IconButton, Tooltip } from "@mui/material";
import type { FC } from "react";

type AddButtonProps = {
	len?: number;
	type?: "dice" | "stats" | "critical";
	onClick: () => void;
};

const AddButton: FC<AddButtonProps> = ({ len, type, onClick }) => {
	const maxLen = 25;
	const addLabel =
		type === "dice"
			? translate({ message: "Ajouter un dé" })
			: translate({ message: "Ajouter une statistique" });
	const msg =
		type === "dice"
			? translate({ message: "dés" })
			: translate({ message: "statistiques (max 25)" });
	const maxLabel = `${translate({
		message: "Vous avez atteint le nombre maximum de",
	})} ${msg}`;
	return type === "stats" ? (
		<Tooltip title={len > maxLen ? maxLabel : addLabel} arrow>
			<span>
				<IconButton
					onClick={onClick}
					size="small"
					className="manage-button"
					disabled={len > maxLen}
				>
					<Icon icon="fluent:add-circle-12-regular" height="20" />
				</IconButton>
			</span>
		</Tooltip>
	) : (
		<Tooltip title={addLabel} arrow>
			<span>
				<IconButton onClick={onClick} size="small" className="manage-button">
					<Icon icon="fluent:add-circle-12-regular" height="20" />
				</IconButton>
			</span>
		</Tooltip>
	);
};

export default AddButton;
