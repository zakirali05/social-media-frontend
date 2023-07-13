import profileImage from "../images/profile.png";
const UserStrip = ({ message, connection, accept }) => {
  return (
    <div className={`main flex flex-col  ${message ? "py-8" : "p-4"} `}>
      <div
        className={`flex 
           ${accept ? "yes" : "needed"}
         items-center justify-between px-2`}
      >
        <div className="one flex items-center gap-3">
          <img
            src={profileImage}
            alt=""
            className="h-[50px] w-[50px] object-cover rounded-full"
          />
          <div className="mainnnn">
            <h1 className="text-[var(--textcolor)]">Mark ruffulo</h1>
            <p className="text-[grey]">data scientist</p>
          </div>
        </div>
        <div className="two">
          {connection ? (
            <>
              <button className="px-4 py-2 bg-[var(--btncolor)] text-[var(--postcolor)] font-semibold ">
                Connect
              </button>
            </>
          ) : accept ? (
            <>
              <div className="main flex gap-3">
                <button className="px-4 py-2 bg-[var(--btncolor)] text-[black] font-semibold ">
                  Accept
                </button>
                <button className="px-4 py-2 bg-red-500 text-[black] font-semibold ">
                  Reject
                </button>
              </div>
            </>
          ) : (
            <></>
          )}
        </div>
      </div>
      {message ? (
        <>
          <div className="pillar w-[2px] bg-[grey] h-[23px] mx-8"></div>
          <div className="message ">
            <p className="px-1 md:px-8  text-[var(--textcolor)] font-[cursive]">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Voluptates neque similique quis unde ratione incidunt?
            </p>
          </div>
        </>
      ) : (
        <></>
      )}
    </div>
  );
};

export default UserStrip;
