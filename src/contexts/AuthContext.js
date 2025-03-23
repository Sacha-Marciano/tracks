// Librairies imports
import AsyncStorage from "@react-native-async-storage/async-storage";

import CreateDataContext from "./CreateDataContext";
import trackerApi from "../api/tracker";

import { navigate } from "../navigationRef";

const authReducer = (state, action) => {
  switch (action.type) {
    case "signout":
      return { token: "", errorMessage: "" };
    case "clear_error":
      return { ...state, errorMessage: "" };
    case "add_error":
      return { ...state, errorMessage: action.payload };
    case "signup":
      return { token: action.payload, errorMessage: "" };
    case "signin":
      return { token: action.payload, errorMessage: "" };

    default:
      return state;
  }
};

const checkToken = (dispatch) => {
  return async () => {
    const token = await AsyncStorage.getItem("token");
    if (token) {
      dispatch({ type: "signin", payload: token });
      navigate("TrackList");
    } else {
      navigate("loginFlow");
    }
  };
};

const clearErrorMessage = (dispatch) => {
  return () => {
    dispatch({ type: "clear_error" });
  };
};

const signup = (dispatch) => {
  return async ({ email, password }) => {
    try {
      const response = await trackerApi.post("/signup", { email, password });
      await AsyncStorage.setItem("token", response.data.token);
      dispatch({
        type: "signup",
        payload: response.data.token,
      });
      navigate("TrackList");
    } catch (err) {
      console.log(err.response.data);

      dispatch({
        type: "add_error",
        payload: "Something went wrong with sign up",
      });
    }
  };
};
const signin = (dispatch) => {
  return async ({ email, password }) => {
    try {
      const response = await trackerApi.post("/signin", { email, password });
      await AsyncStorage.setItem("token", response.data.token);
      dispatch({
        type: "signin",
        payload: response.data.token,
      });
      navigate("TrackList");
    } catch (err) {
      console.log(err.response.data);

      dispatch({
        type: "add_error",
        payload: "Something went wrong with sign in",
      });
    }
  };
};

const signout = (dispatch) => {
  return async () => {
    await AsyncStorage.removeItem("token");
    dispatch({ type: "signout" });
    navigate("loginFlow");
  };
};

export const { Provider, Context } = CreateDataContext(
  authReducer,
  { signin, signup, signout, clearErrorMessage, checkToken },
  { token: null, errorMessage: "" }
);
