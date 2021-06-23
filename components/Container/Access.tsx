import Button from "./../UI/Button"
export default function () {
    return (
      <div className="access">
        <div className="scroll-bar">
          {[1, 2, 3, 4, 5].map((c) => {
            return (
              <div className="d-inline-block p-10 mr-2 p-1 invited-user">
                ilyas@gmail.com
                <span className="close d-inline-block ml-1 text-sm p-1 ">
                  &times;
                </span>
              </div>
            );
          })}
          <Button className="btn btn-primary btn-xs">Invite</Button>
        </div>
      </div>
    );
}