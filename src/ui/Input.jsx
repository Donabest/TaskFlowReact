import { motion } from "motion/react";
import { HiMagnifyingGlass } from "react-icons/hi2";

function Input({ width }) {
  return (
    <form>
      <motion.input
        type="text"
        placeholder="search for task"
        className={`${width} p-2 px-4 rounded-lg bg-white shadow-sm outline-blue-600 md:block`}
        whileFocus={{
          y: -2,
          transition: { type: "spring", stiffness: 1000, duration: 0.2 },
        }}
      />
      <HiMagnifyingGlass className="absolute right-10 bottom-3.5 text-center opacity-40" />
    </form>
  );
}

export default Input;
