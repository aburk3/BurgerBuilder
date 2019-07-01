import axios from "axios";

const instance = axios.create({
  baseURL: "https://my-burger-builder-proj.firebaseio.com/"
});

export default instance;
