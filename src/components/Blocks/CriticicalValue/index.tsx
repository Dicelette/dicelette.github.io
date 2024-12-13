import { translate } from "@docusaurus/Translate";
import {
	errorClass,
	toolTipOnCondition,
} from "@site/src/components/Blocks/CriticicalValue/errors";
import { Section, Textfield } from "../../Atoms";

export default ({ critical }) => (
	<Section label="Critique">
		<Textfield
			label={translate({ message: "Succès" })}
			name="critical.success"
			type="number"
			id="critical"
			className={`success ${errorClass(critical, "success")}`}
			inputProps={{ min: 0 }}
		/>
		<Textfield
			label={translate({ message: "Échec" })}
			name="critical.failure"
			type="number"
			id="critical"
			className={`failure ${errorClass(critical, "failure")}`}
			inputProps={{ min: 0 }}
		/>
		{toolTipOnCondition(critical)}
	</Section>
);
