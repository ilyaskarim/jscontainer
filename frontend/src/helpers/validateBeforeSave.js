import { message } from "antd";
export default function (obj) {
  if (!obj.html_raw) {
    message.info("Please write something in Html.");
    return false;
  }
  return true;
}
