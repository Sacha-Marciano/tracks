import React, { useContext } from "react";
import { StyleSheet, View } from "react-native";
import { NavigationEvents } from "react-navigation";

// Contexts
import { Context as AuthContext } from "../contexts/AuthContext";

// Components
import AuthForm from "../components/AuthForm";
import NavLink from "../components/NavLink";

const SignupScreen = () => {
  const { state, signup, clearErrorMessage } = useContext(AuthContext);

  return (
    <View style={styles.container}>
      <NavigationEvents onWillFocus={clearErrorMessage} />
      <AuthForm
        headerText="Sign up for Tracker"
        errorMessage={state.errorMessage}
        onSubmit={signup}
        submitBtnTxt="Sign up"
      />
      <NavLink routeName="Signin" text="Already have an account ? Sign in" />
    </View>
  );
};

SignupScreen.navigationOptions = () => {
  return {
    headerShown: false,
  };
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    marginBottom: 20,
  },
});

export default SignupScreen;
