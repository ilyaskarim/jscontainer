import Button from "./../UI/Button";
import Modal from "../../components/UI/InviteModal";
import InputField from "../../components/UI/InputField";
import { useState } from "react";


export default function () {
  const [open, setOpen] = useState(false);

  const handlerSubmit = (e: any) => {
    console.log("submit")
    e.preventDefault();
  }


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
          
          <Modal  className="invite-modal" isOpen={open} onRequestClose={() => setOpen(false)}>
            <div className="invite-content">
              <h4 className="mb-3">Invite to your container</h4>
              <p className="mb-4">Inviting users to your container only works <br /> when you have a private container</p>
              <form action="" onSubmit={handlerSubmit} >
                <InputField placeholder="Enter email address" className="mb-4"/> <br />
                <Button className="btn btn-primary btn-xs">Invite</Button>
              </form>
            </div>
          </Modal>
        </div>
      </div>
    );
}