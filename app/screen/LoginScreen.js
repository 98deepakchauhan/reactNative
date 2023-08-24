import {View, Image, StyleSheet} from "react-native";
import React from "react";
import {Formik} from "formik";
import * as Yup from "yup";

import AppFormField from "../components/forms/AppFormField";
import AppSubmitButton from "../components/forms/AppSubmitButton";
import AppForm from "../components/forms/AppForm";

const validationSchema = Yup.object().shape({
  email: Yup.string().required().label("Email").email(),
  password: Yup.string().required().min(4).label("Password"),
});
export default function LoginScreen() {
  return (
    <View style={styles.container}>
      <Image source={require("../assets/logo-red.png")} style={styles.logo} />
      <AppForm
        initialValues={{email: "", password: ""}}
        onSubmit={values => console.log(values)}
        validationSchema={validationSchema}>
        <AppFormField
          icon="email"
          placeholder="Email"
          autoCapitalize="none"
          autoCorrect={false}
          name="email"
          keyboardType="email-address"
          textContentType="emailAddress"
        />
        <AppFormField
          icon="lock"
          placeholder="Password"
          autoCapitalize="none"
          autoCorrect={false}
          name="password"
          secureTextEntry
          textContentType="password"
        />

        <AppSubmitButton title="Submit" />
      </AppForm>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  logo: {
    width: 80,
    height: 80,
    alignSelf: "center",
    marginTop: 50,
    marginBottom: 20,
  },
});
