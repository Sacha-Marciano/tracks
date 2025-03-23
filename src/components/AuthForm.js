import React, { useState } from "react";
import { StyleSheet, Text } from "react-native";
import { Button, Input } from "react-native-elements";
import Spacer from "./Spacer";

const AuthForm = ({ headerText, errorMessage, onSubmit, submitBtnTxt }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <>
      <Spacer>
        <Text style={styles.title}> {headerText} </Text>
      </Spacer>
      <Input
        label="Email"
        value={email}
        onChangeText={setEmail}
        autoCapitalize="none"
        autoCorrect={false}
      />
      <Input
        label="Password"
        value={password}
        onChangeText={setPassword}
        autoCapitalize="none"
        autoCorrect={false}
        secureTextEntry
      />
      {errorMessage ? (
        <Text style={styles.errorMessage}>{errorMessage}</Text>
      ) : null}
      <Spacer>
        <Button
          title={submitBtnTxt}
          onPress={() => onSubmit({ email, password })}
        />
      </Spacer>
    </>
  );
};

const styles = StyleSheet.create({
  errorMessage: {
    fontSize: 16,
    color: "red",
    marginLeft: 15,
    marginTop: 15,
  },
  title: {
    fontSize: 36,
    fontWeight: "900",
  },
});

export default AuthForm;
