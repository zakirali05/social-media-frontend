import profileImage from "../images/profile.png";
// import { motion } from "framer-motion";
const Update = () => {
  return (
    <div className="w-[100vw] flex items-start justify-center h-[100vh]">
      <form className="flex flex-col bg-[var(--postcolor)] items-center mt-20 p-8 justify-center w-[80%] gap-5">
        <label htmlFor="profile">
          <img
            src={profileImage}
            alt=""
            className="h-[50px] w-[50px] object-cover rounded-full"
          />
        </label>
        <input type="file" id="profile" name="profile" className="hidden" />

        <input
          // initial={{ y: "-200%", opacity: 0 }}
          // whileInView={{ y: 0, opacity: 1 }}
          // transition={{ duration: 0.2 }}
          type="text"
          placeholder="Enter your new username"
          className=" w-[100%] lg:w-[90%]  p-2 bg-[var(--bgcolor)]"
        />
        <input
          // initial={{ y: "-200%", opacity: 0 }}
          // whileInView={{ y: 0, opacity: 1 }}
          // transition={{ duration: 0.2 }}
          type="text"
          placeholder="Enter your new occupation"
          className="w-[100%] lg:w-[90%]  p-2 bg-[var(--bgcolor)]"
        />
        <input
          // initial={{ y: "-200%", opacity: 0 }}
          // whileInView={{ y: 0, opacity: 1 }}
          // transition={{ duration: 0.2 }}
          type="text"
          placeholder="Enter your new bio"
          className="w-[100%] lg:w-[90%]  p-2 bg-[var(--bgcolor)]"
        />
        <input
          // initial={{ y: "-200%", opacity: 0 }}
          // whileInView={{ y: 0, opacity: 1 }}
          // transition={{ duration: 0.2 }}
          type="password"
          placeholder="Enter your old password"
          className="w-[100%] lg:w-[90%]  p-2 bg-[var(--bgcolor)]"
        />
        <input
          // initial={{ y: "-200%", opacity: 0 }}
          // whileInView={{ y: 0, opacity: 1 }}
          // transition={{ duration: 0.2 }}
          type="password"
          placeholder="Enter your new password"
          className="w-[100%] lg:w-[90%]  p-2 bg-[var(--bgcolor)]"
        />
        <input
          // initial={{ y: "-200%", opacity: 0 }}
          // whileInView={{ y: 0, opacity: 1 }}
          // transition={{ duration: 0.2 }}
          type="submit"
          value="Update"
          className="w-[90%] p-2 bg-[var(--btncolor)] text-black font-semibold mt-4"
        />
      </form>
    </div>
  );
};

export default Update;
