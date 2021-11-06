import "./user-dropdown.module.scss";
import { Menu, MenuItem, Position } from "@blueprintjs/core";
import { Popover2 } from "@blueprintjs/popover2";

/* eslint-disable-next-line */
export interface UserDropdownProps {
  children: React.ReactNode;
}

export function UserDropdown(props: UserDropdownProps) {
  return (
    <Popover2
      content={
        <Menu>
          {" "}
          <MenuItem icon="log-in" text="Login" />
        </Menu>
      }
      position={Position.BOTTOM}
    >
      {props.children}
    </Popover2>
  );
}

export default UserDropdown;
