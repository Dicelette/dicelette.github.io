import { TextField, type TextFieldProps } from "@mui/material";
import { FastField, type FieldProps } from "formik";
import type { FC, HTMLInputTypeAttribute } from "react";
import { useEffect, useRef, useState } from "react";

type TablefieldProps = TextFieldProps & {
	autoFocus?: boolean;
	className?: string;
	name: string;
	type?: HTMLInputTypeAttribute;
};

const DebouncedField = ({
	field,
	meta,
	form,
	props,
}: {
	field: FieldProps<any>["field"];
	meta: FieldProps<any>["meta"];
	form: FieldProps<any>["form"];
	props: TablefieldProps;
}) => {
	const [localValue, setLocalValue] = useState(field.value);
	const timeoutRef = useRef<number | undefined>(undefined);

	// Sync local when external value changes (e.g., reorder, reset)
	useEffect(() => {
		setLocalValue(field.value);
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [field.value]);

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const { name, value } = e.target;
		setLocalValue(value);
		if (timeoutRef.current) window.clearTimeout(timeoutRef.current);
		timeoutRef.current = window.setTimeout(() => {
			form.setFieldValue(name, value, false);
		}, 120);
	};

	return (
		<TextField
			{...props}
			value={localValue}
			onChange={handleChange}
			onBlur={field.onBlur}
			autoFocus={props.autoFocus}
			className={`2xl:w-[200px] !mb-0 min-[0px]:max-2xl:w-full ${props.className}`}
			error={!!meta.error}
			label={props.label}
			size="small"
			name={field.name}
			type={props.type}
			typeof={props.type}
		/>
	);
};

const Tablefield: FC<TablefieldProps> = (props) => (
	<FastField name={props.name}>
		{({ field, meta, form }: FieldProps<any>) => (
			<DebouncedField field={field} meta={meta} form={form} props={props} />
		)}
	</FastField>
);

export default Tablefield;
