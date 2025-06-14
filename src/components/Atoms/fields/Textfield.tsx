import {
	type InputBaseComponentProps,
	TextField,
	type TextFieldProps,
} from "@mui/material";
import { Field, type FieldProps } from "formik";
import type { FC, HTMLInputTypeAttribute } from "react";

type TextfieldProps = TextFieldProps & {
	autoFocus?: boolean;
	className?: string;
	name: string;
	type?: HTMLInputTypeAttribute;
	inputProps?: InputBaseComponentProps;
	classMargin?: string;
};

const Textfield: FC<TextfieldProps> = (props) => {
	return (
		<Field name={props.name}>
			{({ field, form: { errors } }: FieldProps<number>) => {
				return (
					<TextField
						{...props}
						value={field.value}
						onChange={props.onChange ?? field.onChange}
						onBlur={field.onBlur}
						autoFocus={props.autoFocus}
						className={`${props.classMargin ?? "!mb-4"} w-[400px] min-[0px]:max-xl:w-full ${props.className}`}
						error={errors[field.name] !== undefined}
						label={props.label}
						size="small"
						name={field.name}
						type={props.type}
						typeof={props.type}
						inputProps={props.inputProps}
					/>
				);
			}}
		</Field>
	);
};

export default Textfield;
