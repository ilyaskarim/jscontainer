import { useSelector } from "react-redux";
import { AccountInformation } from "../../../components/Navbar/User";
import ContainerItem from "../../../components/UI/ContainerItem";
import { getCurrentUser } from "../../../Redux/user.reducer";
import Head from "next/head";

import { AppContext } from "next/app";
import { get } from "lodash";
import { useState, useEffect } from "react";
import { useRouter } from "next/dist/client/router";
import classNames from "classnames";
import ProfileSidebar from "../../../components/UI/ProfileSidebar";
import { findContainers } from "../../../server/api/functions";

export default function MyProfile(props: any) {
  const router = useRouter();
  const [page, setPage] = useState(+get(router, "query.page", "1"));
  const [limit, setLimit] = useState(20);
  const [containers, setContainers] = useState([]);
  const [containersCount, setContainersCount] = useState(0);
  const currentUser = useSelector(getCurrentUser);

  const lastPage = Math.ceil(containersCount / limit);

  const handle = () => {
    const rows = get(props, "containers.containers.rows", []);
    const count = get(props, "containers.containers.count", 0);
    if (rows && count) {
      setContainers(rows);
      setContainersCount(count);
    }
  };

  useEffect(() => {
    handle();
  }, [props]);

  return (
    <>
      <Head>
        <title>Ilyas Karim - JS Container</title>
      </Head>
      <div className="profile-section">
        <ProfileSidebar currentUser={currentUser} />
        <div className="profile-content">
          <div className="content-header">
            <h1>Container</h1>
          </div>
          <div className="content">
            <div className="row">
              {containers?.map((item: any, index: number) => {
                return (
                  <div className="col-lg-4 col-xl-4 " key={index}>
                    <ContainerItem data={item} />
                  </div>
                );
              })}
            </div>
          </div>
          <br />
          <nav aria-label="...">
            <ul className="pagination">
              <li
                className={classNames({
                  "page-item": true,
                  disabled: page <= 1,
                })}
              >
                <a
                  onClick={() => {
                    window.location.href = `${router.pathname}?page=${
                      page - 1
                    }`;
                  }}
                  className="page-link"
                  href="#"
                  tabIndex={-1}
                >
                  Previous
                </a>
              </li>
              <li
                className={classNames({
                  disabled: page > lastPage || page === lastPage,
                  "page-item": true,
                })}
              >
                <a
                  onClick={() => {
                    window.location.href = `${router.pathname}?page=${
                      page + 1
                    }`;
                  }}
                  className={classNames({
                    "page-link": true,
                  })}
                  href="#"
                >
                  Next
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </>
  );
}

MyProfile.getInitialProps = async (obj: AppContext) => {
  const page = get(obj, "ctx.req.query.page", 1);
  const limit = get(obj, "ctx.req.query.limit", 20);
  let offset = limit * (page - 1);
  const containers = await findContainers(
    {
      limit,
      offset,
    },
    get(obj, "ctx.req.sequelize", null)
  );

  return {
    containers: {
      containers,
      pagination: {
        limit,
        offset,
      },
    },
  };
};
