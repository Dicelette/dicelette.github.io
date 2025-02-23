import { translate } from "@docusaurus/Translate";
import { Icon } from "@iconify/react";
import DefaultAdmonitionTypes from "@theme-original/Admonition/Types";
import React from "react";

function Usage(props) {
	return (
		<div className="theme-admonition theme-admonition-usage admonition_o5H7 usage alert--usage">
			<div className="admonitionHeading_FzoX">
				<span className="admonitionIcon_rXq6">
					<Icon icon="fluent:data-usage-edit-24-filled" />
				</span>
				{props.title?.length > 0
					? props.title
					: translate({ message: "Utilisation" })}
			</div>
			<div className="admonitionContent_Knsx">{props.children}</div>
		</div>
	);
}

function Example(props) {
	return (
		<div className="theme-admonition theme-admonition-example admonition_o5H7 example alert--example">
			<div className="admonitionHeading_FzoX">
				<span className="admonitionIcon_rXq6">
					<Icon icon="fluent:drafts-24-regular" />
				</span>
				{props.title?.length > 0
					? props.title
					: translate({ message: "Exemple" })}
			</div>
			<div className="admonitionContent_Knsx">{props.children}</div>
		</div>
	);
}

function Pin(props) {
	return (
		<div className="theme-admonition theme-admonition-pin admonition_o5H7 pin alert--pin">
			<div className="admonitionHeading_FzoX">
				<span className="admonitionIcon_rXq6">
					<Icon icon="fluent:pin-20-filled" />
				</span>
				{props.title?.length > 0
					? props.title
					: translate({ message: "Pin" })}
			</div>
			<div className="admonitionContent_Knsx">{props.children}</div>
		</div>
	);
}

const AdmonitionTypes = {
	...DefaultAdmonitionTypes,

	usage: Usage,
	example: Example,
	pin: Pin,
};

export default AdmonitionTypes;
