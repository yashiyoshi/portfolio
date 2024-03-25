import Link from "next/link";

const Contact = () => {
  return (
    <div className="text-main2 font-bold text-3xl p-3">
      <span className="text-yellow pr-2 absolute -translate-x-3 -translate-y-0.5">
        |
      </span>
      <span className="tracking-wider items-start">DONT BE A STRANGER</span>
      <div className="opacity-50 font-normal text-2xl">
        <p className="py-10">Let's make something exciting together!</p>
        <p className="py-10">
          If you have an opportunity or any project that would benefit from my
          involvement, feel free to reach me at at any of my socials below. I'll
          be delighted to talk to you :)
        </p>

        <div className="justify-between flex py-20">
          <p className="text-sm self-end">
            @ Yassir Utara, Portfolio 2024 | Made from scratch with NextJS,
            TailwindCSS, TS
          </p>
          <ul className="flex space-x-10 text-sm text-yellow">
            <li>
              <p>email</p>
            </li>
            <li>
              <p>instagram</p>
            </li>
            <li>
              <p>Linkedin</p>
            </li>
            <li>
              <p>github</p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Contact;
