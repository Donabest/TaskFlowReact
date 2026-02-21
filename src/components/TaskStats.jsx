import { Link } from "react-router-dom";

const stats = [
  {
    statName: "Total Task",
    statNumber: 50,
    statLogo: "T",
    statCreate: "111 last month",
    statBgColor: "bg-blue-600",
  },
  {
    statName: "Completed Task",
    statNumber: 10,
    statLogo: "C",
    statCreate: "110 last month",
    statBgColor: "bg-green-800",
  },
  {
    statName: "Uncompleted Task",
    statNumber: 5,
    statLogo: "U",
    statCreate: "109 last month",
    statBgColor: "bg-yellow-400",
  },
  {
    statName: "Important Task",
    statNumber: 6,
    statLogo: "M",
    statCreate: "108 last month",
    statBgColor: "bg-red-400",
  },
];

function TaskStats() {
  return (
    <section className="mx-5 cursor-pointer">
      <h1 className="font-nunito  text-3xl text-center tracking-wider m-8 md:mb-20">
        Stats
      </h1>

      <div className=" grid grid-cols-1 gap-4 max-w-6xl mx-auto md:grid-cols-4 ">
        {stats.map((stat) => {
          return (
            <Link
              to="/AllTask"
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
