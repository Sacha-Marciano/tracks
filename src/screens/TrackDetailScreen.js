import React, { useContext } from "react";
import { Text, StyleSheet, View } from "react-native";
import MapView, { Polyline } from "react-native-maps";

import { Context as TrackContext } from "../contexts/TrackContext";

const TrackDetailScreen = ({ navigation }) => {
  const { state } = useContext(TrackContext);

  const _id = navigation.getParam("_id");

  const track = state.find((track) => track._id === _id);

  const initialCoords = track.locations[0].coords;

  return (
    <View>
      <Text style={{ fontSize: 48 }}> {track.name} </Text>
      <MapView
        style={styles.map}
        initialRegion={{
          ...initialCoords,
          longitudeDelta: 0.005,
          latitudeDelta: 0.005,
        }}
      >
        <Polyline coordinates={track.locations.map((loc) => loc.coords)} />
      </MapView>
    </View>
  );
};

const styles = StyleSheet.create({
  map: {
    height: 400,
  },
});

export default TrackDetailScreen;
