import Modal from "../../components/UI/InviteModal";
import InputField from "../../components/UI/InputField";
import { useState, useEffect } from "react";
import toast from "react-hot-toast";
import classNames from "classnames";
import axios from "../../utils/axios";
import ContentLoader from "react-content-loader";
import {
  addAsset,
  getcontainer,
  removeAsset,
} from "../../Redux/container.reducer";
import { useDispatch, useSelector } from "react-redux";
import Button from "../UI/Button";

let debounce: any = null;

const LoadingBar = () => (
  <div style={{ width: "100%" }}>
    <ContentLoader
      speed={2}
      viewBox={"0 0 400 160"}
      backgroundColor="#f3f3f3"
      foregroundColor="#ecebeb"
    >
      <circle cx="10" cy="20" r="8" />
      <rect x="25" y="15" rx="5" ry="5" width="220" height="10" />
      <circle cx="10" cy="50" r="8" />
      <rect x="25" y="45" rx="5" ry="5" width="220" height="10" />
      <circle cx="10" cy="80" r="8" />
      <rect x="25" y="75" rx="5" ry="5" width="220" height="10" />
      <circle cx="10" cy="110" r="8" />
      <rect x="25" y="105" rx="5" ry="5" width="220" height="10" />
    </ContentLoader>
  </div>
);

export default function () {
  const dispatch = useDispatch();
  const containerFromRedux = useSelector(getcontainer);
  const assets = containerFromRedux.assets;
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [mode, setMode] = useState("cdn");
  const [links, setLinks] = useState([]);
  const [query, setQuery] = useState("");

  const fetchLinks = () => {
    if (query && mode === "cdn") {
      setLoading(true);
      axios()
        .get(
          "https://api.cdnjs.com/libraries?fields=filename,version,name&limit=50&search=" +
            query
        )
        .then((resp: any) => {
          setLinks(resp.data.results);
        })
        .finally(() => {
          setLoading(false);
        });
    }
  };

  const submit = (url: string) => {
    if (
      url.endsWith(".css") ||
      url.endsWith(".js") ||
      url.includes("fonts.google")
    ) {
      dispatch(addAsset([url]));
      setOpen(false);
    } else {
      toast.error("The link should be a CSS or Javascript link.");
    }
  };

  useEffect(() => {
    clearTimeout(debounce);
    debounce = setTimeout(() => {
      fetchLinks();
    }, 300);
  }, [query]);

  const handlerSubmit = (e: any) => {
    e.preventDefault();
  };

  return (
    <>
      {assets.map((item: any, index: number) => (
        <div className="url-box">
          <a className="url-link" href="#">
            {item}
          </a>
          <div className="url_icons">
            <span
              onClick={() => {
                dispatch(removeAsset(item));
                toast.success("Asset removed", {
                  duration: 2000,
                });
              }}
            >
              <i className="fas fa-times"></i>
            </span>
            <span onClick={() => setOpen(true)}>
              <i className="fas fa-plus"></i>
            </span>
          </div>
        </div>
      ))}
      {assets && assets.length === 0 && (
        <Button
          onClick={() => setOpen(true)}
          className="btn btn-primary btn-xs"
        >
          Add Asset
        </Button>
      )}
      <Modal
        className="assets-modal invite-modal"
        isOpen={open}
        onRequestClose={() => setOpen(false)}
        style={{
          content: {
            maxHeight: "500px",
            maxWidth: "766px",
            overflow: "hidden",
          },
        }}
      >
        <button className="closeBtn" onClick={() => setOpen(false)}>
          <i className="fas fa-times"></i>
        </button>
        <div className="modal-header pt-0 pl-0 border-0">
          <a
            href="#"
            onClick={() => setMode("cdn")}
            className={classNames({
              "mr-3": true,
              active: mode === "cdn",
            })}
          >
            CDN JS
          </a>
          <a
            href="#"
            onClick={() => setMode("link")}
            className={classNames({
              "mr-3": true,
              active: mode === "link",
            })}
          >
            Link
          </a>
        </div>
        <div className="assets-content invite-content">
          <form action="" onSubmit={handlerSubmit}>
            <InputField
              onChange={(e: KeyboardEvent) => {
                setQuery((e.target as HTMLInputElement).value);
              }}
              onKeyDown={(e: KeyboardEvent) => {
                if (e.code === "Enter" && mode === "link") {
                  submit((e.target as HTMLInputElement).value);
                }
              }}
              placeholder={
                mode === "link"
                  ? "Paste link and press enter"
                  : "Search a library from cdnjs"
              }
              className=""
            />
          </form>
          <p
            className={classNames({
              "mb-3": true,
              tip: true,
              hide: mode === "link",
            })}
          >
            Tip: To directly insert, enter url and press enter
          </p>
          {loading && <LoadingBar></LoadingBar>}
          <div
            className={classNames({
              "cdn-links": true,
              hide: mode === "link",
            })}
          >
            {links.map((item: any) => {
              return (
                <div
                  className="cdn-link mb-2"
                  onClick={(e) => {
                    e.preventDefault();
                    submit(item.latest);
                  }}
                >
                  <a title={item.latest} href="">
                    {item.filename}
                  </a>{" "}
                  <span>
                    {item.name} @ {item.version}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </Modal>
    </>
  );
}
