import Link from "next/link";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Navbar = () => {
  return (
    <div className=" bg-main1 flex justify-between items-center my-4 sm:my-6 font-bold text-main2">
      <p className="text-4xl font-bold">.yassir</p>

      <ul className="flex md:space-x-16 sm:space-x-12">
        <li className="hidden sm:flex">
          <Link href="#projects">
            <p className="hover:text-gray-200 ">projects</p>
          </Link>
        </li>
        <li className="hidden sm:flex">
          <Link href="#skills">
            <p className="hover:text-gray-200">skills</p>
          </Link>
        </li>
        <li className="hidden sm:flex">
          <Link href="#contact">
            <p className="hover:text-gray-200">contact</p>
          </Link>
        </li>
        {/* <li className=" sm:hidden">
          <Link href="#">
            <div>
              <FontAwesomeIcon icon={faBars} size="2x" />
            </div>
          </Link>
        </li> */}
      </ul>
    </div>
  );
};

export default Navbar;
