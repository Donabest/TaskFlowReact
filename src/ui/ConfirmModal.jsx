import Button from "./Button";

function ConfirmModal() {
  return (
    <div className="hidden absolute inset-0  items-center justify-center h-screen z-100 bg-black/20">
      <div className="bg-zinc-100 w-[80%] m-6 p-8 shadow-5xl rounded-lg md:w-[50%]">
        <h1 className="font-rubik  font-light text-2xl">Are You Sure ?</h1>
        <p className="font-bai font-extralight text-gray-700 my-6">
          All data will be deleted permanently.
        </p>

        <div className="flex justify-end text-center items-center space-x-6">
          <Button>Cancel</Button>
          <Button style="px-5 py-2 rounded-lg text-white bg-blue-600 hover:bg-blue-500  ">
            Confirm
          </Button>
        </div>
      </div>
    </div>
  );
}

export default ConfirmModal;
