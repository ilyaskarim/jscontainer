import { Button, Card, InputGroup, Icon } from "@blueprintjs/core";
import { useSelector, useDispatch } from "react-redux";
import {
  arrayMove,
  setChangedFields,
  setContainerFormData,
  TrimLargeSentences,
} from "../../index";
import toast from "react-hot-toast";

/* eslint-disable-next-line */
export interface LibraryListProps {}

export function LibraryList(props: LibraryListProps) {
  const dispatch = useDispatch();
  const containerFromRedux = useSelector(
    (state: any) => state.container.formData
  );

  const list =
    typeof containerFromRedux.assets === "object"
      ? containerFromRedux.assets
      : [...JSON.parse(containerFromRedux.assets)] ?? [];

  const deleteLink = (index: number) => {
    var nList = [...list];

    nList.splice(index, 1);

    dispatch(setChangedFields("assets"));
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
        <Card className="p-2 text-grayisht text-sm">No assets added</Card>
      )}
      {list.map((link: string, index: number) => {
        return (
          <Card key={index} className="p-2 flex">
            <Button
              className="mr-1 text-center leading-1"
              small
              onClick={() => {
                window.navigator.clipboard.writeText(link);
                toast.success("Link copied to clipboard");
              }}
            >
              <Icon size={10} icon="duplicate"></Icon>
            </Button>
            <span className="inline-block mt-1">
              <TrimLargeSentences text={link}></TrimLargeSentences>
            </span>
            <div className="ml-auto">
              <Button
                className="ml-1"
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
      <Card className="w-100">
        <InputGroup
          onKeyPress={(e) => {
            if (e.key === "Enter") {
              const target = e.target as HTMLInputElement;

              if (
                target.value.startsWith("http://") ||
                target.value.startsWith("https://")
              ) {
                if (!target.value) {
                  return;
                }
                if (!list.includes(target.value)) {
                  dispatch(setChangedFields("assets"));
                  dispatch(
                    setContainerFormData({
                      assets: JSON.stringify([...list, target.value]),
                    })
                  );
                  target.value = "";
                } else {
                  toast.error("Library already added.", {
                    position: "bottom-center",
                  });
                }
              } else {
                toast.error("Invalid URL!", {
                  position: "bottom-center",
                });
              }
            }
          }}
          placeholder="Got a link? Add here and hit Enter."
        />
      </Card>
    </div>
  );
}

export default LibraryList;
