import axios from "axios";
import moment from "moment";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Pagination from "../components/Padgination";
import { baseURL } from "../utils/api";

const Notification = () => {
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const [page, setPage] = useState(1);
  const [perPage, setPerPage] = useState(10);

  const [notifiacitons, setnotifiacitons] = useState([]);
  useEffect(() => {
    getUserNotifications();
  }, [page, perPage]);
  const getUserNotifications = async () => {
    try {
      const res = await axios({
        url: `${baseURL}/notification/usernotifications`,
        method: "GET",
        params: {
          page,
          perPage
        },
        headers: {
          Authorization: `Bearer ${userInfo.token}`
        }
      });

      console.log("res", res);
      setnotifiacitons(res.data?.notification);
    } catch (err) {
      console.log("err", err);
    }
  };
  return (
    <>
      <section id="notifications">
        <div className="container-fluid">
          {/* notifications */}
          <div className="row my-md-5">
            <div className="col-12 col-md-12 col-lg-10 mx-auto mt-md-5">
              {notifiacitons?.docs?.length > 0 &&
                notifiacitons?.docs?.map((not) => (
                  <div className="noti-inner-cards mb-5">
                    <div className="card">
                      <div className="noti-content p-3">
                        <div className="row">
                          <div className="col-sm-12">
                            <div className="media">
                              <i
                                className="fa fa-bell red"
                                aria-hidden="true"
                              />
                              <div className="media-body ml-3">
                                <p>{not?.body}</p>
                                <div className="meta mt-2">
                                  <time className="time-meta" dateTime>
                                    {moment(not?.createdAt).fromNow()}{" "}
                                  </time>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
            </div>
          </div>
          {/* pagination */}
          <div
                  style={{
                    width: "100%",
                    height: 100,
                    display: "flex",
                    justifyContent: "center"
                  }}
                >
          {notifiacitons?.docs?.length > 0 && (
            <Pagination
              totalDocs={notifiacitons?.totalDocs}
              totalPages={notifiacitons?.totalPages}
              currentPage={notifiacitons?.page}
              setPage={setPage}
              hasNextPage={notifiacitons?.hasNextPage}
              hasPrevPage={notifiacitons?.hasPrevPage}
            />
          )}</div>
        </div>
      </section>
    </>
  );
};

export default Notification;
