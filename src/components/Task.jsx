import { HiEllipsisVertical } from "react-icons/hi2";
import { HiMiniTrash } from "react-icons/hi2";
import { HiOutlineStar } from "react-icons/hi2";

function Task() {
  return (
    <div className="flex flex-col bg-white px-4 pt-6 rounded-lg shadow-sm hover:shadow-lg hover:transition-shadow">
      <div className="relative bg-red-100 p-12 rounded-lg shadow-xl">
        <h1 className="absolute top-0 right-2">P1</h1>
        <p className="text-center">Not Bad</p>
      </div>

      <p className=" font-bai my-6 text-center">
        Learning React with Project and project and project and project
      </p>

      <div className="flex justify-between items-center mb-4 ">
        <div>
          <p className="font-bai font-black tracking-wide text-sm">
            Start Date
          </p>
          <span className="font-light ">2/14/2002</span>
        </div>
        <div>
          <p className="font-bai font-black tracking-wide text-sm">End Date</p>
          <span className="font-light">2/14/2002</span>
        </div>
      </div>

      <div className="flex justify-between items-center my-4 ">
        <p>Completed</p>

        <div className="flex text-xl space-x-1 md:space-x-1.5">
          <HiOutlineStar className="cursor-pointer" />
          <HiMiniTrash className="cursor-pointer" />
          <HiEllipsisVertical className="cursor-pointer" />
        </div>
      </div>
    </div>
  );
}

export default Task;
