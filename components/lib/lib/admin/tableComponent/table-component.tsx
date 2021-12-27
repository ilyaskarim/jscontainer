import React, { useState } from "react";
import styles from "./table-component-styles.module.scss";
import Pagination from "../pagination/pagination";
import { Button } from "@blueprintjs/core";

/* eslint-disable-next-line */
export interface TableComponentProps {
  tableData?: any[];
}

export function TableComponent(props: TableComponentProps) {
  const [row, setRow] = useState<number>(4);
  const { tableData } = props;
  const columns = [
    "Title",
    "Description",
    "URL",
    "Created At",
    "Actions(Delete)",
  ];
  return (
    <div>
      <table className={styles.tableStyles}>
        <thead>
          <tr className={styles.trStyles}>
            {columns.map((item, index) => {
              return (
                <th key={index} className={styles.thStyles}>
                  {item}
                </th>
              );
            })}
          </tr>
        </thead>
        <tbody>
          {tableData?.length > 0 ? (
            tableData.map((items, index) => {
              if (tableData.length >= row) {
                return (
                  <tr key={index} className={styles.tableContent}>
                    <td>{items?.title}</td>
                    <td>{items?.description}</td>
                    <td>{items?.url}</td>
                    <td>{items?.createdAt}</td>
                    <td><Button>{items?.action}</Button></td>
                  </tr>
                );
              }
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
      <div>
        <p>
          showing {tableData?.length} items out of {tableData?.length}
        </p>
        <Pagination />
      </div>
    </div>
  );
}

export default TableComponent;
