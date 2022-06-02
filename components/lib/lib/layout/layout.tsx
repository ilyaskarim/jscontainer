import styles from "./layout.module.scss";
import { ContainerNavButtons, Logo } from "../../index";
import { useDispatch, useSelector } from "react-redux";
import classnames from "classnames";
import Link from "next/link";
import { Switch } from "@blueprintjs/core";
import { setAutoSave } from "../redux/redux";

/* eslint-disable-next-line */
export interface LayoutProps {
  loggedIn?: boolean;
  children?: React.ReactNode;
  showFooter?: boolean;
  isContainerPage?: boolean;
}

export function Layout(props: LayoutProps) {
  const isContainerPage = props.isContainerPage ?? true;
  const dispatch = useDispatch();
  const showFooter = props.showFooter ?? true;
  const theme = useSelector((state: any) => state.container.theme);
  const autoSave: boolean = useSelector(
    (state: any) => state.container.autoSave
  );

  return (
    <div
      className={classnames({
        [styles.layout]: true,
        [styles.dark]: theme === "dark",
      })}
    >
      <div className="flex px-4 border-b-solid h-15 bg-black border-b-2">
        <Link href="/">
          <a className="flex font-bold color-header mr-5 px-2 py-5 leading-1">
            <img
              className="mr-2 w-8 h-4 mt-1"
              alt="JS Container Logo"
              src="/logo.png"
            />
            <span className="inline-block mt-1">JSContainer</span>
          </a>
        </Link>
        <div className="w-100 flex h-7 mt-5 mr-4 realtive ">
          {isContainerPage ? (
            <>
              <ContainerNavButtons />
              <div className="flex ml-auto absolute right-0 mr-6 px-2">
                <Switch
                  checked={autoSave}
                  label={`Autosave: ${autoSave ? "On" : "Off"}`}
                  className={styles.headerContentLinksAutoSave}
                  onChange={() => {
                    dispatch(setAutoSave(!autoSave));
                  }}
                />
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
