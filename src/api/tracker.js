// Librairies imports
import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";

const instance = axios.create({
  baseURL: "https://d9de-93-172-146-38.ngrok-free.app",
});

instance.interceptors.request.use(
  async (config) => {
    const token = await AsyncStorage.getItem("token");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (err) => {
    return Promise.reject(err);
  }
);

export default instance;
