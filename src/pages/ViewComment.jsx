import Feed from "./Feed";
import UserStrips from "../components/UserStrips";
import { RxCross2 } from "react-icons/rx";

import { Link } from "react-router-dom";
const ViewComment = () => {
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
            <h1 className="text-center font-semibold text-xl ">
              Total 3k people commented
            </h1>
            <div className="strips p-2">
              <UserStrips
                message={true}
                pagination={true}
                connection={false}
                accept={false}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ViewComment;
