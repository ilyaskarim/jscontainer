import styles from "./container-info.module.scss";
import { InputGroup, TextArea } from "@blueprintjs/core";
import { useDispatch, useSelector } from "react-redux";
import { setChangedFields, setContainerFormData } from "../..";

/* eslint-disable-next-line */
export interface ContainerInfoProps {}

export function ContainerInfo(props: ContainerInfoProps) {
  const dispatch = useDispatch();

  const containerFromRedux = useSelector(
    (state: any) => state.container.formData
  );

  return (
    <div className={styles.containerInfo}>
      <InputGroup
        value={containerFromRedux.title}
        onChange={(e) => {
          dispatch(setChangedFields("title"));
          dispatch(
            setContainerFormData({
              title: e.target.value,
            })
          );
        }}
        placeholder="Untitled container"
      ></InputGroup>

      <br />
      <TextArea
        value={containerFromRedux.description}
        onChange={(e) => {
          dispatch(setChangedFields("description"));
          dispatch(
            setContainerFormData({
              description: e.target.value,
            })
          );
        }}
        placeholder="Description"
      ></TextArea>
    </div>
  );
}

export default ContainerInfo;
