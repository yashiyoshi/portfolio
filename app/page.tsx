import { Nunito } from "next/font/google";
import Navbar from "./Components/Navbar";
import Status from "./Components/Status";
import Contact from "./Components/Contact";
import SectionTitle from "./Components/SectionTitle";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub} from "@fortawesome/free-brands-svg-icons";
const nunito = Nunito({
  subsets: ["latin"],
  weight: "variable",
});

export default function Home() {
  return (
    <div className={`${nunito.className} px-28 py-5 bg-main1`}>
      <Navbar></Navbar>
      <Status></Status>
      <main className="flex min-h-screen flex-col items-center text-center justify-between p-16 bg-main1">
        <div className="text-main2">
          <h1 className="text-6xl font-bold">Hey! I am Yassir Utara.</h1>
          <h2 className="p-3 text-3xl opacity-50">front-end developer</h2>
          <p className="opacity-75 p-14 w-1/2 text-center mx-auto font-semibold">
            Lorem ipsum dolor sit amet consectetur. Morbi duis viverra turpis
            morbi a. Commodo sed volutpat sit sapien. Sit lorem lorem et ut
            urna. Phasellus sit tortor vestibulum phasellus fringilla vitae
            vivamus. Risus tristique varius ac pellentesque pellentesque nulla
            faucibus.
          </p>
          <div className="pb-40 align-middle text-center justify-between">
            <FontAwesomeIcon icon={faLinkedin} size="2x" className="px-5" />
            <FontAwesomeIcon icon={faGithub} size="2x" className="px-5"/>

          </div>
        </div>

        <div className="px-10">
          <SectionTitle title="PROJECTS"></SectionTitle>
          <SectionTitle title="OTHER SKILLS"></SectionTitle>

          <div className="text-left">
            <Contact />
          </div>
        </div>
      </main>
    </div>
  );
}
