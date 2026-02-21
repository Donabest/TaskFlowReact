import { HiBars3CenterLeft } from "react-icons/hi2";
import { motion } from "motion/react";

import Input from "./Input";
import Logo from "./Logo";
import AddNewTaskButton from "./AddNewTaskButton";
import User from "./User";

function Navbar() {
  return (
    <>
      <nav className="flex justify-between items-center px-7 py-6 md:py-8 ">
        <div className="text-3xl cursor-pointer">
          <HiBars3CenterLeft />
        </div>

        <div className="hidden md:block">
          <Input width={"w-90"} />
        </div>

        <Logo />
        <AddNewTaskButton />
        <User />
      </nav>

      <div className="relative w-full pr-6 pl-4 text-center mx-auto  md:hidden">
        <Input width={"w-full"} />
      </div>
    </>
  );
}

export default Navbar;
