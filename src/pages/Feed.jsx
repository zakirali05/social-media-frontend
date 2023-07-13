import React, { useEffect, useState } from "react";
import Left from "../components/Left";
import Center from "../components/Center";
import Right from "../components/Right";

import axios from "axios";
import { useNavigate } from "react-router-dom";

const Feed = () => {
  const nav = useNavigate();
  const [user, setUser] = useState({});
  useEffect(() => {
    const getMyProfile = async () => {
      const data = await axios.get("http://localhost:3001/api/v1/myprofile", {
        headers: {
          "Content-Type": "application/json",
        },
        withCredentials: true,
      });
      const user = data.data.user;
      setUser(user);
      console.log(user);
      if (!user) {
        nav("/login");
      }
    };
    getMyProfile();
  }, []);
  return (
    <>
      {" "}
      <div className="gridd p-2 mx-[0.25rem] ">
        <Left user={user} />
        <Center user={user} />
        <Right />
      </div>
    </>
  );
};

export default Feed;
