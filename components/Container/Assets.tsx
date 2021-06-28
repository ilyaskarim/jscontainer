import Button from "./../UI/Button";
import Modal from "../../components/UI/InviteModal";
import InputField from "../../components/UI/InputField";
import { useState } from "react";
import toast from "react-hot-toast";

const customStyles = {
  height: "280px",
  maxWidth: "366px",
  
};

export default function () {
  const [open, setOpen] = useState(false);

  const handlerSubmit = (e: any) => {
    console.log("submit");
    e.preventDefault();
  };
  return (
    <>
      <div className="url_box">
        <a className="url_link" href="#">
          https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.29.1/moment.min.js
        </a>
        <div className="url_icons">
          <span
            onClick={() => {
              toast.success("Asset removed", {
                duration: 2000
              });
            }}
          >
            <i className="fas fa-times"></i>
          </span>
          <span onClick={() => setOpen(true)}>
            <i className="fas fa-plus"></i>
          </span>
        </div>
      </div>
      <Modal
        className="assets-modal invite-modal "
        isOpen={open}
        onRequestClose={() => setOpen(false)}
      

          style={{
            
            content: {
              height: '333px',
              maxWidth: '466px',
            }
          }}
      >
        <div className="modal-header pt-0 pl-0 border-0">
          <a href="" className="mr-3 ">
            CDN JS
          </a>
          <a href="">Link</a>
        </div>
        <div className="assets-content invite-content">
          <form action="" onSubmit={handlerSubmit}>
            <InputField
              placeholder="Search a library from cdnjs"
              className=""
            />
          </form>
          <p className="mb-3">
            Tip: To directly insert, enter url and press enter
          </p>
          <div className="cdn-links mb-2">
            <a href="">https://wapgee.com/cdn/path/to/file.js</a>{" "}
            <span>Vue @ 2.5.6</span>
          </div>
          <div className="cdn-links">
            <a href="">https://wapgee.com/cdn/path/to/file.js</a>{" "}
            <span>Vue @ 2.5.6</span>
          </div>
        </div>
      </Modal>
    </>
  );
}
