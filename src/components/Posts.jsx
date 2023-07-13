import React from "react";
import Post from "./Post";

const Posts = () => {
  return (
    <div className="flex p-2  py-5 flex-col gap-8 items-center justify-center w-[90vw]  md:w-[65vw]  lg:w-[41vw]">
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
    </div>
  );
};

export default Posts;
