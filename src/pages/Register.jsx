import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import profileImage from "../images/profile.png";
import { Link } from "react-router-dom";
// import { motion } from "framer-motion";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Register = () => {
  // const [avatar, setAvatar] = useState();
  const nav = useNavigate();
  // const [avatar, setAvatar] = useState();
  const [emailaddress, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [bio, setBio] = useState("");
  const [occupation, setoccupation] = useState("");
  const [password, setPassword] = useState("");

  const registerhandler = async () => {
    try {
      // const form = new FormData();
      // form.append("avatar", avatar);
      // form.append("upload-preset", "avatars");
      // form.append("cloud_name", "zakirali");

      const data = await axios.post(
        "http://localhost:3001/api/v1/register",
        { emailaddress, password, username, bio, occupation },
        {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true,
        }
      );
      console.log(data);
      await toast.success(`${data.data.message}`, {
        position: toast.POSITION.TOP_RIGHT,
      });
      nav("/");
    } catch (error) {
      console.log(error.message);
      toast.error(`${error.message}`, {
        position: toast.POSITION.TOP_RIGHT,
      });
    }

    // setAvatar();
    setEmail("");
    setUsername("");
    setBio("");
    setoccupation("");
    setPassword("");
  };

  return (
    <div className="w-[100vw] flex items-start justify-center zl  h-[100vh]">
      <ToastContainer />
      <form className="flex flex-col bg-[var(--postcolor)] items-center mt-5 z;  p-7 justify-center w-[80%]  md:w-[50%] gap-4">
        <label htmlFor="profile">
          <img
            src={profileImage}
            alt=""
            className="h-[50px] w-[50px] object-cover rounded-full"
          />
        </label>
        <input
          type="file"
          id="profile"
          name="profile"
          className="hidden"
          // onChange={(e) => setAvatar(e.target.files[0])}
        />
        <input
          // initial={{ y: "-200%", opacity: 0 }}
          // whileInView={{ y: 0, opacity: 1 }}
          // transition={{ duration: 0.2 }}
          type="email"
          value={emailaddress}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your  email"
          className=" w-[100%] lg:w-[90%]  p-2 bg-[var(--bgcolor)]"
        />
        <input
          // initial={{ y: "-200%", opacity: 0 }}
          // whileInView={{ y: 0, opacity: 1 }}
          // transition={{ duration: 0.2 }}
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Enter your  username"
          className=" w-[100%] lg:w-[90%]  p-2 bg-[var(--bgcolor)]"
        />
        <input
          // initial={{ y: "-200%", opacity: 0 }}
          // whileInView={{ y: 0, opacity: 1 }}
          // transition={{ duration: 0.2 }}
          type="text"
          value={occupation}
          onChange={(e) => setoccupation(e.target.value)}
          placeholder="Enter your  occupation"
          className="w-[100%] lg:w-[90%]  p-2 bg-[var(--bgcolor)]"
        />
        <input
          // initial={{ y: "-200%", opacity: 0 }}
          // whileInView={{ y: 0, opacity: 1 }}
          // transition={{ duration: 0.2 }}
          type="text"
          value={bio}
          onChange={(e) => setBio(e.target.value)}
          placeholder="Enter your  bio"
          className="w-[100%] lg:w-[90%]  p-2 bg-[var(--bgcolor)]"
        />
        <input
          // initial={{ y: "-200%", opacity: 0 }}
          // whileInView={{ y: 0, opacity: 1 }}
          // transition={{ duration: 0.2 }}
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Enter your  password"
          className="w-[100%] lg:w-[90%]  p-2 bg-[var(--bgcolor)]"
        />

        <input
          // initial={{ y: "-200%", opacity: 0 }}
          // whileInView={{ y: 0, opacity: 1 }}
          // transition={{ duration: 0.2 }}
          type="button"
          onClick={registerhandler}
          value="Register"
          className="w-[90%] p-2 bg-[var(--btncolor)] text-black font-semibold mt-4"
        />
        <div className="main flex items-center justify-between gap-5">
          <p className="text-[0.8rem]">Already have an account</p>
          <Link to="/login">
            <p className="hover:underline text-[var(--btncolor)] text-[0.8rem]">
              Login here
            </p>
          </Link>
        </div>
      </form>
    </div>
  );
};

export default Register;
