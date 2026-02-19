import { motion } from "motion/react";
import { HiBell } from "react-icons/hi2";

import Button from "./Button";

function NewTaskButton() {
  return (
    <div className="hidden md:flex md:items-center md:space-x-4 md:text-center ">
      <motion.p
        className="text-2xl cursor-pointer "
        whileHover={{
          scale: 1.2,
          transition: { type: "spring", stiffness: 700 },
        }}
      >
        <HiBell />
      </motion.p>
      <Button />
    </div>
  );
}

export default NewTaskButton;
