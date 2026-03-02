import { ImSpinner3 } from "react-icons/im";

function Spinner() {
  return (
    <div className="flex justify-center items-center text-center mt-20 ">
      <ImSpinner3 className="text-4xl animate-spin opacity-60" />
    </div>
  );
}

export default Spinner;
