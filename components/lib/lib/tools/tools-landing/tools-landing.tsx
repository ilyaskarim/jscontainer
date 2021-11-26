import classNames from "classnames";
import styles from "./tools-landing.module.scss";
import { ToolsHeader } from "../../../index";
import { Card, Button } from "@blueprintjs/core";
import Link from "next/link";

/* eslint-disable-next-line */
export interface ToolsLandingProps {}

export function ToolsLanding(props: ToolsLandingProps) {
  return (
    <div
      className={classNames({
        [styles.toolsLanding]: true,
        [styles.dark]: true,
      })}
    >
      <ToolsHeader link={<Link href="/">Home</Link>}>Tools</ToolsHeader>
      <div className={styles.toolsList}>
        {[1].map((id) => {
          return (
            <Card key={id} className={styles.toolsListItem}>
              <h5>
                <Link href="/tools/javascript-performance-test">
                  Javascript Performance Test
                </Link>
              </h5>
              <div>
                <p>Card content</p>
                <Link href="/tools/javascript-performance-test">
                  <a className={styles.btnStyles}>
                    <Button>Open Javascript Performance Test</Button>
                  </a>
                </Link>
              </div>
            </Card>
          );
        })}
      </div>
    </div>
  );
}

export default ToolsLanding;
