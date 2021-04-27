import React from "react";
import { useFormikContext } from "formik";
import AppTextInput from "../AppTextInput/AppTextInput";

export default function AppFormField({ name, width, ...otherProps }) {
  const {
    setFieldValue,
    errors,
    setFieldTouched,
    touched,
    values,
  } = useFormikContext();

  return (
    <>
      <AppTextInput
        {...otherProps}
        width={width}
        onBlur={() => setFieldTouched(name)}
        onChangeText={(text) => setFieldValue(name, text)}
        value={values[name]}
      />
    </>
  );
}
