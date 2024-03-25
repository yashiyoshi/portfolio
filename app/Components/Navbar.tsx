import Link from "next/link";

const Navbar = () => {
  return (
    <div className=" bg-main1 flex justify-between items-center py-6 font-bold text-main2">
      <Link href="/">
        <p className="text-4xl font-bold">.yassir</p>
      </Link>
      <ul className="flex space-x-24 ">
        <li>
          <Link href="/projects">
            <p className="hover:text-gray-200 ">projects</p>
          </Link>
        </li>
        <li>
          <Link href="/skills">
            <p className="hover:text-gray-200">skills</p>
          </Link>
        </li>
        <li>
          <Link href="/contact">
            <p className="hover:text-gray-200">contact</p>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
