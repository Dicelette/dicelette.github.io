import { Checkbox, FormControlLabel } from "@mui/material";
import { Field, type FieldProps } from "formik";
import type { FC } from "react";

type CheckboxProps = {
	className?: string;
	label: string;
	name: string;
	labelPlacement?: "start" | "end" | "top" | "bottom";
};

const CheckBox: FC<CheckboxProps> = ({
	className,
	label,
	name,
	labelPlacement,
}) => {
	return (
		<Field name={name}>
			{({ field }: FieldProps<boolean>) => {
				return (
					<FormControlLabel
						className={className}
						control={
							<Checkbox
								onChange={field.onChange}
								checked={field.checked}
								name={field.name}
								value={field.value}
								id={field.name}
							/>
						}
						labelPlacement={labelPlacement || "start"}
						label={label}
					/>
				);
			}}
		</Field>
	);
};

export default CheckBox;
