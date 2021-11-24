import classNames from "classnames";
import styles from "./tools-landing.module.scss";

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
      <div className={styles.header}>
        <h1>Tools</h1>
      </div>
      <div className={styles.toolsList}>
        {[1].map((c, index) => {
          return (
            <a key={index} href="/tools/javasript-performance-test">
              <div className={styles.toolsListItem}>
                <svg
                  id="sw-js-blob-svg"
                  viewBox="0 0 100 100"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <defs>
                    <linearGradient
                      id="sw-gradient"
                      x1="0"
                      x2="1"
                      y1="1"
                      y2="0"
                    >
                      <stop id="stop1" stop-color="#0099ff" offset="0%"></stop>
                      <stop
                        id="stop2"
                        stop-color="#0099ff"
                        offset="100%"
                      ></stop>
                    </linearGradient>
                  </defs>
                  <path
                    fill="url(#sw-gradient)"
                    d="M28.1,-33.6C35.2,-27.5,39,-17.5,38.6,-8.5C38.1,0.5,33.4,8.5,29,17.3C24.6,26.2,20.6,35.7,13.9,38.1C7.2,40.5,-2,35.6,-11.4,31.9C-20.8,28.2,-30.3,25.6,-35.3,19.3C-40.3,12.9,-40.8,2.8,-38.9,-6.6C-36.9,-16.1,-32.6,-24.9,-25.8,-31.1C-18.9,-37.2,-9.4,-40.6,0.5,-41.2C10.5,-41.9,21,-39.7,28.1,-33.6Z"
                    width="100%"
                    height="100%"
                    transform="translate(50 50)"
                    stroke-width="0"
                  ></path>
                </svg>
                <div className={styles.toolsListItemContent}>
                  <div>
                    <h3>Javascript Performance Test</h3>
                    <p>Test your javasript code speed</p>
                  </div>
                </div>
              </div>
            </a>
          );
        })}
      </div>
    </div>
  );
}

export default ToolsLanding;
