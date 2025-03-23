// Librairies imports
import React from "react";
import { createAppContainer, createSwitchNavigator } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import { createMaterialBottomTabNavigator } from "react-navigation-material-bottom-tabs";
import { SafeAreaProvider } from "react-native-safe-area-context";
// Screens
import AccountScreen from "./src/screens/AccountScreen";
import SigninScreen from "./src/screens/SigninScreen";
import SignupScreen from "./src/screens/SignupScreen";
import TrackCreateScreen from "./src/screens/TrackCreateScreen";
import TrackDetailScreen from "./src/screens/TrackDetailScreen";
import TrackListScreen from "./src/screens/TrackListScreen";
import LoadingScreen from "./src/screens/LoadingScreen";

// Icons
import { FontAwesome } from "@expo/vector-icons";

// Contexts
import { Provider as AuthProvider } from "./src/contexts/AuthContext";
import { Provider as LocationProvider } from "./src/contexts/LocationContext";
import { Provider as TrackProvider } from "./src/contexts/TrackContext";
// Very clever function
import { setNavigator } from "./src/navigationRef";

const trackListFlow = createStackNavigator({
  TrackList: TrackListScreen,
  TrackDetail: TrackDetailScreen,
});

const switchNavigator = createSwitchNavigator({
  Auth: LoadingScreen,
  loginFlow: createStackNavigator({
    Signin: SigninScreen,
    Signup: SignupScreen,
  }),
  mainFlow: createMaterialBottomTabNavigator({
    trackListFlow,
    TrackCreate: TrackCreateScreen,
    Account: AccountScreen,
  }),
});

trackListFlow.navigationOptions = {
  title: "Tracks List",
  tabBarIcon: <FontAwesome name="th-list" size={20} />,
};

const App = createAppContainer(switchNavigator);

export default () => {
  return (
    <SafeAreaProvider>
      <LocationProvider>
        <AuthProvider>
          <TrackProvider>
            <App
              ref={(navigator) => {
                setNavigator(navigator);
              }}
            />
          </TrackProvider>
        </AuthProvider>
      </LocationProvider>
    </SafeAreaProvider>
  );
};
