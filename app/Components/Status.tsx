import Link from "next/link";

const Status = () => {
  return (
    <div className="py-10 font-bold text-md sm:text-lg invisible md:visible">
      <span className="text-main2 opacity-50">current status</span>
      <span className="text-4xl text-success absolute -translate-y-4 ml-1">.</span>
      <p className="text-white opacity-80">-- available for work</p>
      <p className="text-white opacity-20 text-sm font-normal">applying for internships atm!</p>
      
    </div>
  );
};

export default Status;
