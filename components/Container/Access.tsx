import Button from "./../UI/Button";
import Modal from "../../components/UI/InviteModal";
import { useState } from "react";

export default function () {
  const [open, setOpen] = useState(false);
    return (
      <div className="access scroll-bar">
        <div className="scroll-bar">
          {[1, 2, 3, 4, 5].map((c) => {
            return (
              <div className="d-inline-block p-10 mr-2 mb-2 pr-0 invited-user">
                ilyas@gmail.com
                <span className="close d-inline-block ml-1 text-sm">
                  &times;
                </span>
              </div>
            );
          })}
          <Button onClick={() => setOpen(true)} className="btn btn-primary btn-xs">Invite</Button>
          
          <Modal isOpen={open} onRequestClose={() => setOpen(false)}>
            this is Modal
          </Modal>
        </div>
      </div>
    );
}