import { motion } from "motion/react";

function Button() {
  return (
    <motion.button
      className="font-bai px-6 py-3 rounded-lg cursor-pointer text-white bg-[#006BFF] hover:bg-blue-600"
      whileHover={{
        scale: 1.02,
        transition: { type: "spring", stiffness: 1000, duration: 0.5 },
      }}
    >
      Add New Task
    </motion.button>
  );
}

export default Button;
