import { Checkbox, FormControlLabel } from "@mui/material";
import { Field, FieldProps } from "formik";
import { FC } from "react";

type CheckboxProps = {
  className?: string;
  label: string;
  name: string;
};

const CheckBox: FC<CheckboxProps> = ({ className, label, name }) => {
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
            labelPlacement="start"
            label={label}
          />
        );
      }}
    </Field>
  );
};

export default CheckBox;
