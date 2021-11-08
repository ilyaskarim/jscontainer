import "./container-nav-buttons.module.scss";
import { Button, Icon } from "@blueprintjs/core";
import Link from "next/link";
import {
  resetChangedFields,
  setContainerFormData,
  useContainerCreateMutation,
} from "../../index";
import { useSelector } from "react-redux";
import { useCallback, useEffect } from "react";
import { get } from "lodash";
import { useDispatch } from "react-redux";
import toast from "react-hot-toast";
import { useRouter } from "next/router";

/* eslint-disable-next-line */
export interface ContainerNavButtonsProps {}

export function ContainerNavButtons(props: ContainerNavButtonsProps) {
  const router = useRouter();
  const dispatch = useDispatch();
  const containerFromRedux = useSelector(
    (state: any) => state.container.formData
  );

  const onRequestSaveContainer = useSelector(
    (state: any) => state.container.onRequestSaveContainer
  );

  const changedFields = useSelector(
    (state: any) => state.container.changedFields
  );

  const notFoundContainer = useSelector(
    (state: any) => state.container.notFound
  );

  const { mutate: createContainer, data: createContainerData } =
    useContainerCreateMutation();

  const handleSaveContainer = useCallback(() => {
    if (changedFields.length === 0) {
      toast.error("Please change something.", {
        position: "bottom-center",
      });
      return;
    }
    toast.remove();
    createContainer(containerFromRedux);
  }, [changedFields, containerFromRedux, createContainer]);

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
        router.push(`/c/${container.slug}`);
        toast.success("Container Saved", {
          position: "bottom-center",
        });
      }
    }
  }, [createContainerData, dispatch, router]);

  useEffect(() => {
    if (onRequestSaveContainer) {
      handleSaveContainer();
    }
  }, [onRequestSaveContainer, handleSaveContainer]);

  return (
    <>
      <Button
        disabled={notFoundContainer}
        onClick={async () => {
          handleSaveContainer();
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
          <Link href="/">
            <Button>Create new container</Button>{" "}
          </Link>
        </>
      )}
    </>
  );
}

export default ContainerNavButtons;
