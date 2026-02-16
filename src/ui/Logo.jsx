function Logo() {
  const todayDate = new Date().toDateString();

  return (
    <div className="flex flex-col items-center text-center">
      <h2 className="block font-xtralight font-nunito text-xl md:hidden">
        Task Flow
      </h2>
      <p className="font-bai font-light text-gray-500">{todayDate}</p>
    </div>
  );
}

export default Logo;
