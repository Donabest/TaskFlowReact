import { Link } from "react-router-dom";
import { useTaskApi } from "./useTaskApi";
import Spinner from "../ui/Spinner";

function TaskStats() {
  const { tasks, completedTask, importantTask, unCompletedTask, isLoading } =
    useTaskApi();

  const stats = [
    {
      statName: "Total Task",
      statNumber: tasks.length,
      statLogo: "T",
      statCreate: "111 last month",
      statBgColor: "bg-blue-600",
      path: "/AllTask",
    },
    {
      statName: "Completed Task",
      statNumber: completedTask.length,
      statLogo: "C",
      statCreate: "110 last month",
      statBgColor: "bg-green-800",
      path: "/CompletedTask",
    },
    {
      statName: "Uncompleted Task",
      statNumber: unCompletedTask.length,
      statLogo: "U",
      statCreate: "109 last month",
      statBgColor: "bg-yellow-400",
      path: "/UnCompletedTask",
    },
    {
      statName: "Important Task",
      statNumber: importantTask.length,
      statLogo: "M",
      statCreate: "108 last month",
      statBgColor: "bg-red-400",
      path: "/ImportantTask",
    },
  ];

  if (isLoading) return <Spinner />;
  return (
    <section className="mx-5 cursor-pointer">
      <h1 className="font-nunito  text-3xl text-center tracking-wider m-8 md:mb-20">
        Stats
      </h1>

      <div className=" grid grid-cols-1 gap-4 max-w-6xl mx-auto md:grid-cols-4 ">
        {stats.map((stat) => {
          return (
            <Link
              to={stat.path}
              className="bg-white p-4 shadow-lg"
              key={stat.statName}
            >
              <h3 className="font-light text-2xl text-start mb-3">
                {stat.statName}
              </h3>
              <div className="flex justify-between items-center text-center mb-2">
                <p className="font-bai text-2xl">{stat.statNumber}</p>
                <span
                  className={`text-2xl text-white ${stat.statBgColor}  px-4 py-2 rounded-full`}
                >
                  {stat.statLogo}
                </span>
              </div>
              <span className="text-gray-400">{stat.statCreate}</span>
            </Link>
          );
        })}
      </div>
    </section>
  );
}

export default TaskStats;
