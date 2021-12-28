import React, { useState } from "react";
import styles from "./table-component-styles.module.scss";
import Pagination from "../pagination/pagination";
import { Button } from "@blueprintjs/core";

/* eslint-disable-next-line */
export interface TableComponentProps {
  tableData?: any[];
  columns?: {
    key?: string;
    title: string;
  }[];
  onDelete?: Function;
}

export function TableComponent(props: TableComponentProps) {
  const [row, setRow] = useState<number>(4);
  const { tableData, columns } = props;
  return (
    <div className={styles.tableDiv}>
      <table className={styles.tableStyles}>
        <thead>
          <tr className={styles.trStyles}>
            {columns.map((item, index) => {
              return (
                <th key={index} className={styles.thStyles}>
                  {item.title}
                </th>
              );
            })}
          </tr>
        </thead>
        <tbody>
          {tableData?.length > 0 ? (
            tableData.map((items, index) => {
              return (
                <tr key={index} className={styles.tableContent}>
                  <td>{items?.title}</td>
                  <td>{items?.description}</td>
                  <td>{items?.url}</td>
                  <td>{items?.createdAt}</td>
                  <td>
                    <Button>Delete</Button>
                  </td>
                </tr>
              );
            })
          ) : (
            <tr>
              <td></td>
              <td></td>
              <td></td>
              <td>No Data</td>
              <td></td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}

export default TableComponent;
