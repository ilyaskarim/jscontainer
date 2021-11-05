import axiosInstance from "axios";
export const APIURL = "http://localhost:3333";
export const axios = axiosInstance.create({
  baseURL: APIURL,
});
