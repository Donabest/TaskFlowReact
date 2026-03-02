import Sort from "../ui/Sort";
import NewTask from "./NewTask";

function TasksBody({ TaskTitle, children }) {
  return (
    <div>
      <section className="px-6 py-4 mr-3">
        <h1 className="flex justify-center mx-auto font-nunito font-xtralight leading-tight md:justify-start md:text-2xl md:font-serif">
          {TaskTitle}
        </h1>
        {TaskTitle.includes("All Task") && <Sort />}
        <section className="grid grid-cols gap-5 md:grid-cols-3 mt-6 ">
          {children}
          <NewTask />
        </section>
      </section>
    </div>
  );
}

export default TasksBody;
