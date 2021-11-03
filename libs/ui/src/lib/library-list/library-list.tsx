import styles from "./library-list.module.less";
import { Button, Card, Elevation } from "@blueprintjs/core";

/* eslint-disable-next-line */
export interface LibraryListProps {}

export function LibraryList(props: LibraryListProps) {
  return (
    <div>
      <br />
      <Card className={styles.libraryItem}>
        <label>froala @v4.12.3</label>

        <div className={styles.actions}>
          <Button icon="arrow-down" small={true}></Button>
          <Button icon="arrow-up" small={true}></Button>
          <Button icon="trash" small={true} intent="danger" />
        </div>
      </Card>
    </div>
  );
}

export default LibraryList;
