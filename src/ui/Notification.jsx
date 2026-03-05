import { useTasks } from "../Hooks/useTasks";

function Notification() {
  const { isNotify } = useTasks();

  return (
    isNotify && (
      <div className="absolute z-99 top-18 right-18 bg-black/3 backdrop-blur-lg  pl-5 pr-20 py-3 rounded-lg md:right-98">
        <p className="text-[12px] font-light  text-gray-800 font-mono">
          Nothing to show here
        </p>
      </div>
    )
  );
}

export default Notification;
