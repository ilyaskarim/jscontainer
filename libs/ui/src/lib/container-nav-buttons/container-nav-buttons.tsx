import "./container-nav-buttons.module.less";
import { Button, Icon } from "@blueprintjs/core";
import { useContainerCreateMutation } from "@jscontainer/ui";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { get } from "lodash";
import { useHistory } from "react-router-dom";

/* eslint-disable-next-line */
export interface ContainerNavButtonsProps {}

export function ContainerNavButtons(props: ContainerNavButtonsProps) {
  const history = useHistory();
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
      const slug = get(
        createContainerData,
        "data.data.createContainer.returning[0].slug",
        null
      );
      if (slug) {
        history.push(`/c/${slug}`);
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
