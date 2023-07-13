import profileImage from "../images/profile.png";
import Posts from "../components/Posts";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
const MyProfile = () => {
  const nav = useNavigate();
  const [user, setUser] = useState({});
  const getMyProfile = async () => {
    const data = await axios.get("http://localhost:3001/api/v1/myprofile", {
      headers: {
        "Content-Type": "application/json",
      },
      withCredentials: true,
    });
    const user = data.data.user;
    setUser(user);
    // console.log(user);
    if (!user) {
      return nav("/login");
    }
  };
  useEffect(() => {
    getMyProfile();
  }, []);

  // const [username, setUsername] = useState("");
  // const [occupation, setOccupation] = useState("");
  // const [bio, setBio] = useState("");
  // const [oldpassword, setOldPassword] = useState("");
  // const [newpassword, setnewPassword] = useState("");

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
          <h1 className="font-bold text-2xl ">{user?.username}</h1>
          <p className="text-sm text-[grey] ">{user?.occupation}</p>
          <div className="bio">
            <h1 className="text-md text-[var(--textcolor)] py-2 max-w-[100%] md:max-w-[65%]">
              {user?.bio}
            </h1>
          </div>
        </div>
        <div className="connections px-3 py-2 flex items-center justify-between w-[100%] lg:w-[80%]">
          <Link to="/connections">
            <p className=" px-4 py-2 bg-[var(--bgcolor)]  rounded-md text-[var(--btncolor)] cursor-pointer ">
              {" "}
              {user?.connections} Connections
            </p>
          </Link>

          <Link to="/requests">
            <p className="px-4 py-2 bg-[var(--bgcolor)] rounded-md text-blue-400 cursor-pointer">
              {user?.requests} requests
            </p>
          </Link>
        </div>
        <div className="yourposts py-5 px-3  flex flex-col items-center justify-center mx-w-[100%]">
          <Posts />
        </div>
      </div>
      <div className="right-profile  lg:w-[40vw] md:block bg-[var(--postcolor)] hidden  fixed right-2  lg:right-10   py-6 px-4">
        <form className="flex flex-col items-center justify-center w-[100%] gap-5">
          <label htmlFor="profile">
            <img
              src={profileImage}
              alt=""
              className="h-[50px] w-[50px] object-cover rounded-full"
            />
          </label>
          <input type="file" id="profile" name="profile" className="hidden" />

          <motion.input
            initial={{ y: "-200%", opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.2 }}
            type="text"
            placeholder="Enter your new username"
            className=" w-[100%] lg:w-[90%]  p-2 bg-[var(--bgcolor)]"
          />
          <motion.input
            initial={{ y: "-200%", opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.3 }}
            type="text"
            placeholder="Enter your new occupation"
            className="w-[100%] lg:w-[90%]  p-2 bg-[var(--bgcolor)]"
          />
          <motion.input
            initial={{ y: "-200%", opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.4 }}
            type="text"
            placeholder="Enter your new bio"
            className="w-[100%] lg:w-[90%]  p-2 bg-[var(--bgcolor)]"
          />
          <motion.input
            initial={{ y: "-200%", opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            type="password"
            placeholder="Enter your old password"
            className="w-[100%] lg:w-[90%]  p-2 bg-[var(--bgcolor)]"
          />
          <motion.input
            initial={{ y: "-200%", opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            type="password"
            placeholder="Enter your new password"
            className="w-[100%] lg:w-[90%]  p-2 bg-[var(--bgcolor)]"
          />
          <motion.input
            initial={{ y: "-200%", opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.7 }}
            type="submit"
            // onSubmit={(e, user) => handleUpdate(user)}
            value="Update"
            className="w-[90%] p-2 bg-[var(--btncolor)] text-black font-semibold mt-4"
          />
        </form>
      </div>
    </div>
  );
};

export default MyProfile;
