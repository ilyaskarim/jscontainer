import styles from "./container-settings.module.less";
import { Tab, Tabs, Checkbox, Icon } from "@blueprintjs/core";
import { useState } from "react";
import { ContainerAssets } from "@jscontainer/ui";

/* eslint-disable-next-line */
export interface ContainerSettingsProps {}

export function ContainerSettings(props: ContainerSettingsProps) {
  const [viewTab, setViewTab] = useState("settings");
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
              <Checkbox checked={true} onChange={() => {}}>
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
