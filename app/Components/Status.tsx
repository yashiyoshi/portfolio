import Link from "next/link";

const Status = () => {
  return (
    <div className="py-6 font-bold text-md sm:text-lg invisible md:visible opacity-0 animate-fade-in-delay-2">
      <span className="text-main2 opacity-50">current status</span>
      <span className="text-4xl text-fail absolute -translate-y-3.5 ml-1">.</span>
      <p className="text-white opacity-80">-- interning at mugna tech</p>
      <p className="text-white opacity-20 text-sm font-normal invisible">applying for internships atm!</p>
      
    </div>
  );
};

export default Status;
