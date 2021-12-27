import React, { useEffect } from "react";
import styles from "./admin-containers-list.module.scss";
import TableComponent from "../tableComponent/table-component";
import classnames from "classnames";
import { useSelector } from "react-redux";
// import axios from "axios";
// import { containerFields } from "../../../index";

/* eslint-disable-next-line */
export interface AdminContainersListProps {}

export function AdminContainersList(props: AdminContainersListProps) {
  const theme = useSelector((state: any) => state.container.theme);

  // useEffect(()=>{
  //   const getContainerList = async ()=> {
  //     await axios.get(`http://localhost:3000/graphql` , {
  //       //@ts-ignore
  //       query : containerFields
  //     })
  //   }
  //   console.log({getContainerList})
  // })

  const data = [
    {
      title: "item1",
      description: "1",
      url: "somewhere",
      createdAt: "12:30",
      action: "some functions",
    },
    {
      title: "item1",
      description: "1",
      url: "somewhere",
      createdAt: "12:30",
      action: "some functions",
    },
    {
      title: "item1",
      description: "1",
      url: "somewhere",
      createdAt: "12:30",
      action: "some functions",
    },
    {
      title: "item1",
      description: "1",
      url: "somewhere",
      createdAt: "12:30",
      action: "some functions",
    },
    {
      title: "item1",
      description: "1",
      url: "somewhere",
      createdAt: "12:30",
      action: "some functions",
    },
  ];

  return (
    <div
      className={classnames({
        [styles.editor]: true,
        editor: true,
        [styles.dark]: theme === "dark",
      })}
    >
      <h1 className={styles.header}>Containers</h1>
      <TableComponent tableData={data} />
    </div>
  );
}

export default AdminContainersList;
