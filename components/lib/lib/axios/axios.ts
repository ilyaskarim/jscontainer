import axiosInstance from "axios";

export const GETAPIURL = () => {
  if (!process.browser) {
    if (process.env.NODE_ENV === "production") {
      return "http://jscontainer.com/";
    } else {
      return "http://localhost:3000/";
    }
  } else {
    return "/";
  }
};
export const axios = axiosInstance.create({
  baseURL: GETAPIURL(),
});
