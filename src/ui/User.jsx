import { HiBell } from "react-icons/hi2";
import { HiMiniUserCircle } from "react-icons/hi2";
import { motion } from "motion/react";
import NotificationBell from "./NotificationBell";

function User() {
  return (
    <div className="flex justify-center items-center space-x-1.5">
      <h1 className="hidden font-mono sm:block">Hi, User!</h1>
      <span className="md:hidden">
        <NotificationBell />
      </span>

      <motion.p
        className="cursor-pointer text-xl "
        whileHover={{
          scale: 1.3,
          transition: { type: "spring", stiffness: 700 },
        }}
      >
        <HiMiniUserCircle />
      </motion.p>
    </div>
  );
}

export default User;
