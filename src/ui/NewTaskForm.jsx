import Button from "./Button";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";

import FormError from "./FormError";
import { useTasks } from "../components/useTasks";
import { useNavigate } from "react-router-dom";

function NewTaskForm() {
  const { register, handleSubmit, formState } = useForm({});
  const { setTask } = useTasks();
  const navigate = useNavigate();

  const { errors } = formState;
  function onSubmit(data) {
    const newTasks = {
      ...data,
      id: crypto.randomUUID(),
      createdAt: new Date().toISOString(),
    };

    setTask((prevTask) => [...prevTask, newTasks]);
    toast.success("New Task Added sucessfully");
    navigate("/AllTask");
  }

  function onError(data) {
    toast.error("Please fill the required field");
  }

  return (
    <>
      <form
        className=" p-4 mt-4 space-y-8 md:max-w-xl md:mx-auto md:pr-0"
        onSubmit={handleSubmit(onSubmit, onError)}
      >
        <div className="flex flex-col space-y-4">
          <label htmlFor="title">Title</label>
          <input
            type="text"
            className="w-full p-3 "
            {...register("title", {
              required: "This field is required",
            })}
          />
          <FormError error={errors?.title?.message} />
        </div>

        <div className="flex flex-col space-y-4">
          <label htmlFor="description">Description</label>
          <textarea
            name="description"
            id="des"
            className=" p-5  "
            {...register("description", {
              required: "This field is required",
            })}
          ></textarea>
          <FormError error={errors?.description?.message} />
        </div>

        <div className="flex flex-col justify-between space-y-8 md:flex-row md:space-y-0">
          <div className="flex flex-col space-y-2">
            <label htmlFor="start date">Start Date</label>
            <input
              type="date"
              name="start date"
              id="sd"
              className="p-3 rounded-lg"
              {...register("startDate", {
                required: "This field is required",
              })}
            />
            <FormError error={errors?.startDate?.message} />
          </div>
          <div className="flex flex-col space-y-2">
            <label htmlFor="End date">End Date</label>
            <input
              type="date"
              name="End date"
              id="ed"
              className="p-3 rounded-lg"
              {...register("endDate", {
                required: "This field is required",
              })}
            />
            <FormError error={errors?.endDate?.message} />
          </div>
        </div>

        <div className="flex justify-between">
          <div className="flex flex-col space-y-2">
            <label htmlFor="status">status</label>
            <select
              name="status"
              id="status-select"
              className="p-2 rounded-lg"
              {...register("status", {
                required: "This field is required",
              })}
            >
              <option value="complete">complete</option>
              <option value="Uncomplete">Uncomplete</option>
              <option value="important">Important</option>
            </select>
            <FormError error={errors?.status?.message} />
          </div>

          <div className="flex flex-col space-y-2">
            <label htmlFor="priority">Priority</label>
            <select
              name="priorities"
              id="priority-select"
              className="px-8 py-2 rounded-lg"
              {...register("priority", {
                required: "This field is required",
              })}
            >
              <option value="p0">p0</option>
              <option value="p1">p1</option>
              <option value="p2">p2</option>
            </select>
            <FormError error={errors?.priority?.message} />
          </div>
        </div>

        <Button style="w-full p-4 bg-blue-600 text-center text-white hover:bg-blue-500 ">
          Add new Task
        </Button>
      </form>
    </>
  );
}

export default NewTaskForm;
