import React, { useContext } from "react";
import { ActivityIndicator, StyleSheet } from "react-native";
import MapView, { Polyline, Circle } from "react-native-maps";

// Context
import { Context as LocationContext } from "../contexts/LocationContext";

const Map = () => {
  const {
    state: { currentLocation, locations },
  } = useContext(LocationContext);

  if (!currentLocation) {
    return <ActivityIndicator size="large" style={{ marginTop: 200 }} />;
  }

  return (
    <MapView
      style={styles.map}
      initialRegion={{
        ...currentLocation.coords,
        latitudeDelta: 0.01,
        longitudeDelta: 0.01,
      }}
      // updates map
      //   region={{
      //     ...currentLocation.coords,
      //     latitudeDelta: 0.01,
      //     longitudeDelta: 0.01,
      //   }}
    >
      <Polyline coordinates={locations.map((loc) => loc.coords)} />
      <Circle
        center={currentLocation.coords}
        radius={15}
        strokeColor="rgba(158,158,255,1.0)"
        fillColor="rgba(158,158,255,0.3)"
      />
    </MapView>
  );
};

const styles = StyleSheet.create({
  map: {
    height: 350,
  },
});

export default Map;
