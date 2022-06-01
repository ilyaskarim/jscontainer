import React, { useState } from 'react';
import styles from './table-component-styles.module.scss';
import { Button } from '@blueprintjs/core';
import { iContainer } from '../../..';

/* eslint-disable-next-line */
export interface TableComponentProps {
  tableData?: any[];
  columns?: {
    key: string;
    title: string;
    render?: (item: iContainer) => React.ReactNode;
  }[];
  onDelete?: Function;
}

export function TableComponent(props: TableComponentProps) {
  const [row, setRow] = useState<number>(4);
  const { tableData, columns } = props;
  return (
    <div className={styles.tableDiv}>
      <table className="w-full border-collapse">
        <thead className="bg-tertiary text-gray">
          <tr>
            {columns.map((item, index) => {
              return <th className="py-3 px-px text-left" key={index}>{item.title}</th>;
            })}
            <th>Actions</th>
          </tr>
        </thead>
        <tbody className={styles.tbody}>
          {tableData?.length > 0 ? (
            tableData.map((item, index) => {
              return (
                <tr key={index}>
                  {columns.map((column, index) => {
                    return (
                      <td key={index} className="py-4 px-0 text-gray">
                        {column.render ? column.render(item) : item[column.key]}{' '}
                      </td>
                    );
                  })}
                  <td>
                    <Button>Delete</Button>
                  </td>
                </tr>
              );
            })
          ) : (
            <tr>
              <td rowSpan={50}>No Data</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}

export default TableComponent;
