import React from "react";
import { Button, Icon } from "@blueprintjs/core";
import styles from "./paginations-styles.module.scss";
import { PaginationProperties } from "../../../index";

/* eslint-disable-next-line */
export interface PaginationProps {
  handlePagination?: (nav: string) => void;
  paginationInformation: PaginationProperties;
}

export function Pagination(props: PaginationProps) {
  const { handlePagination, paginationInformation } = props;

  return (
    <div className="flex justify-between mt-10 align-center">
      <p>Showing 20 items out of {paginationInformation.total}</p>
      <div className="w-2 flex justify-evenly">
        <Button
          className="bg-transparent"
          onClick={() => handlePagination("decrease")}
          disabled={paginationInformation.page === 1}
        >
          <Icon icon="less-than"></Icon>
        </Button>
        <Button
          onClick={() => handlePagination("increase")}
          disabled={paginationInformation.page === paginationInformation.pages}
        >
          <Icon icon="greater-than"></Icon>
        </Button>
      </div>
    </div>
  );
}

export default Pagination;
