import { HiDocumentPlus } from "react-icons/hi2";
import { motion } from "motion/react";

function NewTask() {
  return (
    <motion.div className="w-full h-40 bg-transparent border border-dashed rounded-lg shadow-sm cursor-pointer hover:bg-indigo-50 hover:shadow-lg hover:transition-shadow md:w-full md:h-full">
      <div className="flex items-center justify-center font-sans font-light opacity-80  h-full space-x-3">
        <span className="text-sm ">Add New Task</span>
        <span>
          <HiDocumentPlus />
        </span>
      </div>
    </motion.div>
  );
}

export default NewTask;
