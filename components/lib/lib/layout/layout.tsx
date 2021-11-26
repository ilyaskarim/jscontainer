import styles from "./layout.module.scss";
import { ContainerNavButtons, Logo } from "../../index";
import { useSelector } from "react-redux";
import classnames from "classnames";
import Link from "next/link";
import Image from "next/image";

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
            <img
              className={styles.headerBrandImage}
              alt="JS Container Logo"
              src="/logo.png"
            />
            <span>JSContainer</span>
          </a>
        </Link>
        <div className={styles.headerContent}>
          {isContainerPage ? (
            <>
              <ContainerNavButtons />
              <div className={styles.headerContentLinks}>
                <Link href="/tools">Tools</Link>
              </div>
            </>
          ) : (
            <></>
          )}
        </div>
      </div>
      <div className={styles.content}>{props.children}</div>
      {showFooter && (
        <div className={styles.footer}>
          © 2021 JSContainer. All Rights Reserved
        </div>
      )}
    </div>
  );
}

export default Layout;
