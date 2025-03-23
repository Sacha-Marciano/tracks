import React, { useContext } from "react";
import { StyleSheet, View } from "react-native";
import { NavigationEvents } from "react-navigation";

// Contexts
import { Context as AuthContext } from "../contexts/AuthContext";

// Components
import AuthForm from "../components/AuthForm";
import NavLink from "../components/NavLink";

const SigninScreen = () => {
  const { state, signin, clearErrorMessage } = useContext(AuthContext);

  return (
    <View style={styles.container}>
      {/* Component that listen to navigation events */}
      <NavigationEvents onWillFocus={clearErrorMessage} />
      {/* // // start as soon as the nav btn is press
        // onWillFocus={() => {}}
        // // start  after the nav is done
        // onDidFocus={() => {}}
        // start as soon as the screen is left
        // // start after the screen is left
        // onDidBlur={() => {}} */}

      <AuthForm
        headerText="Sign in for Tracker"
        errorMessage={state.errorMessage}
        onSubmit={signin}
        submitBtnTxt="Sign in"
      />
      <NavLink routeName="Signup" text="Don't have an account ? Sign up" />
    </View>
  );
};

SigninScreen.navigationOptions = () => {
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

export default SigninScreen;
