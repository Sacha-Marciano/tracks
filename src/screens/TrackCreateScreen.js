// import "../_mockLocation";
import React, { useContext, useCallback } from "react";
import { Text, StyleSheet } from "react-native";
import { withNavigationFocus } from "react-navigation";
import { SafeAreaView } from "react-native-safe-area-context";

// Components
import Map from "../components/Map";
import Spacer from "../components/Spacer";
import TrackForm from "../components/TrackForm";

// Icons
import { FontAwesome } from "@expo/vector-icons";

// Contexts
import { Context as LocationContext } from "../contexts/LocationContext";

// Custom Hooks
import useLocation from "../hooks/useLocation";

const TrackCreateScreen = ({ isFocused }) => {
  const {
    addLocation,
    state: { recording },
  } = useContext(LocationContext);

  const callback = useCallback(
    (location) => {
      addLocation(location, recording);
    },
    [recording]
  );

  const [err] = useLocation(isFocused || recording, callback);

  return (
    <SafeAreaView forceInset={{ top: "always" }}>
      <Text style={styles.title}> Create Track </Text>
      <Spacer>
        <Map />
        {err ? <Text>Please enable location services</Text> : null}
      </Spacer>
      <TrackForm />
    </SafeAreaView>
  );
};

TrackCreateScreen.navigationOptions = {
  title: "Add Track",
  tabBarIcon: <FontAwesome name="plus" size={20} />,
};

const styles = StyleSheet.create({
  title: {
    fontSize: 48,
  },
});

export default withNavigationFocus(TrackCreateScreen);
