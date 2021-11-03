import styles from "./container-settings.module.less";
import { Tab, Tabs, Checkbox, Icon } from "@blueprintjs/core";
import { useState } from "react";
import { ContainerAssets, setContainerFormData } from "@jscontainer/ui";
import { useDispatch } from "react-redux";

/* eslint-disable-next-line */
export interface ContainerSettingsProps {}

export function ContainerSettings(props: ContainerSettingsProps) {
  const [viewTab, setViewTab] = useState("settings");
  const dispatch = useDispatch();
  return (
    <div className={styles.containerSettings}>
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
              <Checkbox
                onChange={(e) => {
                  dispatch(
                    setContainerFormData({
                      html_5_snippet: (e.target as any).checked,
                    })
                  );
                }}
              >
                Include HTML 5 Snippet
              </Checkbox>
            </div>
          }
        />
      </Tabs>
    </div>
  );
}

export default ContainerSettings;
