import styles from "./layout.module.less";
import { Button, Icon } from "@blueprintjs/core";

/* eslint-disable-next-line */
export interface LayoutProps {
  loggedIn?: boolean;
  children?: React.ReactNode;
}

export function Layout(props: LayoutProps) {
  const loggedIn = props.loggedIn || false;
  return (
    <div className={styles.layout}>
      <div className={styles.header}>
        <a className={styles.headerBrand}>JSContainer</a>
        <div className={styles.headerContent}>
          <Button>
            <Icon icon="saved" />
            &nbsp;&nbsp; Save
          </Button>
          &nbsp; &nbsp;
          <Button intent="primary">
            <Icon icon="play" />
            &nbsp; Run
          </Button>
        </div>
      </div>
      <div className={styles.content}>{props.children}</div>
      <div className={styles.footer}>Footer</div>
    </div>
  );
}

export default Layout;
