import React, { useContext } from "react";
import { Button, Input } from "react-native-elements";
import Spacer from "./Spacer";

import { Context as LocationContext } from "../contexts/LocationContext";

import useSaveTrack from "../hooks/useSaveTrack";

const TrackForm = () => {
  const {
    state: { name, recording, locations },
    startRecording,
    stopRecording,
    changeName,
  } = useContext(LocationContext);

  const [saveTrack] = useSaveTrack();

  return (
    <>
      <Spacer>
        <Input
          placeholder="Track Name"
          value={name}
          onChangeText={changeName}
        />
      </Spacer>
      {recording ? (
        <Button title="Stop" onPress={stopRecording} />
      ) : (
        <Button title="Start Recording" onPress={startRecording} />
      )}
      <Spacer />
      {!recording && locations.length ? (
        <Button title="Save Track" onPress={saveTrack} />
      ) : null}
    </>
  );
};

export default TrackForm;
