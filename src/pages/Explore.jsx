import Feed from "./Feed";
import { Link } from "react-router-dom";
import UserStrips from "../components/UserStrips";
import { RxCross2 } from "react-icons/rx";
const Explore = () => {
  return (
    <>
      <Feed />
      <div className="main   blureffect h-[10000vh] w-[100vw] absolute top-[6.5rem] md:top-20 left-0 bottom-0 right-0"></div>
      <div className="main cuting  h-[100vh]  w-[100vw] fixed top-[7rem]  md:top-20  left-20  md:left-0 right-0 bottom-0   flex  items-start justify-start">
        <div className="upload-box p-2 h-[100%]  bg-[var(--postcolor)] w-[80vw] cut  md:w-[400px] lg:w-[400px]">
          <div className="head flex items-center justify-end">
            <Link to="/">
              <div className="cross bg-[var(--bgcolor)] p-4">
                <RxCross2 />
              </div>
            </Link>
          </div>
          <div className="body  w-[100%]  p-3 m-1">
            <h1 className="text-center font-semibold text-xl ">
              2 people found
            </h1>
            <div className="strips p-2">
              <UserStrips
                message={false}
                pagination={true}
                connection={true}
                accept={false}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Explore;
