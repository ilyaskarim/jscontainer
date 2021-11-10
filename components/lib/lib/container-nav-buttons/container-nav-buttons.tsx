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
import { useContainerUpdateMutation } from "../graphql/graphql";
import { requestContainerRefresh } from "../redux/redux";

/* eslint-disable-next-line */
export interface ContainerNavButtonsProps {}

export function ContainerNavButtons(props: ContainerNavButtonsProps) {
  const router = useRouter();
  const dispatch = useDispatch();
  const containerFromRedux = useSelector(
    (state: any) => state.container.formData
  );

  const onRequestCreateContainer = useSelector(
    (state: any) => state.container.onRequestCreateContainer
  );

  const onRequestUpdateContainer = useSelector(
    (state: any) => state.container.onRequestUpdateContainer
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

  const { mutate: updateContainer, data: updateContainerData } =
    useContainerUpdateMutation();

  const handleSaveContainer = (update = false) => {
    if (isCreatingContainer) {
      return;
    }
    toast.remove();
    if (changedFields.length === 0) {
      toast.error("Please change something.", {
        position: "bottom-center",
      });
      return;
    }
    update
      ? updateContainer(containerFromRedux)
      : createContainer(containerFromRedux);
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
        dispatch(requestContainerRefresh());

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
    if (
      updateContainerData &&
      get(
        updateContainerData,
        "data.data.updateContainer.returning[0].id",
        null
      )
    ) {
      toast.success("Container updated.", {
        position: "bottom-center",
      });
    }
  }, [updateContainerData]);

  useEffect(() => {
    if (onRequestCreateContainer) {
      handleSaveContainer();
    }
  }, [onRequestCreateContainer]);

  useEffect(() => {
    if (onRequestUpdateContainer) {
      handleSaveContainer(true);
    }
  }, [onRequestUpdateContainer]);

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
            dispatch(requestContainerRefresh());
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
            <a
              style={{ textDecoration: "none" }}
              onClick={() => {
                window.location.href = "/";
              }}
            >
              <Button>Create new container</Button>
            </a>
          </Link>
        </>
      )}
    </>
  );
}

export default ContainerNavButtons;
