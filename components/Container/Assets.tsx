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
      <div className="url_box">
        <a className="url_link" href="#">
          https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.29.1/moment.min.js
        </a>
        <div className="url_icons">
          <span >
            <i className="fas fa-times"></i>
          </span>
          <span onClick={() => setOpen(true)}>
            <i className="fas fa-plus"></i>
          </span>
        </div>
        <Modal  className="assets-modal invite-modal " isOpen={open} onRequestClose={() => setOpen(false)}>
            <div className="modal-header border-0">
              <a href="">CDN JS</a>
              <a href="">Link</a>
            </div>
            <div className="assets-content invite-content">
              <InputField placeholder="Search a library from cdnjs" className=""/>
              <p className="mb-3">Invite to your container</p>
              <p className="mb-4">Inviting users to your container only works <br /> when you have a private container</p>
              <form action="" onSubmit={handlerSubmit} >
                <Button className="btn btn-primary btn-xs">Invite</Button>
              </form>
            </div>
          </Modal>
      </div>
    );
}