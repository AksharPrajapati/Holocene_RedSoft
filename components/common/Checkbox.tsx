import React from "react";
import { Field } from "formik";

interface Props {
  id: string;
  name: string;
  className: string;
}

export const Checkbox = ({ id, name, className }: Props): JSX.Element => (
  <Field
    name={name}
    render={({ field }: FieldProps) => (
      <input
        id={id}
        {...field}
        type="checkbox"
        className={className}
        checked={field.value}
      />
    )}
  />
);