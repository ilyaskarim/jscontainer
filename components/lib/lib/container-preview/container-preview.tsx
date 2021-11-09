import styles from "./container-preview.module.scss";
import { InputGroup, Icon, Position } from "@blueprintjs/core";
import { Tooltip2 } from "@blueprintjs/popover2";
import { useSelector } from "react-redux";
import toast from "react-hot-toast";
import classNames from "classnames";
import { useEffect } from "react";

/* eslint-disable-next-line */
export interface ContainerPreviewProps {}

export function ContainerPreview(props: ContainerPreviewProps) {
  const containerFromRedux = useSelector(
    (state: any) => state.container.formData
  );

  const onRequestRefreshContainer = useSelector((state: any) => {
    return state.container.onRequestRefreshContainer;
  });

  const theme = useSelector((state: any) => state.container.theme);

  const handleIframeRefresh = () => {
    const frame: HTMLIFrameElement | null = document.getElementById(
      "previewIframe"
    ) as HTMLIFrameElement;
    if (frame) {
      frame.src = frame.src;
    }
  };

  useEffect(() => {
    if (onRequestRefreshContainer) {
      handleIframeRefresh();
    }
  }, [onRequestRefreshContainer]);

  if (!process.browser) {
    return <></>;
  }

  return (
    <div
      className={classNames({
        [styles.preview]: true,
        [styles.previewDark]: theme === "dark",
      })}
    >
      <div className={styles.previewHeader}>
        <Tooltip2
          content="Copy container link to clipboard"
          position={Position.BOTTOM}
        >
          <a
            className={styles.previewURLCopy}
            onClick={() => {
              window.navigator.clipboard.writeText(window.location.href);
              toast.success("Copied to clipboard!", {
                position: "bottom-center",
              });
            }}
          >
            <Icon icon="link" />
          </a>
        </Tooltip2>
        <InputGroup
          value={window.location.origin + "/preview/" + containerFromRedux.slug}
          size={45}
          small={true}
        />
        &nbsp; &nbsp;
        <Tooltip2
          content="Copy container preview URL to clipboard"
          position={Position.BOTTOM}
        >
          <a
            className={styles.previewURLCopy}
            onClick={() => {
              window.navigator.clipboard.writeText(
                `${window.location.origin}/preview/${containerFromRedux.slug}`
              );
              toast.success("Copied preview URL to clipboard!", {
                position: "bottom-center",
              });
            }}
          >
            <Icon icon="duplicate" />
          </a>
        </Tooltip2>
      </div>
      {containerFromRedux && containerFromRedux.slug && (
        <iframe
          key={containerFromRedux.id}
          className={styles.previewFrame}
          src={window.location.origin + "/preview/" + containerFromRedux.slug}
          id="previewIframe"
        ></iframe>
      )}
    </div>
  );
}

export default ContainerPreview;
