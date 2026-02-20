import { Link } from "react-router-dom";
import { motion } from "motion/react";
import { HiMiniXMark } from "react-icons/hi2";

const LiVariant = {
  hover: {
    scale: 1.02,
    x: -8,
    transition: {
      type: "spring",
      stiffness: 900,
    },
  },
};

function Sidebar() {
  return (
    <div className="absolute top-0 py-12 px-4 bg-white w-55 h-screen z-1 shadow-4xl md:left-0 md:px-8 md:py-18 md:w-70">
      <motion.span className="absolute top-4 right-5 p-2 text-2xl rounded-full cursor-pointer hover:transition-all hover:bg-blue-300">
        <HiMiniXMark />
      </motion.span>
      <motion.button
        className="bg-blue-600 text-white w-full py-2 mt-4 rounded-lg cursor-pointer "
        whileHover={{
          y: -5,
          transition: { duration: 0.3 },
        }}
      >
        Add new task
      </motion.button>

      <aside>
        <ul className="flex flex-col justify-center text-start font-bai mt-10 space-y-5 text-sm md:text-lg">
          <motion.li variants={LiVariant} whileHover="hover">
            <Link to="/AllTask">All Tasks</Link>
          </motion.li>
          <motion.li variants={LiVariant} whileHover="hover">
            <Link to="/CompletedTask">Completed Tasks</Link>
          </motion.li>
          <motion.li variants={LiVariant} whileHover="hover">
            <Link to="/UnCompletedTask">Uncompleted Tasks</Link>
          </motion.li>
          <motion.li variants={LiVariant} whileHover="hover">
            <Link to="/ImportantTask">Important Tasks</Link>
          </motion.li>
          <motion.li variants={LiVariant} whileHover="hover">
            <Link to="/TaskStats">Task Stats</Link>
          </motion.li>
        </ul>
      </aside>

      <ul className="absolute bottom-6 cursor-pointer ">
        <motion.li variants={LiVariant} whileHover="hover">
          Delete All Data
        </motion.li>
      </ul>
    </div>
  );
}

export default Sidebar;
