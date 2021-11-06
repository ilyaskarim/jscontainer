import "./container-assets.module.scss";
import { LibrarySelect, LibraryList } from "../../index";

/* eslint-disable-next-line */
export interface ContainerAssetsProps {
  onChange?: Function;
}

export function ContainerAssets(props: ContainerAssetsProps) {
  return (
    <div>
      <LibrarySelect></LibrarySelect>
      <LibraryList></LibraryList>
    </div>
  );
}

export default ContainerAssets;
