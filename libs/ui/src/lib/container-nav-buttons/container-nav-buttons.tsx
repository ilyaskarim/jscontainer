import "./container-nav-buttons.module.less";
import { Button, Icon } from "@blueprintjs/core";
import {
  resetChangedFields,
  setContainerFormData,
  useContainerCreateMutation,
} from "@jscontainer/ui";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { get } from "lodash";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import toast from "react-hot-toast";

/* eslint-disable-next-line */
export interface ContainerNavButtonsProps {}

export function ContainerNavButtons(props: ContainerNavButtonsProps) {
  const history = useHistory();
  const dispatch = useDispatch();
  const containerFromRedux = useSelector(
    (state: any) => state.container.formData
  );

  const changedFields = useSelector(
    (state: any) => state.container.changedFields
  );

  const notFoundContainer = useSelector(
    (state: any) => state.container.notFound
  );

  const { mutate: createContainer, data: createContainerData } =
    useContainerCreateMutation();

  useEffect(() => {
    if (createContainerData) {
      const container = get(
        createContainerData,
        "data.data.createContainer.returning[0]",
        null
      );
      if (container) {
        dispatch(setContainerFormData(container));
        dispatch(resetChangedFields());
        history.push(`/c/${container.slug}`);
        toast.success("Container Saved", {
          position: "bottom-center",
        });
      }
    }
  }, [createContainerData]);

  return (
    <>
      <Button
        disabled={notFoundContainer}
        onClick={async () => {
          if (changedFields.length === 0) {
            toast.error("Please change something.", {
              position: "bottom-center",
            });
            return;
          }
          toast.remove();
          createContainer(containerFromRedux);
        }}
      >
        <Icon icon="saved" style={{ marginRight: "5px" }} />
        Save
      </Button>

      <Button
        intent="primary"
        disabled={notFoundContainer}
        onClick={() => {
          const frame: HTMLIFrameElement | null = document.getElementById(
            "previewIframe"
          ) as HTMLIFrameElement;
          if (frame) {
            frame.src = frame.src;
          }
        }}
      >
        <Icon icon="play" style={{ marginRight: "5px" }} />
        Run
      </Button>
      {notFoundContainer && (
        <>
          <a href="/">
            <Button>Create new container</Button>{" "}
          </a>
        </>
      )}
    </>
  );
}

export default ContainerNavButtons;
