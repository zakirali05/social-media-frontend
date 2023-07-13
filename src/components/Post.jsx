import profileImage from "../images/profile.png";
import { motion } from "framer-motion";
import { BsFillTrash3Fill } from "react-icons/bs";
import { AiOutlineHeart, AiOutlineComment } from "react-icons/ai";
import { Link } from "react-router-dom";

const Post = () => {
  return (
    <motion.div
      initial={{ scaleZ: 100, opacity: 0 }}
      whileInView={{ scaleZ: 0, opacity: 1 }}
      transition={{ delay: 0.4 }}
      className="bg-[var(--postcolor)] shadow  px-4 py-5  w-[90vw] mr-[20px]  md:w-[65vw]  lg:w-[41vw]"
    >
      <div className="header flex gap-3 items-center justify-between">
        <div className="f flex gap-3 items-center ">
          <Link to="/profile">
            <img
              src={profileImage}
              alt=""
              className="w-[50px] h-[50px] object-contain rounded-full"
            />
          </Link>
          <div className="names flex flex-col gap-1 items-center justify-center">
            <Link to="/profile">
              <h1 className="text-lg font-semibold text-[var(--textcolor)] hover:underline hover:text-[var(--btncolor)]">
                Elon Musk
              </h1>
            </Link>
            <p className="text-grey text-sm">Mern developer</p>
          </div>
        </div>
        <button className="p-3 rounded-md px-4 bg-[var(--bgcolor)]">
          <BsFillTrash3Fill />
        </button>
      </div>
      <div className="content p-2">
        This is the content of my post , i made an amazing website today . hope
        you will love it...
      </div>
      <div className="img w-[100%] h-[320px]  p-2">
        <img
          className="w-[100%] h-[100%] rounded-md"
          src="https://images.pexels.com/photos/1485894/pexels-photo-1485894.jpeg?auto=compress&cs=tinysrgb&w=600"
          alt=""
        />
      </div>
      <div className="pre-footer px-2 py-1 flex items-center justify-between">
        <Link to="/viewlike">
          <h1 className="cursor-pointer hover:underline text-[grey]">
            521 likes
          </h1>
        </Link>
        <Link to="viewcomment">
          <p className="cursor-pointer hover:underline text-[grey]">
            3k comments
          </p>
        </Link>
      </div>
      <div className="footer flex gap-4 p-2 mt-2 items-center">
        <div className="like  text-2xl">
          {" "}
          <AiOutlineHeart />
        </div>

        <div className="comment flex gap-3 w-[100%] items-center  text-2xl">
          <AiOutlineComment />
          <input
            type="text"
            className="w-[100%] text-sm p-2 bg-[var(--postcolor)]"
            placeholder="Write your comment..."
          />
        </div>
      </div>
    </motion.div>
  );
};

export default Post;
