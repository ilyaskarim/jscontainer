import { EditText } from "react-edit-text";

export default function () {
  return (
    <>
      <div className="profile-modal-content">
        <h4 className={"main-heading"}>Your Profile</h4>
        <div>
          <h6 className="labels">Name</h6>
          <EditText name="textbox1" defaultValue="Ilyas Karim" />
          <h6 className="labels">Username</h6>
          <EditText name="textbox1" defaultValue="Username" />
        </div>
      </div>
    </>
  );
}
