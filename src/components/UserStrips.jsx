import React from "react";
import UserStrip from "./UserStrip";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";
const UserStrips = ({ message, pagination, connection, accept }) => {
  return (
    <div>
      <UserStrip message={message} connection={connection} accept={accept} />
      <UserStrip message={message} connection={connection} accept={accept} />
      {pagination ? (
        <>
          <div className="test-center text-[grey] flex items-center mt-2 justify-center cursor-pointer">
            <AiOutlineArrowLeft />
            <p className="px-2 pr-4">1</p> <p className="px-2 pl-4">2</p>{" "}
            <AiOutlineArrowRight />
          </div>
        </>
      ) : (
        <></>
      )}
    </div>
  );
};

export default UserStrips;
