import Link from "next/link";

const Status = () => {
  return (
    <div className="py-10 font-bold text-md sm:text-lg">
      <span className="text-main2 opacity-50">current status</span>
      <span className="text-4xl text-success absolute -translate-y-4 ml-1">.</span>
      <p className="text-white opacity-80">-- available for work</p>
      
    </div>
  );
};

export default Status;
