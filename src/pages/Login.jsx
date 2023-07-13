import { useState } from "react";
import { Link } from "react-router-dom";
// import { motion } from "framer-motion";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
const Login = () => {
  const [emailaddress, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const nav = useNavigate();
  const loginhandler = async () => {
    try {
      const data = await axios.post(
        "http://localhost:3001/api/v1/login",
        {
          emailaddress,
          password,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true,
        }
      );
      console.log(data);
      toast.success(`${data.message}`, {
        position: toast.POSITION.TOP_RIGHT,
      });

      nav("/");
    } catch (err) {
      console.log(err.message);
      toast.error(`${err.message}`, {
        position: toast.POSITION.TOP_RIGHT,
      });
    }
    setEmail("");
    setPassword("");
  };
  return (
    <div className="w-[100vw] flex items-start justify-center h-[100vh] ">
      <ToastContainer />
      <form className="flex flex-col bg-[var(--postcolor)]   items-center mt-20 p-8 justify-center w-[80%]  md:w-[50%] gap-5">
        <input
          // initial={{ y: "-200%", opacity: 0 }}
          // whileInView={{ y: 0, opacity: 1 }}
          // transition={{ duration: 0.2 }}
          type="text"
          value={emailaddress}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your  email"
          className=" w-[100%] lg:w-[90%]  p-2 bg-[var(--bgcolor)]"
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
          onClick={loginhandler}
          value="Login"
          className="w-[90%] p-2 bg-[var(--btncolor)] text-black font-semibold mt-4"
        />
        <div className="main flex items-center justify-between gap-5 text-[0.8rem]">
          <p>Dosnt have an account</p>
          <Link to="/register">
            <p className="hover:underline text-[var(--btncolor)] text-[0.8rem]">
              Register here
            </p>
          </Link>
        </div>
      </form>
    </div>
  );
};

export default Login;
