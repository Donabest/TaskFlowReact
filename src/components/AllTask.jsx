import { motion } from "motion/react";

import Sort from "../ui/Sort";
import Task from "./Task";
import NewTask from "../ui/NewTAsk";

function AllTask() {
  return (
    <section className="px-6 py-4 mr-3">
      <h1 className="flex justify-center mx-auto font-nunito font-xtralight leading-tight md:justify-start md:text-2xl md:font-serif">
        All Tasks (1 task)
      </h1>
      <Sort />
      <section className="grid grid-cols gap-5 md:grid-cols-3 mt-6 ">
        <Task />
        <NewTask />
      </section>
    </section>
  );
}

export default AllTask;
