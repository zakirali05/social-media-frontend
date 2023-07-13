import {
  AiFillHome,
  AiFillBell,
  AiOutlineMenuFold,
  AiOutlineLogout,
} from "react-icons/ai";

import { BsChatDotsFill, BsFillTrash3Fill } from "react-icons/bs";
import { BiEdit } from "react-icons/bi";
import { MdClose } from "react-icons/md";
import { CgProfile } from "react-icons/cg";
import profileImage from "../images/profile.png";
import { useState } from "react";
import { motion } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";
const RightNav = () => {
  return (
    <div className="flex gap-4 items-center">
      <Link to="/">
        <h1 className="font-[cursive] text-2xl font-bold text-[var(--btncolor)] flex cursor-pointer">
          <motion.div
            initial={{ x: "-100%", opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.4 }}
          >
            My
          </motion.div>
          <motion.div
            initial={{ y: "-100%", opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.4 }}
          >
            Sociol
          </motion.div>
        </h1>
      </Link>
      <form className="input hidden md:block  ">
        <Link to="/explore">
          <input
            type="text"
            placeholder="# Explore"
            className="px-4 py-2 rounded-md text-[var(--textcolor)] bg-[var(--postcolor)] "
          />
        </Link>
      </form>
    </div>
  );
};

const LeftNav = ({ showNav, setShowNav }) => {
  const user = true;
  // const [opt, setOpt] = useState("");
  const nav = useNavigate();
  const fun = (x) => {
    nav(x);
  };
  return (
    <div className="flex text-[var(--textcolor)]  gap-4">
      <div className=" hidden md:flex    icons  gap-5 text-xl font-semibold items-center cursor-pointer  p-2 px-4 bg-[var(--postcolor)]">
        <Link to="/">
          {" "}
          <AiFillHome />
        </Link>
        <Link to="/chat">
          {" "}
          <BsChatDotsFill />
        </Link>
        <AiFillBell />
      </div>
      <div className="  hidden md:flex  profile  gap-2 h-[100%] items-center ">
        {user ? (
          <>
            <div className="profile-container flex gap-2 h-[100%] bg-[var(--postcolor)] p-2 px-4">
              <div className="profile-image h-[100%]">
                <img
                  src={profileImage}
                  alt=""
                  className="  object-contain h-[30px] w-[30px] rounded-full"
                />
              </div>
              <select
                onChange={(e) => {
                  fun(e.target.value);
                }}
                className="h-[100%] px-2   py-1 text-[var(--textcolor)] bg-[var(--postcolor)]"
              >
                <option value="/" className="py-2 px-4   ">
                  Home
                </option>
                <option value="/me" className="py-2 px-4  ">
                  My profile
                </option>
                <option value="/me" className="py-2 px-4  ">
                  Update profile
                </option>
                <option value="/logout" className="py-2 px-4  ">
                  Logout
                </option>

                <option value="/deleteaccount" className="py-2 px-4     ">
                  delete account
                </option>
              </select>
            </div>
          </>
        ) : (
          <>
            <div className="main flex gap-2 items-center">
              <Link to="/login">
                <div className="login p-2 bg-[var(--btncolor)] text-[black] cursor-pointer">
                  Login
                </div>
              </Link>
              <h1>or</h1>
              <Link to="/register">
                <div className="login p-2 bg-[var(--btncolor)]  text-[black] cursor-pointer">
                  Register
                </div>
              </Link>
            </div>
          </>
        )}
      </div>

      {user ? (
        <>
          {" "}
          <button
            className="text-xl font-semibold bg-[var(--postcolor)] cursor-pointer  py-2 px-4 rounded-md text-[var(--textcolor)]  md:hidden "
            onClick={() => setShowNav(true)}
          >
            <AiOutlineMenuFold />
          </button>
        </>
      ) : (
        <>
          <Link to="/login">
            <div className="   block md:hidden cursor-pointer   login p-2 px-3 bg-[var(--btncolor)] text-[black]">
              Login
            </div>
          </Link>
        </>
      )}
    </div>
  );
};

const SlideMenu = ({ showNav, setShowNav }) => {
  return (
    <div
      className={`slide md:hidden  z  ${
        showNav ? "slidein" : "slideout"
      }     p-5 px-6  h-[100vh] blureffect md:w-[20rem]  w-[20rem] top-0  fixed right-0 text-xl text-semibold text-[var(--textcolor)]`}
    >
      <div className="close flex justify-end" onClick={() => setShowNav(false)}>
        <MdClose />
      </div>
      <div className="menu-items flex flex-col gap-6 mt-4 text-[var(--textcolor)] ">
        <div className="explore">
          <form>
            <Link to="/explore">
              <input
                type="text"
                placeholder="# Explore"
                className="px-4 py-2 rounded-md text-[var(--textcolor)] bg-[var(--postcolor)] "
              />
            </Link>
          </form>
        </div>
        <Link to="/">
          <motion.div
            onClick={() => setShowNav(false)}
            initial={{ y: "-200%", opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.1 }}
            className="home flex gap-4 items-center"
          >
            <AiFillHome /> Home
          </motion.div>
        </Link>
        <Link to="/chat">
          <motion.div
            onClick={() => setShowNav(false)}
            initial={{ y: "-200%", opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.2 }}
            className="chat flex gap-4 items-center"
          >
            <BsChatDotsFill /> Messages
          </motion.div>
        </Link>
        <Link to="/me">
          <motion.div
            onClick={() => setShowNav(false)}
            initial={{ y: "-200%", opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.3 }}
            className="profile flex gap-4 items-center"
          >
            <CgProfile /> My profile
          </motion.div>
        </Link>
        <Link to="/update">
          <motion.div
            onClick={() => setShowNav(false)}
            initial={{ y: "-200%", opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.3 }}
            className="profile flex gap-4 items-center"
          >
            <BiEdit /> Update profile
          </motion.div>
        </Link>
        <Link to="/logout">
          <motion.div
            onClick={() => setShowNav(false)}
            initial={{ y: "-200%", opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.4 }}
            className="logout flex gap-4 items-center"
          >
            <AiOutlineLogout /> Logout
          </motion.div>
        </Link>
        <Link to="/deleteaccount">
          <motion.div
            onClick={() => setShowNav(false)}
            initial={{ y: "-200%", opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="delete flex gap-4 items-center"
          >
            <BsFillTrash3Fill /> Delete account
          </motion.div>
        </Link>
      </div>
    </div>
  );
};

const Navbar = () => {
  const [showNav, setShowNav] = useState(false);
  return (
    <div className="w-[100vw] mt-1  sticky top-0 left-0 right-0  px-4">
      <div className="main flex items-center justify-between p-2 z bg-[var(--bgcolor)] ">
        <RightNav />
        <LeftNav showNav={showNav} setShowNav={setShowNav} />
      </div>
      <SlideMenu showNav={showNav} setShowNav={setShowNav} />
    </div>
  );
};

export default Navbar;
