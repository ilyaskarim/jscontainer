import "./container-nav-buttons.module.less";
import { Button, Icon } from "@blueprintjs/core";
import {
  setContainerFormData,
  useContainerCreateMutation,
} from "@jscontainer/ui";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { get } from "lodash";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";

/* eslint-disable-next-line */
export interface ContainerNavButtonsProps {}

export function ContainerNavButtons(props: ContainerNavButtonsProps) {
  const history = useHistory();
  const dispatch = useDispatch();
  const containerFromRedux = useSelector(
    (state: any) => state.container.formData
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
        history.push(`/c/${container.slug}`);
      }
    }
  }, [createContainerData]);

  return (
    <>
      <Button
        disabled={notFoundContainer}
        onClick={async () => {
          createContainer(containerFromRedux);
        }}
      >
        <Icon icon="saved" />
        &nbsp;&nbsp; Save
      </Button>
      &nbsp; &nbsp;
      <Button intent="primary" disabled={notFoundContainer}>
        <Icon icon="play" />
        &nbsp; Run
      </Button>
      {notFoundContainer && (
        <>
          &nbsp; &nbsp;{" "}
          <a href="/">
            {" "}
            <Button>Create new container</Button>{" "}
          </a>
        </>
      )}
    </>
  );
}

export default ContainerNavButtons;
