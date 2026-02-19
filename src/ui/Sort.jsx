import { HiListBullet } from "react-icons/hi2";
import { HiOutlineSquares2X2 } from "react-icons/hi2";

function Sort() {
  return (
    <div className="flex justify-between items-center pt-4">
      <div className="flex justify-center items-center space-x-2.5  ">
        <HiListBullet className="text-2xl cursor-pointer" />
        <HiOutlineSquares2X2 className="text-2xl cursor-pointer" />
      </div>

      <select
        id="Sortby"
        name="Sort by"
        className="font-bai bg-white px-2 py-2 rounded-lg shadow-lg outline-blue-700 cursor-pointer"
        value="sort by"
      >
        <option value="sort by" disabled>
          sort by
        </option>
        <option value="completed first">Completed First</option>
        <option value="uncompleted first">UnCompleted First</option>
      </select>
    </div>
  );
}

export default Sort;
