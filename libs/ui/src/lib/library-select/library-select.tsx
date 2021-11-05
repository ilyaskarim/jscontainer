import { useState, useEffect } from "react";
import styles from "./library-select.module.less";
import "@blueprintjs/select/lib/css/blueprint-select.css";
import "@blueprintjs/popover2/lib/css/blueprint-popover2.css";
import { Select } from "@blueprintjs/select";
import { Button, MenuItem, Position } from "@blueprintjs/core";
import { Tooltip2 } from "@blueprintjs/popover2";
import axios from "axios";
import { useDispatch } from "react-redux";
import { predefinedAssets } from "@jscontainer/ui";

/* eslint-disable-next-line */
export interface LibrarySelectProps {}

let timeout: any;

export function LibrarySelect(props: LibrarySelectProps) {
  const [searchInput, setSearchInput] = useState("");
  const [libraryOptions, setLibraryOptions] = useState([]);
  const dispatch = useDispatch();

  const fetchLibraries = (term: string) => {
    axios
      .get("https://api.cdnjs.com/libraries", {
        params: {
          search: term,
          limit: 15,
          fields: ["filename", "version"].join(","),
        },
      })
      .then((resp) => {
        setLibraryOptions(resp.data.results);
      });
  };

  useEffect(() => {
    if (searchInput) {
      fetchLibraries(searchInput);
    }
  }, [searchInput]);

  return (
    <div>
      <Select
        items={libraryOptions}
        itemRenderer={(item: any) => {
          return (
            <div className={styles.librarySelectItem}>
              <Tooltip2
                content={item.latest}
                position={Position.BOTTOM}
                usePortal={true}
              >
                <div title={item.latest}>
                  <strong>{item.version}</strong>
                  &nbsp; {item.filename}
                </div>
              </Tooltip2>
            </div>
          );
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
        items={predefinedAssets}
        itemRenderer={(item: string) => {
          return <div className={styles.librarySelectItem}>{item}</div>;
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
