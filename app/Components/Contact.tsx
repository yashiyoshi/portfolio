import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedinIn, faGithub, faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";

const Contact = () => {
  const email = "yassirutara@gmail.com";

  return (
    <div className="text-main2 font-bold text-3xl pt-32">
      <span className="text-yellow pr-2 absolute -translate-x-3 -translate-y-0.5">
        |
      </span>
      <span className="tracking-wider items-start">DONT BE A STRANGER</span>
      <div className="opacity-50 font-normal text-2xl">
        <p className="py-10">Let's make something exciting together!</p>
        <p className="py-10">
          If you have an opportunity or any project that would benefit from my
          involvement, feel free to reach me at at any of my socials below.
          I'll be delighted to talk to you :)
        </p>
      </div>
      <div className="flex flex-col sm:flex-row sm:justify-between justify-center align-middle items-center pt-56 pb-10 font-normal">
        <p className="text-xs md:text-sm sm:self-end opacity-50">
          @ Yassir Utara, Portfolio 2024 | Made from scratch with NextJS
        </p>
        <ul className="flex space-x-4 text-sm text-yellow mt-4">
          <li>
            <a
              href={`mailto:${email}`}
              className="flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-secondary1 transition-opacity duration-300 hover:opacity-75"
            >
              <FontAwesomeIcon icon={faEnvelope} size="1x" />
            </a>
          </li>
          <li>
            <a
              href="https://instagram.com/ysrutara"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-opacity duration-300 hover:opacity-75"
            >
              <div className="flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-secondary1">
                <FontAwesomeIcon icon={faInstagram} size="1x" />
              </div>
            </a>
          </li>
          <li>
            <a
              href="https://linkedin.com/in/yassir-utara"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-opacity duration-300 hover:opacity-75"
            >
              <div className="flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-secondary1">
                <FontAwesomeIcon icon={faLinkedinIn} size="1x" />
              </div>
            </a>
          </li>
          <li>
            <a
              href="https://github.com/yashiyoshi"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-opacity duration-300 hover:opacity-75"
            >
              <div className="flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-secondary1">
                <FontAwesomeIcon icon={faGithub} size="1x" />
              </div>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Contact;
