import Feed from "../pages/Feed";
import profileImage from "../images/profile.png";
import { RxCross2 } from "react-icons/rx";
import { BsImages } from "react-icons/bs";
import { BiSolidVideos } from "react-icons/bi";
import { Link } from "react-router-dom";
import axios from "axios";
import { useState } from "react";
const Upload = () => {
  const [text, setText] = useState("");
  const [media, setMedia] = useState();
  const data = new FormData();
  data.append("media", media);
  const uploadPost = async () => {
    try {
      await axios.post(
        "http://localhost:3001/api/v1/addpost",
        { media: { public_id: ",jawebhf", url: "qkfgh" }, text },
        {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true,
        }
      );
    } catch (err) {
      console.error(err);
    }
  };
  return (
    <>
      <Feed />
      <div className="main  blureffect h-[10000vh] w-[100vw] absolute top-0 left-0 bottom-0 right-0"></div>
      <div className="main   w-[100vw] h-[100vh] fixed   top-0 left-0 right-0 bottom-0   flex  items-center justify-center">
        <div className="upload-box p-4   bg-[var(--postcolor)] w-[80vw]  md:w-[70vw] lg:w-[50vw]">
          <div className="head flex items-center justify-between">
            <div className="profile flex items-center gap-4">
              <img
                src={profileImage}
                alt=""
                className="h-[50px] w-[50px] rounded-full object-cover"
              />
              <div className="flex flex-col gap-1 ">
                <h1>Jeff bezos</h1> <p>Mern stack developer</p>
              </div>
            </div>
            <Link to="/">
              <div className="cross bg-[var(--bgcolor)] p-4">
                <RxCross2 />
              </div>
            </Link>
          </div>
          <div className="body  w-[100%]  p-3 m-1">
            <textarea
              type="text"
              rows={15}
              value={text}
              onChange={(e) => {
                setText(e.target.value);
              }}
              placeholder="What do you want to talk about today?"
              className="w-[100%] h-[100%] bg-[var(--postcolor)] text-[var(--textcolor)]"
            />
            <div className="options flex items-center justify-between  ">
              <div className="one flex gap-4">
                <label
                  htmlFor="imgg"
                  className="p-4 px-6 text-lg   rounded-md bg-[var(--bgcolor)] text-green-600"
                >
                  <BsImages />
                </label>
                {/* <input type="file" id="img" /> */}
                <input
                  type="file"
                  name="imgg"
                  id="imgg"
                  onChange={(e) => setMedia(e.target.files[0])}
                  className="z-100 hidden"
                />
                <label
                  htmlFor="videoo"
                  className="p-4 px-6 text-lg   rounded-md bg-[var(--bgcolor)] text-red-600"
                >
                  <BiSolidVideos />
                </label>
                {/* <input type="file" id="video" /> */}
                <input
                  type="file"
                  name="videoo"
                  id="videoo"
                  className="z-100 hidden"
                />
              </div>
              <div className="two">
                <button
                  onClick={uploadPost}
                  className="px-4 py-2 bg-[var(--btncolor)] text-[var(--bgcolor)] font-semibold rounded-md"
                >
                  Post
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Upload;
