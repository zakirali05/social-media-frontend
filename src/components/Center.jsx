import profileImage from "../images/profile.png";
import { BsImages } from "react-icons/bs";
import { BiSolidVideos } from "react-icons/bi";
import { Link } from "react-router-dom";
import Posts from "./Posts";
const Center = ({ user }) => {
  return (
    <div className="p-2 py-4   w-[90vw]  md:w-[65vw]  lg:w-[41vw]  ">
      <Link to="/upload">
        <div className="postform shadow  md:ml-[0]  z-20 bg-[var(--postcolor)] p-2  w-[90vw]  md:w-[65vw]  lg:w-[41vw]   top-[90px] ">
          <div className="info flex gap-3 items-center justify-center p-2 w-[100%]">
            <img
              src={profileImage}
              alt=""
              className="w-[50px] h-[50px] rounded-full object-contain"
            />
            <input
              type="text"
              placeholder={`What's happening ${user.username} ?`}
              className="bg-[var(--bgcolor)] w-[80%] px-3 py-2"
            />
          </div>
          <div className="options flex items-center justify-between p-3 px-8 ">
            <div className="img flex gap-3 p-2 items-center justify-center border-[1px] rounded-md text-green-600  border-green-600  cursor-pointer   px-4">
              <BsImages />
              <label htmlFor="img">Image</label>
              <input type="file" className=" w-[50%]" id="img" />
            </div>
            <div className=" flex gap-3 p-2 items-center justify-center border-red-600  text-red-600  border-[1px] rounded-md   px-4  cursor-pointer      ">
              <BiSolidVideos />
              <label htmlFor="video">Videos</label>

              <input type="file" className=" w-[50%]" id="video" />
            </div>
          </div>
        </div>
      </Link>
      <div className="post-container p-2">
        <Posts />
      </div>
    </div>
  );
};

export default Center;
