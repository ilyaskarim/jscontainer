import axios from "axios";
export default function createAxios() {
  return axios.create({
    baseURL: "/",
  });
}
