import React, { useEffect, useState } from "react";
import styles from "./admin-containers-list.module.scss";
import { TableComponent, Pagination } from "../../..";
import classnames from "classnames";
import { useSelector } from "react-redux";
import { iContainer } from "../../../../../types/container";
import { useContainersListQuery } from "../../..";

/* eslint-disable-next-line */
export interface AdminContainersListProps {}

export function AdminContainersList(props: AdminContainersListProps) {
  const theme = useSelector((state: any) => state.container.theme);
  const { data: containersListQueryData, isLoading } = useContainersListQuery();
  const [data, setData] = useState();

  useEffect(() => {
    if (!isLoading) {
      setData(containersListQueryData?.data?.data?.listContainer?.list ?? []);
    }
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
      <Pagination
        // handlePagination={handlePagination}
        data={data}
      />
    </div>
  );
}

export default AdminContainersList;
