import { HiEllipsisVertical } from "react-icons/hi2";
import { HiMiniTrash } from "react-icons/hi2";
import { HiOutlineStar } from "react-icons/hi2";

const tasks = [
  {
    id: 1,
    title: "DON",
    description: "learning react",
    startDate: "2/14/2002",
    endDate: "2/14/2002",
    status: "completed",
    priority: "p0",
  },
  {
    id: 2,
    title: "Zeez",
    description: "practicing react",
    startDate: "2/14/2002",
    endDate: "2/14/2002",
    status: "uncompleted",
    priority: "p1",
  },
  {
    id: 3,
    title: "Abest",
    description: "learning framer motion",
    startDate: "2/14/2002",
    endDate: "2/14/2002",
    status: "important",
    priority: "p2",
  },
];

function Task() {
  const color = { p0: "bg-green-100", p1: "bg-blue-100", p2: "bg-red-100" };
  console.log(color.p0);
  return (
    <>
      {tasks.map((task) => (
        <div
          className="flex flex-col bg-white px-4 pt-6 rounded-lg shadow-sm hover:shadow-lg hover:transition-shadow"
          key={task.id}
        >
          <div className={` relative bg-green-100 p-12 rounded-lg shadow-xl`}>
            <h1 className="absolute top-0 right-2">{task.priority}</h1>
            <p className="text-center">{task.title}</p>
          </div>

          <p className=" font-bai my-6 text-center">{task.description}</p>

          <div className="flex justify-between items-center mb-4 ">
            <div>
              <p className="font-bai font-black tracking-wide text-sm">
                Start Date
              </p>
              <span className="font-light ">{task.startDate}</span>
            </div>
            <div>
              <p className="font-bai font-black tracking-wide text-sm">
                End Date
              </p>
              <span className="font-light">{task.endDate}</span>
            </div>
          </div>

          <div className="flex justify-between items-center my-4 ">
            <p>{task.status}</p>

            <div className="flex text-xl space-x-1 md:space-x-1.5">
              <HiOutlineStar className="cursor-pointer" />
              <HiMiniTrash className="cursor-pointer" />
              <HiEllipsisVertical className="cursor-pointer" />
            </div>
          </div>
        </div>
      ))}
    </>
  );
}

export default Task;
