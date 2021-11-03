import { useState, useEffect } from "react";
import "./library-select.module.less";
import "@blueprintjs/select/lib/css/blueprint-select.css";
import { Select } from "@blueprintjs/select";
import { Button, MenuItem } from "@blueprintjs/core";

/* eslint-disable-next-line */
export interface LibrarySelectProps {}

let timeout: any;

export function LibrarySelect(props: LibrarySelectProps) {
  const [searchInput, setSearchInput] = useState("");

  const fetchLibraries = () => {};

  useEffect(() => {
    if (searchInput) {
      console.log("search now");
    }
  }, [searchInput]);

  return (
    <div>
      <Select
        items={[{ id: 12, text: "wo" }]}
        itemRenderer={(item) => {
          return <>{item.text}</>;
        }}
        inputProps={{
          placeholder: "Filter from CDN",
        }}
        onQueryChange={(e) => {
          clearTimeout(timeout);
          timeout = setTimeout(() => {
            setSearchInput(e);
          }, 600);
        }}
        popoverProps={{
          usePortal: true,
        }}
        noResults={<MenuItem disabled={true} text="No results." />}
        onItemSelect={() => {}}
      >
        <Button
          text="Add a new library"
          rightIcon="double-caret-vertical"
          style={{ width: "100%" }}
        />
      </Select>
      &nbsp; &nbsp;
      <Select
        inputProps={{
          placeholder: "Search from local presets",
        }}
        items={[
          { id: 12, text: "wo" },
          { id: 12, text: "wo" },
          { id: 12, text: "wo" },
          { id: 12, text: "wo" },
          { id: 12, text: "wo" },
        ]}
        itemRenderer={(item) => {
          return <>{item.text}</>;
        }}
        onQueryChange={(e) => {
          clearTimeout(timeout);
          timeout = setTimeout(() => {
            setSearchInput(e);
          }, 600);
        }}
        popoverProps={{
          usePortal: true,
        }}
        noResults={<MenuItem disabled={true} text="No results." />}
        onItemSelect={() => {}}
      >
        <Button
          text="Add a library from presets"
          rightIcon="double-caret-vertical"
          style={{ width: "100%" }}
        />
      </Select>
    </div>
  );
}

export default LibrarySelect;
