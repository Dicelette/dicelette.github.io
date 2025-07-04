import Translate, { translate } from "@docusaurus/Translate";
import Heading from "@theme/Heading";

type FeatureItem = {
	title: string;
	Image: string;
	description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
	{
		title: translate({ message: "Système de dés avancé" }),
		Image: require("@site/static/img/dice.png").default,
		description: (
			<Translate>
				Lancez des dés avec des expressions complexes, créez des dés personnalisés
				et organisez automatiquement les résultats dans des fils dédiés.
			</Translate>
		),
	},
	{
		title: translate({ message: "Gestion intelligente des personnages" }),
		Image: require("@site/static/img/character.png").default,
		description: (
			<Translate>
				Créez des modèles adaptés à votre système de jeu et gérez vos fiches
				de personnage avec un contrôle total sur vos données.
			</Translate>
		),
	},
	{
		title: translate({ message: "Configuration flexible" }),
		Image: require("@site/static/img/theme-park.png").default,
		description: (
			<Translate>
				Personnalisez chaque aspect du bot : auto-rôles, gestion des scènes,
				suppression HRP, et bien plus selon vos besoins.
			</Translate>
		),
	},
];

function Feature({ title, Image, description }: Readonly<FeatureItem>) {
	return (
		<div className="flex flex-col items-center justify-center gap-4">
			<img src={Image} alt={title} width={"100"} height={100} />
			<div className="space-y-2">
				<Heading as="h3" className="text-center font-bold">
					{title}
				</Heading>
				<p className="max-w-96 text-center">{description}</p>
			</div>
		</div>
	);
}

export default function HomepageFeatures(): JSX.Element {
	return (
		<div className="flex justify-evenly flex-wrap py-8">
			{FeatureList.map((props) => (
				<Feature key={props.title} {...props} />
			))}
		</div>
	);
}
