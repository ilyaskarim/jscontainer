import React, { useEffect, useState } from "react";
import styles from "./admin-containers-list.module.scss";
import TableComponent from "../tableComponent/table-component";
import classnames from "classnames";
import { useSelector } from "react-redux";
import { useContainersListQuery } from "../../..";

/* eslint-disable-next-line */
export interface AdminContainersListProps {}

export function AdminContainersList(props: AdminContainersListProps) {
  const theme = useSelector((state: any) => state.container.theme);
  const { data: containersListQueryData } = useContainersListQuery();
  const [data, setData] = useState();

  useEffect(() => {
    setData(containersListQueryData?.data?.data?.listContainer?.list ?? []);
  }, [containersListQueryData]);

  return (
    <div
      className={classnames({
        [styles.editor]: true,
        editor: true,
        [styles.dark]: theme === "dark",
      })}
    >
      <h1 className={styles.header}>Containers</h1>
      <TableComponent
        columns={[
          { title: "Title" },
          { title: "Description" },
          { title: "URL" },
          { title: "Created At" },
          { title: "Actions(Delete)" },
        ]}
        tableData={data}
      />
    </div>
  );
}

export default AdminContainersList;
