import { motion } from "motion/react";
import { useMove } from "../components/useMove";

function Button({ style, children }) {
  const handleClick = useMove();

  return (
    <motion.button
      className={`${style} cursor-pointer  rounded-lg `}
      whileHover={{
        y: -2,
        transition: { type: "spring", stiffness: 1000, duration: 0.5 },
      }}
      onClick={handleClick}
    >
      {children}
    </motion.button>
  );
}

export default Button;
