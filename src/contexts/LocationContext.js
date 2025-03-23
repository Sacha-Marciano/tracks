import CreateDataContext from "./CreateDataContext";

const locationReducer = (state, action) => {
  switch (action.type) {
    case "reset":
      return { ...state, name: "", locations: [] };
    case "change_name":
      return { ...state, name: action.payload };
    case "add_location":
      return { ...state, locations: [...state.locations, action.payload] };
    case "stop_recording":
      return { ...state, recording: false };
    case "start_recording":
      return { ...state, recording: true };
    case "add_current_location":
      return { ...state, currentLocation: action.payload };
    default:
      return state;
  }
};

const changeName = (dispatch) => {
  return (name) => {
    dispatch({ type: "change_name", payload: name });
  };
};
const startRecording = (dispatch) => {
  return () => {
    dispatch({ type: "start_recording" });
  };
};
const stopRecording = (dispatch) => {
  return () => {
    dispatch({ type: "stop_recording" });
  };
};
const addLocation = (dispatch) => {
  return (location, recording) => {
    dispatch({ type: "add_current_location", payload: location });
    if (recording) {
      dispatch({ type: "add_location", payload: location });
    }
  };
};

const reset = (dispatch) => {
  return () => {
    dispatch({ type: "reset" });
  };
};

export const { Context, Provider } = CreateDataContext(
  locationReducer,
  { startRecording, stopRecording, addLocation, changeName, reset },
  { name: "", recording: false, locations: [], currentLocation: null }
);
