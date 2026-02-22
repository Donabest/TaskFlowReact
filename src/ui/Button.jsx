import { motion } from "motion/react";

function Button({ style, onClick, children }) {
  return (
    <motion.button
      className={`${style} cursor-pointer  rounded-lg `}
      whileHover={{
        y: -2,
        transition: { type: "spring", stiffness: 1000, duration: 0.5 },
      }}
      onClick={onClick}
    >
      {children}
    </motion.button>
  );
}

export default Button;
