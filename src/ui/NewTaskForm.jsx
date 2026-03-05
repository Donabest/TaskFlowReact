import { useForm } from "react-hook-form";
import { useEffect } from "react";
import { useCreateTasks } from "../features/AllTasks/useCreateTask";
import { useEditTask } from "../Hooks/useEditTask";
import { useTaskApi } from "../features/AllTasks/useTaskApi";
import { useNavigate, useSearchParams } from "react-router-dom";
import toast from "react-hot-toast";

import FormError from "./FormError";
import Button from "./Button";

function NewTaskForm() {
  const [searchParams] = useSearchParams();
  const taskId = searchParams.get("id");
  const id = Number(taskId);
  const isEditSession = Boolean(id);

  const { tasks } = useTaskApi();
  const { createTasks, isPending: isCreating } = useCreateTasks();
  const { editTask, isPending: isEditing } = useEditTask();

  const taskToEdit = isEditSession
    ? tasks.find((task) => task.id === id)
    : null;

  const { register, handleSubmit, reset, formState } = useForm({
    defaultValues: isEditSession && taskToEdit ? taskToEdit : {},
  });

  useEffect(() => {
    if (taskToEdit) {
      reset(taskToEdit);
    }
  }, [reset, taskToEdit]);

  const { errors } = formState;

  const navigate = useNavigate();

  const isWorking = isCreating || isEditing;
  function onSubmit(data) {
    if (isEditSession) {
      editTask(
        {
          newTask: data,
          id: id,
        },
        {
          onSuccess: () => {
            reset();
          },
        },
      );
      toast.success("Task Edited sucessfully");
      navigate("/AllTask");
    } else {
      const newTasks = {
        ...data,
        important: false,
      };
      createTasks({ ...newTasks });
      navigate("/AllTask");
    }
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
            className="w-full p-3 focus:outline-solid outline-blue-200 "
            disabled={isWorking}
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
            className=" p-5 focus:outline-solid outline-blue-200  "
            disabled={isWorking}
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
              className="p-3 rounded-lg focus:outline-solid outline-blue-200 "
              disabled={isWorking}
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
              className="p-3 rounded-lg focus:outline-solid outline-blue-200 "
              disabled={isWorking}
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
              className="p-2 rounded-lg focus:outline-solid outline-blue-200 "
              disabled={isWorking}
              {...register("status", {
                required: "This field is required",
              })}
            >
              <option value="completed">completed</option>
              <option value="Uncompleted">Uncompleted</option>
            </select>
            <FormError error={errors?.status?.message} />
          </div>

          <div className="flex flex-col space-y-2">
            <label htmlFor="priority">Priority</label>
            <select
              name="priorities"
              id="priority-select"
              className="px-8 py-2 rounded-lg focus:outline-solid outline-blue-200 "
              disabled={isWorking}
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
          {isCreating && "Creating New Task"}
          {isEditSession ? "Edit Task" : "Add New Task"}
        </Button>
      </form>
    </>
  );
}

export default NewTaskForm;
