// Contexts
import CreateDataContext from "./CreateDataContext";

// API services
import trackerApi from "../api/tracker";

const trackReducer = (state, action) => {
  switch (action.type) {
    case "fetch_tracks":
      return action.payload;
    default:
      return state;
  }
};

const fetchTracks = (dispatch) => {
  return async () => {
    const response = await trackerApi.get("/tracks");
    dispatch({ type: "fetch_tracks", payload: response.data });
  };
};

const createTrack = (dispatch) => {
  return async (name, locations) => {
    await trackerApi.post("/tracks", { name, locations });
  };
};

export const { Provider, Context } = CreateDataContext(
  trackReducer,
  { fetchTracks, createTrack },
  []
);
