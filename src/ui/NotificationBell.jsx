import { motion } from "motion/react";
import { HiBell } from "react-icons/hi2";
import { useTasks } from "../Hooks/useTasks";

function NotificationBell() {
  const { setIsNotify } = useTasks();
  function handleNotifyClick() {
    setIsNotify((notify) => !notify);
  }

  return (
    <motion.div
      className="cursor-pointer text-xl text-purple-600 hover:animate-bounce  "
      whileHover={{
        scale: 1.02,
        transition: { type: "spring", stiffness: 700 },
      }}
    >
      <HiBell onClick={handleNotifyClick} />
    </motion.div>
  );
}

export default NotificationBell;
