import { Tab, Tabs, Checkbox } from "@blueprintjs/core";
import { useState } from "react";
import {
  ContainerAssets,
  setChangedFields,
  setContainerFormData,
} from "./../../index";
import { useDispatch, useSelector } from "react-redux";

/* eslint-disable-next-line */
export interface ContainerSettingsProps {}

export function ContainerSettings(props: ContainerSettingsProps) {
  const [viewTab, setViewTab] = useState("assets");
  const containerFromRedux = useSelector(
    (state: any) => state.container.formData
  );
  const dispatch = useDispatch();
  return (
    <div className="py-1 px-5">
      <Tabs
        id="TabsExample"
        selectedTabId={viewTab}
        onChange={(tab: string) => setViewTab(tab)}
      >
        <Tab
          id="assets"
          title="Assets"
          panel={<ContainerAssets></ContainerAssets>}
        />
        <Tab
          id="settings"
          title="Settings"
          panel={
            <div>
              <div>
                <Checkbox
                  value={containerFromRedux.html_snippet}
                  defaultChecked={containerFromRedux.html_snippet}
                  onChange={(e) => {
                    dispatch(setChangedFields("assets"));
                    dispatch(
                      setContainerFormData({
                        html_snippet: (e.target as any).checked ? 1 : 0,
                      })
                    );
                  }}
                >
                  Include HTML 5 Snippet
                </Checkbox>
              </div>
              <div>
                <Checkbox
                  value={containerFromRedux.typescript}
                  defaultChecked={containerFromRedux.typescript}
                  onChange={(e) => {
                    dispatch(setChangedFields("typescript"));
                    dispatch(
                      setContainerFormData({
                        typescript: (e.target as any).checked ? 1 : 0,
                      })
                    );
                  }}
                >
                  Typescript
                </Checkbox>
              </div>
            </div>
          }
        />
      </Tabs>
    </div>
  );
}

export default ContainerSettings;
