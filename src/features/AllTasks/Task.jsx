import { HiEllipsisVertical, HiStar } from "react-icons/hi2";
import { HiMiniTrash } from "react-icons/hi2";
import { HiOutlineStar } from "react-icons/hi2";
import { useTasks } from "../../Hooks/useTasks";
import ConfirmModal from "../../ui/ConfirmModal";
import { Link } from "react-router-dom";
import { useDeleteTask } from "./useDeleteTask";
import { useUpdateStatus } from "./useUpdateStatus";
import { useUpdateImportant } from "../ImportantTask/useUpdateImportant";

function Task({ task }) {
  const {
    isDeleteTaskModal,
    onCancelDelete,
    setIsDeleteTaskModal,
    handleOpenDeleteModal,
    taskToDelete,
  } = useTasks();

  const { deleteTask } = useDeleteTask();
  const { updateStatus, isLoading: isUpdating } = useUpdateStatus();
  const { updateImportant, isPending: isImportant } = useUpdateImportant();

  function onConfirmDelete() {
    deleteTask(taskToDelete);
    setIsDeleteTaskModal(false);
  }

  function ToggleCompleted(id, currentStatus) {
    updateStatus({ id, currentStatus });
  }

  function ToggleImportant(id, currentImportant) {
    updateImportant({ id, currentImportant });
  }

  const priorityColor = {
    p0: "bg-green-100",
    p1: "bg-blue-100",
    p2: "bg-red-100",
  };

  return (
    <div className="flex flex-col bg-white px-4 pt-6 rounded-lg shadow-sm hover:shadow-lg hover:transition-shadow">
      {isDeleteTaskModal && (
        <ConfirmModal
          message="This task will be deleted permanently."
          handleClick={onCancelDelete}
          onConfirm={onConfirmDelete}
        />
      )}
      <div
        className={` relative ${priorityColor[task.priority]} p-12 rounded-lg shadow-xl`}
      >
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
          <p className="font-bai font-black tracking-wide text-sm">End Date</p>
          <span className="font-light">{task.endDate}</span>
        </div>
      </div>

      <div className="flex justify-between items-center my-4 ">
        <p
          className={`${priorityColor[task.priority]} px-4 py-2 rounded-xl ${isImportant ? "cursor-not-allowed" : "cursor-pointer"}`}
          onClick={() => ToggleCompleted(task.id, task.status)}
        >
          {isUpdating ? "updating..." : task.status}
        </p>

        <div className="flex text-xl space-x-1 md:space-x-1.5">
          <button onClick={() => ToggleImportant(task.id, task.important)}>
            {task.important === true ? (
              <HiStar className="cursor-pointer" />
            ) : (
              <HiOutlineStar className="cursor-pointer" />
            )}
          </button>
          <HiMiniTrash
            className="cursor-pointer"
            onClick={() => handleOpenDeleteModal(task.id)}
          />
          <Link to={`/AddNewTask?id=${task.id}`}>
            <HiEllipsisVertical className="cursor-pointer" />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Task;
