import Button from "./../UI/Button";
import Modal from "../../components/UI/InviteModal";
import InputField from "../../components/UI/InputField";
import { useState } from "react";
import toast from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import { addAccess, getcontainer, removeAccess, iAccess } from "../../Redux/container.reducer";
import { useEffect } from "react";
export default function () {
  const containerFromRedux = useSelector(getcontainer);
  const { access } = containerFromRedux;
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);

  const [email, setEmail] = useState('');


  const handlerChange = (e: any) => {
    let val = e.target.value;
    setEmail(val)
  }

  const handlerSubmit = (e: any) => {
    e.preventDefault();
    setEmail("")
  
    dispatch(
      addAccess(email),
    )
    setOpen(false);
  };

  const handleDelete = (item: iAccess) => {
    dispatch(
      removeAccess(item),
    )
    toast.success("User removed", {
      duration: 2000,
      position: "bottom-center"
    });
  };

  return (
    <>
      <div className="access scroll-bar">
        <div className="scroll-bar">
          {access.map((item: any) => {
            return (
              <div className="d-inline-block p-10 mr-2 mb-2 pr-0 invited-user">
                {item}
                <span
                  className="close d-inline-block ml-1 text-sm"
                  onClick={() => handleDelete(item)}
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
          <form action="" onSubmit={(e: any) => handlerSubmit(e)}>
            <InputField name="email" value={email} onChange={(e: any) => handlerChange(e)} placeholder="Enter email address"/>
            <br />
            <Button onSubmit={(e: any) => handlerSubmit(e)} className="invite-btn btn btn-primary btn-xs" >Invite</Button>
          </form>
        </div>
      </Modal>
    </>
  );
}
