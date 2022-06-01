import React, { useEffect, useState } from "react";
import { useQuery } from "react-query";
import { useSelector } from "react-redux";
import {
  TableComponent,
  Pagination,
  iContainer,
  PaginationProperties,
} from "../../../index";
import Moment from "moment";
import { fetchContainers } from "../../graphql/graphql";

/* eslint-disable-next-line */
export interface AdminContainersListProps {}

export function AdminContainersList(props: AdminContainersListProps) {
  const theme = useSelector((state: any) => state.container.theme);

  const [pagination, setPagination] = useState<PaginationProperties>({
    page: 1,
  });
  const [data, setData] = useState<iContainer[]>([]);
  const { data: containersListQueryData, isLoading } = useQuery(
    ["fetchContainers", pagination],
    fetchContainers
  );

  useEffect(() => {
    if (!isLoading) {
      setData(containersListQueryData?.data?.data?.listContainer?.list ?? []);
    }
  }, [containersListQueryData]);

  return (
    <div
      className="p-5 h-screen bg-secondary"
    >
      <h1>Containers</h1>
      <TableComponent
        columns={[
          { title: "Title", key: "title" },
          { title: "Description", key: "description" },
          {
            title: "URL",
            key: "",
            render: (container) => {
              const url = window.location.origin + "/c/" + container.slug;
              return (
                <a href={url} target="_blank">
                  {url}
                </a>
              );
            },
          },
          {
            title: "Created At",
            key: "createdAt",
            render: (container) => {
              return <p>{Moment(+container.createdAt).fromNow()}</p>;
            },
          },
        ]}
        tableData={data}
      />
      <Pagination
        handlePagination={(nav) => {
          switch (nav) {
            case "increase":
              console.log(pagination);
              setPagination({
                page: pagination.page + 1,
              });
              break;

            case "decrease":
              setPagination({
                page: pagination.page - 1,
              });
              break;

            default:
              break;
          }
        }}
        paginationInformation={pagination}
      />
    </div>
  );
}

export default AdminContainersList;
