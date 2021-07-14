import ContainerNavbar from "./ContainerNavbar";
import AppNavbar from "./AppNavbar";
import { useRouter } from "next/dist/client/router";
import App from "next/app";

export default function (props: any) {
  const router = useRouter(); 
  return (
    <nav className="navbar ">
      {router.route === "/" ? (
        <ContainerNavbar></ContainerNavbar>
      ) : (
        <AppNavbar></AppNavbar>
      )}
    </nav>
  );
}
