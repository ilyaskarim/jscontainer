import styles from "./library-list.module.less";
import { Button, Card } from "@blueprintjs/core";
import { useSelector, useDispatch } from "react-redux";
import { arrayMove, setContainerFormData } from "@jscontainer/ui";

/* eslint-disable-next-line */
export interface LibraryListProps {}

export function LibraryList(props: LibraryListProps) {
  const dispatch = useDispatch();
  const containerFromRedux = useSelector(
    (state: any) => state.container.formData
  );

  const list = [...JSON.parse(containerFromRedux.assets)] ?? [];

  const deleteLink = (index: number) => {
    var nList = [...list];

    nList.splice(index, 1);

    dispatch(
      setContainerFormData({
        assets: JSON.stringify(nList),
      })
    );
  };

  return (
    <div>
      <br />
      {list.length === 0 && (
        <Card className={styles.noAssetsMessage}>No assets added</Card>
      )}
      {list.map((link: string, index: number) => {
        return (
          <Card key={index} className={styles.libraryItem}>
            <label>{link}</label>
            <div className={styles.actions}>
              <Button
                disabled={index === list.length - 1}
                icon="arrow-down"
                onClick={() => {
                  dispatch(
                    setContainerFormData({
                      assets: JSON.stringify(
                        arrayMove([...list], index, index + 1)
                      ),
                    })
                  );
                }}
                small={true}
              ></Button>
              <Button
                disabled={index === 0}
                onClick={() => {
                  dispatch(
                    setContainerFormData({
                      assets: JSON.stringify(
                        arrayMove([...list], index, index - 1)
                      ),
                    })
                  );
                }}
                icon="arrow-up"
                small={true}
              ></Button>
              <Button
                icon="trash"
                onClick={() => {
                  deleteLink(index);
                }}
                small={true}
                intent="danger"
              />
            </div>
          </Card>
        );
      })}
    </div>
  );
}

export default LibraryList;
