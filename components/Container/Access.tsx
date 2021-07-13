import Button from "./../UI/Button";
import Modal from "../../components/UI/InviteModal";
import InputField from "../../components/UI/InputField";
import { useState } from "react";
import toast from "react-hot-toast";

export default function () {
  const [open, setOpen] = useState(false);

  const handlerSubmit = (e: Event) => {
    console.log("submit");
    e.preventDefault();
  };

  return (
    <>
      <div className="access scroll-bar">
        <div className="scroll-bar">
          {[1, 2, 3, 4, 5].map((c) => {
            return (
              <div className="d-inline-block p-10 mr-2 mb-2 pr-0 invited-user">
                ilyas@gmail.com
                <span
                  className="close d-inline-block ml-1 text-sm"
                  onClick={() => {
                    toast.success("User removed", {
                      duration: 2000
                    });
                  }}
                >
                  &times;
                </span>
              </div>
            );
          })}
          <Button
            onClick={() => setOpen(true)}
            className="btn btn-primary btn-xs"
          >
            Invite
          </Button>
        </div>
      </div>
      <Modal
        className="invite-modal"
        isOpen={open}
        onRequestClose={() => setOpen(false)}
        style={{
          content: {
            height: "314px",
            maxWidth: "366px",
          }
        }}
      >
        
        <button className="closeBtn" onClick={() => setOpen(false)}><i className="fas fa-times"></i></button>
        <div className="invite-content">
          <h4 className="mb-3">Invite to your container</h4>
          <p className="mb-4">
            Inviting users to your container only works when you have a
            private container
          </p>
          <form action="" onSubmit={(e) => handlerSubmit}>
            <InputField placeholder="Enter email address"/>{" "}
            <br />
            <Button className="invite-btn btn btn-primary btn-xs">Invite</Button>
          </form>
        </div>
      </Modal>
    </>
  );
}
