import { useState, useEffect } from "react";
import styles from "./library-select.module.scss";
import "@blueprintjs/select/lib/css/blueprint-select.css";
import "@blueprintjs/popover2/lib/css/blueprint-popover2.css";
import { Select } from "@blueprintjs/select";
import { Button, MenuItem, Position } from "@blueprintjs/core";
import { Tooltip2 } from "@blueprintjs/popover2";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import {
  predefinedAssets,
  setChangedFields,
  setContainerFormData,
} from "../../index";
import toast from "react-hot-toast";

/* eslint-disable-next-line */
export interface LibrarySelectProps {}

let timeout: any;

export function LibrarySelect(props: LibrarySelectProps) {
  const [searchInput, setSearchInput] = useState("");
  const [libraryOptions, setLibraryOptions] = useState([]);
  const dispatch = useDispatch();
  const containerFromRedux = useSelector(
    (state: any) => state.container.formData
  );

  const list: Array<string> =
    typeof containerFromRedux.assets === "object"
      ? containerFromRedux.assets
      : [...JSON.parse(containerFromRedux.assets)] ?? [];

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
            <div
              className={styles.librarySelectItem}
              onClick={() => {
                if (!list.includes(item.latest)) {
                  dispatch(setChangedFields("assets"));
                  dispatch(
                    setContainerFormData({
                      assets: JSON.stringify([...list, item.latest]),
                    })
                  );
                } else {
                  toast.error("Library already added.", {
                    position: "bottom-center",
                  });
                }
              }}
            >
              <Tooltip2
                content={item.latest}
                position={Position.BOTTOM}
                usePortal={true}
              >
                <div>
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
        itemRenderer={(item) => {
          return <div className={styles.librarySelectItem}>{item.label}</div>;
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
