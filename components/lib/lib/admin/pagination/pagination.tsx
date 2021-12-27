import styles from "./paginations-styles.module.scss";

/* eslint-disable-next-line */
export interface PaginationProps {}

export function Pagination(props: PaginationProps) {
  return <div className={styles.paginationContainer}></div>;
}

export default Pagination;
