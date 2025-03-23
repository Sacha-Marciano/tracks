import * as Location from "expo-location";

const tenMeterWithDegrees = 0.0001;

const getLocation = (increment) => {
  return {
    timestamp: new Date(),
    coords: {
      speed: 0,
      heading: 0,
      accuracy: 5,
      altitude: 5,
      altitudeAccuracy: 5,
      latitude: 32.1775874 + increment * tenMeterWithDegrees,
      longitude: 34.8748162 + increment * tenMeterWithDegrees,
    },
  };
};

let counter = 0;
setInterval(() => {
  Location.EventEmitter.emit("Expo.locationChanged", {
    watchId: Location._getCurrentWatchId(),
    location: getLocation(counter),
  });
  counter++;
}, 1000);
