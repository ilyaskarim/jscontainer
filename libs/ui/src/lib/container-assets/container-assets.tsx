import "./container-assets.module.less";
import { LibrarySelect, LibraryList } from "@jscontainer/ui";
import { Menu, MenuItem } from "@blueprintjs/core";

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
