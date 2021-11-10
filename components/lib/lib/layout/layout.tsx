import styles from "./layout.module.scss";
import { ContainerNavButtons, Logo } from "../../index";
import { useSelector } from "react-redux";
import classnames from "classnames";
import Link from "next/link";
import { useEffect } from "react";

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
        <Link href="/">
          <a className={styles.headerBrand}>
            <img src="/logo.png" />
            <span>JSContainer</span>
          </a>
        </Link>
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
