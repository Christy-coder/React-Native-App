import React from "react";
import { Image, StyleSheet } from "react-native";
import { Formik } from "formik";
import * as Yup from "yup";

import AppTextInput from "../components/AppText/AppTextInput";
import ErrorMessage from "../components/ErrorMessage";
import Screen from "../components/Screen";
import SubmitButton from "../components/forms/SubmitButton";

// import { AppForm, AppFormField, SubmitButton } from "../components/forms";

const validationSchema = Yup.object().shape({
  email: Yup.string().required().email().label("Email"),
  password: Yup.string().required().min(4).label("Password"),
});

function LoginScreen(props) {
  return (
    <Screen style={styles.container}>
      <Image style={styles.logo} source={require("../assets/logo-red.png")} />
      <Formik
        initialValues={{ email: "", password: "" }}
        onSubmit={(values) => console.log(values)}
        validationSchema={validationSchema}
      >
        {({ handleChange, errors, setFieldTouched, touched }) => (
          <>
            <AppTextInput
              autoCapitalize="none" // don't want ios or android to cap the first letter
              autoCorrect={false}
              icon="email"
              keyboardType="email-addrvess"
              onBlur={() => setFieldTouched("email")}
              onChange={handleChange("email")}
              placeholder="Email"
              textContentType="emailAddress" // this only works on ios, ios will autofill from the keychain
            />
            <ErrorMessage error={errors.email} visible={touched.email} />
            <AppTextInput
              autoCapitalize="none"
              autoCorrect={false}
              icon="lock"
              onBlur={() => setFieldTouched("password")}
              onChange={handleChange("password")}
              placeholder="Password"
              secureTextEntry
              textContentType="password" // only works on ios
            />
            <ErrorMessage error={errors.password} visible={touched.password} />
            <SubmitButton title="Login" />
          </>
        )}
      </Formik>
    </Screen>
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
export default LoginScreen;
