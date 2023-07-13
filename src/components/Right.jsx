import { motion } from "framer-motion";
const Right = () => {
  return (
    <motion.div
      initial={{ x: "10%", opacity: 0 }}
      whileInView={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.4 }}
      className="hidden shadow lg:block fixed right-[2rem] top-[90px] bg-[var(--postcolor)] px-3 p-2  text-[var(--textcolor)]  w-[25%] h-[100vh]"
    >
      <h1 className="font-semibold">Trend for you</h1>

      <div className="indo">
        <h1 className="text-sm text-[grey] py-3">Trending in indonesia</h1>
        <div className="mains flex flex-col gap-3 px-3">
          <div className="one flex items-center justify-between">
            <div className="first flex flex-col gap-1 items-center justify-center">
              <h1>#jawaanteaser</h1>
              <p className="text-[grey] ">100k tweets</p>
            </div>
            <div className="dots">...</div>
          </div>
          <hr />
          <div className="two flex items-center justify-between">
            <div className="first flex flex-col gap-1 items-center justify-center">
              <h1>#adipurush</h1>
              <p className="text-[grey] ">95k tweets</p>
            </div>
            <div className="dots">...</div>
          </div>
          <hr />
          <div className="three flex items-center justify-between">
            <div className="first flex flex-col gap-1 items-center justify-center">
              <h1>#animal</h1>
              <p className="text-[grey] ">40k tweets</p>
            </div>
            <div className="dots">...</div>
          </div>
          <hr />
        </div>
      </div>
    </motion.div>
  );
};

export default Right;
