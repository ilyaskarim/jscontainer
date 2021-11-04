import styles from "./layout.module.less";
import { Button, Icon } from "@blueprintjs/core";
import { ContainerNavButtons } from "@jscontainer/ui";

/* eslint-disable-next-line */
export interface LayoutProps {
  loggedIn?: boolean;
  children?: React.ReactNode;
  showFooter?: boolean;
  isContainerPage?: boolean;
}

export function Layout(props: LayoutProps) {
  const loggedIn = props.loggedIn ?? false;
  const isContainerPage = props.isContainerPage ?? true;
  const showFooter = props.showFooter ?? true;
  return (
    <div className={styles.layout}>
      <div className={styles.header}>
        <a className={styles.headerBrand}>JSContainer</a>
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
