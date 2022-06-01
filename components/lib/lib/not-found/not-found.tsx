import { useSelector } from "react-redux";

/* eslint-disable-next-line */
export interface NotFoundProps {}

export function NotFound(props: NotFoundProps) {
  const theme = useSelector((state: any) => state.container.theme);

  return (
    <div className="pt-44 justify-center align-center flex">
    <h1 className="text-primary font-bold text-5xl">Not Found!</h1>
  </div>
  );
}

export default NotFound;
