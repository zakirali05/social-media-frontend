import profileImage from "../images/profile.png";
import { motion } from "framer-motion";

import { Link } from "react-router-dom";

const Left = ({ user }) => {
  return (
    <div className=" p-2   h-[100vh] sticky left-0 top-10 md:block hidden ">
      <Link to="/me">
        <motion.div
          initial={{ x: "-10%", opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.4 }}
          className="main-right shadow fixed bg-[var(--postcolor)] p-4 w-[25%] flex flex-col gap-3 items-center justify-center"
        >
          <img
            src={profileImage}
            alt=""
            className="w-[50px] h-[50px] object-contain rounded-full"
          />
          <div className="info flex flex-col gap-1 items-center justify-center">
            <h1 className="font-xl text-[var(--textcolor)]">{user.username}</h1>
            <p className="text-grey text-sm">{user.occupation}</p>
            <div className="bio text-center  w-[80%] ">{user.bio}</div>
            <div className="numbers w-[100%] bordertb flex mt-3 rounded-none ">
              <div className="connections  p-2 rounded-none  w-[50%] borderr flex flex-col items-center justify-center">
                <h1>Connections</h1>
                <p>{user.connections}</p>
              </div>
              <div className="impressions rounded-none  p-2  w-[50%] borderl  flex flex-col items-center justify-center">
                <h1>Impressions</h1>
                <p>13k</p>
              </div>
            </div>
            <div className="myprofile w-[100%] flex hover:underline text-[var(--btncolor)]  items-center justify-center p-4 cursor-pointer">
              <Link to="/me">My Profile</Link>
            </div>
          </div>
        </motion.div>
      </Link>
    </div>
  );
};

export default Left;
