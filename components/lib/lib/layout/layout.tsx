import styles from "./layout.module.scss";
import { ContainerNavButtons, UserDropdown } from "../../index";
import { useSelector } from "react-redux";
import classnames from "classnames";

/* eslint-disable-next-line */
export interface LayoutProps {
  loggedIn?: boolean;
  children?: React.ReactNode;
  showFooter?: boolean;
  isContainerPage?: boolean;
}

export function Layout(props: LayoutProps) {
  const isContainerPage = props.isContainerPage ?? true;
  const showFooter = props.showFooter ?? true;
  const theme = useSelector((state: any) => state.container.theme);

  return (
    <div
      className={classnames({
        [styles.layout]: true,
        [styles.dark]: theme === "dark",
      })}
    >
      <div className={styles.header}>
        <a className={styles.headerBrand} href="/">
          JSContainer
        </a>
        <div className={styles.headerContent}>
          {isContainerPage ? (
            <>
              <ContainerNavButtons />
            </>
          ) : (
            <div className={styles.headerLinks}>
              <a>Tools</a>
              <a>About</a>
              <a>Blog</a>
            </div>
          )}
        </div>
      </div>
      <div className={styles.content}>{props.children}</div>
      {showFooter && <div className={styles.footer}>the app footer</div>}
    </div>
  );
}

export default Layout;
