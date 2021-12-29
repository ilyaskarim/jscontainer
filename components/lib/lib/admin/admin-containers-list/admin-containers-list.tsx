import React, { useEffect, useState } from 'react';
import styles from './admin-containers-list.module.scss';
import TableComponent from '../tableComponent/table-component';
import classnames from 'classnames';
import { useSelector } from 'react-redux';
import { useContainersListQuery } from '../../..';
import Pagination from '../pagination/pagination';

/* eslint-disable-next-line */
export interface AdminContainersListProps {}

const pageData = (data: any[], pageNumber: number) => {
  return data?.slice((pageNumber - 1) * 5, pageNumber * 5);
};

export function AdminContainersList(props: AdminContainersListProps) {
  const theme = useSelector((state: any) => state.container.theme);
  const { data: containersListQueryData, isLoading } = useContainersListQuery();
  const [data, setData] = useState();
  const [renderData, setRenderData] = useState<any>();
  const [pageNumber, setPageNumber] = useState<number>(1);

  useEffect(() => {
    if (!isLoading) {
      setData(containersListQueryData?.data?.data?.listContainer?.list ?? []);
      setRenderData(pageData(data, pageNumber));
      setPageNumber(1);
    }
  }, [containersListQueryData]);

  useEffect(() => {
    setRenderData(pageData(data, pageNumber));
  }, [pageNumber]);

  const handlePagination = (buttonClick: string) => {
    if (buttonClick === 'decrease') {
      return setPageNumber(pageNumber - 1);
    } else if (buttonClick === 'increase') {
      return setPageNumber(pageNumber + 1);
    }
  };

  return (
    <div
      className={classnames({
        [styles.editor]: true,
        editor: true,
        [styles.dark]: theme === 'dark',
      })}
    >
      <h1 className={styles.header}>Containers</h1>
      <TableComponent
        columns={[
          { title: 'Title' },
          { title: 'Description' },
          { title: 'URL' },
          { title: 'Created At' },
          { title: 'Actions(Delete)' },
        ]}
        tableData={renderData}
      />
      <Pagination
        handlePagination={handlePagination}
        data={data}
        renderData={renderData}
        pageNumber={pageNumber}
      />
    </div>
  );
}

export default AdminContainersList;
