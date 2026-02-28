import { Link } from "react-router-dom";
import { AnimatePresence, motion } from "motion/react";

import { HiMiniXMark } from "react-icons/hi2";
import Button from "./Button";
import { useTasks } from "../components/useTasks";
import { useMove } from "../components/useMove";
import ConfirmModal from "./ConfirmModal";

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
  const {
    showSideBar,
    handleSideBarClick,
    isDeleteAllModal,
    handleDeleteAllModal,
    onCancelDelete,
    onConfirmDeleteAll,
  } = useTasks();

  const handleClick = useMove();

  return (
    <AnimatePresence initial={false}>
      <>
        {isDeleteAllModal && (
          <ConfirmModal
            message="All data will be deleted permanently."
            handleClick={onCancelDelete}
            onConfirm={onConfirmDeleteAll}
          />
        )}

        {showSideBar && (
          <motion.div
            className={`block fixed top-0  py-12 px-4 bg-white w-55 h-screen z-1 shadow-4xl md:left-0 md:px-8 md:py-18 md:w-70`}
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: -100, opacity: 0 }}
            transition={{ type: "string", stiffness: 300, damping: 30 }}
          >
            <span className="absolute top-4 right-5 p-2 text-2xl rounded-full cursor-pointer hover:transition-all hover:bg-blue-300">
              <HiMiniXMark onClick={handleSideBarClick} />
            </span>

            <Button
              style={"bg-blue-600 text-white w-full py-2 mt-4  "}
              onClick={handleClick}
            >
              Add new Task
            </Button>

            <aside>
              <ul className="flex flex-col justify-center text-start font-bai mt-10 space-y-5 text-sm md:text-lg">
                <motion.li variants={LiVariant} whileHover="hover">
                  <Link to="/AllTask" onClick={handleSideBarClick}>
                    All Tasks
                  </Link>
                </motion.li>
                <motion.li variants={LiVariant} whileHover="hover">
                  <Link to="/completedTask" onClick={handleSideBarClick}>
                    Completed Tasks
                  </Link>
                </motion.li>
                <motion.li variants={LiVariant} whileHover="hover">
                  <Link to="UnCompletedTask" onClick={handleSideBarClick}>
                    Uncompleted Tasks
                  </Link>
                </motion.li>
                <motion.li variants={LiVariant} whileHover="hover">
                  <Link to="ImportantTask" onClick={handleSideBarClick} x>
                    Important Tasks
                  </Link>
                </motion.li>
                <motion.li variants={LiVariant} whileHover="hover">
                  <Link to="TastStats" onClick={handleSideBarClick}>
                    Task Stats
                  </Link>
                </motion.li>
              </ul>
            </aside>

            <ul className="absolute bottom-6 cursor-pointer ">
              <motion.li
                variants={LiVariant}
                whileHover="hover"
                onClick={handleDeleteAllModal}
              >
                Delete All Data
              </motion.li>
            </ul>
          </motion.div>
        )}
      </>
    </AnimatePresence>
  );
}

export default Sidebar;
