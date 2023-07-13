import Feed from "./Feed";

import { Link, useNavigate } from "react-router-dom";
import { RxCross2 } from "react-icons/rx";
import axios from "axios";

const DeleteAccount = () => {
  const nav = useNavigate();
  const deleteHandler = async () => {
    try {
      await axios.delete("http://localhost:3001/api/v1/deleteaccount", {
        headers: {
          "Content-Type": "application/json",
        },
        withCredentials: true,
      });
      nav("/login");
    } catch (err) {
      console.log(err.message);
    }
  };
  return (
    <>
      <Feed />
      <div className="main  blureffect h-[10000vh] w-[100vw] absolute top-0 left-0 bottom-0 right-0"></div>
      <div className="main   w-[100vw] fixed   top-0 left-0 right-0 bottom-0   flex  items-center justify-center">
        <div className="upload-box p-4   bg-[var(--postcolor)] w-[80vw]  md:w-[70vw] lg:w-[50vw]">
          <div className="head flex items-center justify-end">
            <Link to="/">
              <div className="cross bg-[var(--bgcolor)] p-4">
                <RxCross2 />
              </div>
            </Link>
          </div>
          <div className="body  w-[100%]  p-3 m-1">
            <div className="main w-[100%] h-[100%] flex flex-col gap-10  items-center justify-center">
              <h1 className="font-semibold text-xl">
                Do you really want to delete this account?
              </h1>
              <div className="flex gap-5">
                <Link to="/">
                  {" "}
                  <button className="p-2 px-3 bg-green-600">NO</button>
                </Link>
                <button onClick={deleteHandler} className="p-2 px-3 bg-red-600">
                  DELETE
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DeleteAccount;
