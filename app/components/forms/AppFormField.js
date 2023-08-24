import {View, Text} from "react-native";
import React from "react";
import {useFormikContext} from "formik";

import AppTextInput from "../AppTextInput";
import AppErrorMessage from "./AppErrorMessage";

export default function AppFormField({name, ...otherProps}) {
  const {handleChange, setFieldTouched, touched, errors} = useFormikContext();
  return (
    <>
      <AppTextInput
        // icon="email"
        // placeholder="Email"
        // autoCapitalize="none"
        // autoCorrect={false}
        onBlur={() => setFieldTouched(name)}
        onChangeText={handleChange(name)}
        {...otherProps}
        // keyboardType="email-address"
        // textContentType="emailAddress"
      />
      <AppErrorMessage error={errors[name]} visible={touched[name]} />
    </>
  );
}
