import error from "../../public/error.png";
import Image from "next/image";

const NotFound = () => {
  return (
    <div className="not-found">
      <h1>404</h1>
      <h2>Oops! Container not found</h2>
      <p>
        Sorry, but the container you are looking for is not found, Please make
        sure you have typed the current URL
      </p>
    </div>
  );
};

export default NotFound;
