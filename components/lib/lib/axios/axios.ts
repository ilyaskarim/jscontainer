import axiosInstance from "axios";

export const APIURL = "/";
export const axios = axiosInstance.create({
  baseURL: APIURL,
});
