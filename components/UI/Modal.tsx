import { useState } from "react";
import Modal from "react-modal";

export default function (props: any) {
  return <Modal {...props}>{props.children}</Modal>;
}
