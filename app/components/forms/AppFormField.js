//this implementation is the DRY way for login screen form

import React from "react";
import { useFormikContext } from "formik";

import AppTextInput from "../AppText/AppTextInput";
import ErrorMessage from "../ErrorMessage";

function AppFormField({ name }) {
  const { setFieldTouched, handleChange, errors, touched, ...otherProps } =
    useFormikContext();

  return (
    <>
      <AppTextInput
        onBlur={() => setFieldTouched(name)}
        onChange={handleChange(name)}
        {...otherProps}
      />
      <ErrorMessage error={errors[name]} visible={touched[name]} />
    </>
  );
}

export default AppFormField;
