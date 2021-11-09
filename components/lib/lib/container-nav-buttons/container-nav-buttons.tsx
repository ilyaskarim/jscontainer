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

  const {
    mutate: createContainer,
    data: createContainerData,
    isLoading: isCreatingContainer,
  } = useContainerCreateMutation();

  const handleSaveContainer = () => {
    if (isCreatingContainer) {
      return;
    }
    console.log("handle save contaienr");
    toast.remove();
    if (changedFields.length === 0) {
      toast.error("Please change something.", {
        position: "bottom-center",
      });
      return;
    }
    createContainer(containerFromRedux);
  };

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

        toast.success("Container Saved", {
          position: "bottom-center",
        });
        setTimeout(() => {
          router.push(`/c/${container.slug}`);
        }, 250);
      }
    }
  }, [createContainerData]);

  useEffect(() => {
    if (onRequestSaveContainer) {
      handleSaveContainer();
    }
  }, [onRequestSaveContainer]);

  return (
    <>
      <Button
        intent="primary"
        small
        disabled={notFoundContainer}
        onClick={() => {
          if (changedFields.length > 0) {
            handleSaveContainer();
          } else {
            const frame: HTMLIFrameElement | null = document.getElementById(
              "previewIframe"
            ) as HTMLIFrameElement;
            if (frame) {
              frame.src = frame.src;
            }
          }
        }}
      >
        &nbsp;
        <Icon size={15} icon="play" style={{ marginRight: "5px" }} />
        Run
      </Button>
      <Button
        small
        disabled={notFoundContainer}
        onClick={async () => {
          handleSaveContainer();
        }}
      >
        &nbsp;
        <Icon size={15} icon="saved" style={{ marginRight: "5px" }} />
        Save
      </Button>

      {notFoundContainer && (
        <>
          <Link href="/">
            <Button>Create new container</Button>
          </Link>
        </>
      )}
    </>
  );
}

export default ContainerNavButtons;
