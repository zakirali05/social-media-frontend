import React from "react";
import UserStrips from "../components/UserStrips";
import { Link } from "react-router-dom";
import Posts from "../components/Posts";
import profileImage from "../images/profile.png";
const Profile = () => {
  return (
    <div className="w-[100vw] flex p-2  items-start px-4   md:px-10">
      <div className="left-profile w-[95vw] md:w-[68vw] py-4   lg:w-[50vw] bg-[var(--postcolor)]   p-2 px-9 flex flex-col ">
        <div className="img flex  items-start justify-start p-3 ">
          <img
            src={profileImage}
            className="h-[90px] w-[90px] rounded-full"
            alt=""
          />
        </div>
        <div className="information flex flex-col items-start justify-center  px-3 py-1">
          <h1 className="font-bold text-2xl ">Ben K Ros</h1>
          <p className="text-sm text-[grey] ">Proffesional advocate</p>
          <div className="bio">
            <h1 className="text-md text-[var(--textcolor)] py-2 max-w-[100%] md:max-w-[65%]">
              Hey there i am a profesional advocate working at Pearson Hardman
              as team lead
            </h1>
          </div>
        </div>
        <div className="connections px-3 py-2 flex items-center justify-between w-[100%] lg:w-[80%]">
          <Link to="/connections">
            <p className=" px-4 py-2 bg-[var(--bgcolor)]  rounded-md text-[var(--btncolor)] cursor-pointer ">
              {" "}
              735 Connections
            </p>
          </Link>
        </div>
        <div className="yourposts py-5 px-3  flex flex-col items-center justify-center mx-w-[100%]">
          <Posts />
        </div>
      </div>
      <div className="right-profile  lg:w-[40vw] md:block bg-[var(--postcolor)] hidden  fixed right-2  lg:right-10   py-6 px-4">
        <div className="main w-[100%]">
          <h1 className="text-center text-[grey]">Similiar accounts</h1>
          <UserStrips
            message={false}
            pagination={true}
            connection={true}
            accept={false}
          />
        </div>
      </div>
    </div>
  );
};

export default Profile;
