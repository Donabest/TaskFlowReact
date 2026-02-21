import NewTaskForm from "../ui/newTaskForm";

function AddNewTask() {
  return (
    <div>
      <h1 className="mt-8 font-mono font-bold text-2xl text-center animate-bounce">
        Add New Task
      </h1>
      <NewTaskForm />
    </div>
  );
}

export default AddNewTask;
