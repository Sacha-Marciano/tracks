import React, { useContext } from "react";
import { Text, StyleSheet, View } from "react-native";
import { Button } from "react-native-elements";
import { SafeAreaView } from "react-native-safe-area-context";

// Components
import Spacer from "../components/Spacer";

// Icons
import { FontAwesome } from "@expo/vector-icons";

// Contexts
import { Context as AuthContext } from "../contexts/AuthContext";

const AccountScreen = () => {
  const { signout } = useContext(AuthContext);
  return (
    <SafeAreaView forceInset={{ top: "always" }}>
      <Spacer />
      <Text style={{ fontSize: 48 }}> Account Screen </Text>
      <Spacer />
      <Button title="Sign out" onPress={signout} />
    </SafeAreaView>
  );
};

AccountScreen.navigationOptions = {
  title: "Settings",
  tabBarIcon: <FontAwesome name="gear" size={20} />,
};

const styles = StyleSheet.create({});

export default AccountScreen;
