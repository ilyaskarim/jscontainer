import Modal from "../components/UI/Modal";
import { useState } from "react";

export default function () {
  const [open, setOpen] = useState(false);
  return (
    <div>
      <button onClick={() => setOpen(true)}>Modal</button>
      <Modal isOpen={open} onRequestClose={() => setOpen(false)}>
        How are you?
      </Modal>
    </div>
  );
}
