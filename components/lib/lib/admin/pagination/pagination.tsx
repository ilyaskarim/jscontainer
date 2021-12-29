import { Button, Icon } from '@blueprintjs/core';
import React, { useState } from 'react';
import styles from './paginations-styles.module.scss';

/* eslint-disable-next-line */
export interface PaginationProps {
  handlePagination?: (buttonClick: string) => void;
  data?: any[];
  renderData?: any[];
  pageNumber?: number;
}

export function Pagination(props: PaginationProps) {
  const { handlePagination, data, renderData, pageNumber } = props;

  return (
    <div className={styles.paginationContainer}>
      <p>
        Showing {renderData?.length} items out of {data?.length}{' '}
      </p>
      <div className={styles.paginationButtonStyles}>
        <Button
          onClick={() => handlePagination('decrease')}
          disabled={pageNumber === 1 ? true : false}
        >
          <Icon icon='less-than'></Icon>
        </Button>
        <Button
          onClick={() => handlePagination('increase')}
          disabled={pageNumber === Math.ceil(data?.length / 5) ? true : false}
        >
          <Icon icon='greater-than'></Icon>
        </Button>
      </div>
    </div>
  );
}

export default Pagination;
