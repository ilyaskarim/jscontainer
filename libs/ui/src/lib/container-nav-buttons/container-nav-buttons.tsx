import "./container-nav-buttons.module.less";
import { Button, Icon } from "@blueprintjs/core";
import { useContainerCreateMutation } from "@jscontainer/ui";
import { useSelector } from "react-redux";

/* eslint-disable-next-line */
export interface ContainerNavButtonsProps {}

export function ContainerNavButtons(props: ContainerNavButtonsProps) {
  const containerFromRedux = useSelector(
    (state: any) => state.container.formData
  );

  const { mutate: createContainer } = useContainerCreateMutation();

  return (
    <>
      <Button
        onClick={() => {
          createContainer(containerFromRedux);
        }}
      >
        <Icon icon="saved" />
        &nbsp;&nbsp; Save
      </Button>
      &nbsp; &nbsp;
      <Button intent="primary">
        <Icon icon="play" />
        &nbsp; Run
      </Button>
    </>
  );
}

export default ContainerNavButtons;
