import classNames from "classnames";
import { useSelector } from "react-redux";
import styles from "./not-found.module.scss";

/* eslint-disable-next-line */
export interface NotFoundProps {}

export function NotFound(props: NotFoundProps) {
  const theme = useSelector((state: any) => state.container.theme);

  return (
    <div
      className={classNames({
        [styles.notFound]: true,
        [styles.notFoundDark]: theme === "dark",
      })}
    >
      <h1>Not Found!</h1>
    </div>
  );
}

export default NotFound;
