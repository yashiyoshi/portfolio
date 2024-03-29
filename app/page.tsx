import { Nunito } from "next/font/google";
import Navbar from "./Components/Navbar";
import Status from "./Components/Status";
import Contact from "./Components/Contact";
import SectionTitle from "./Components/SectionTitle";
import ProjectCard from "./Components/ProjectCard";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import SkillsCard from "./Components/SkillsCard";

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
            <FontAwesomeIcon icon={faGithub} size="2x" className="px-5" />
          </div>
        </div>

        <div className="px-10">
          <SectionTitle title="PROJECTS"></SectionTitle>
          <ProjectCard></ProjectCard>
          {/* Want to add more projects? Head on to the ProjectCard.tsx file */}

          <SectionTitle title="OTHER SKILLS"></SectionTitle>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <SkillsCard
              title="Graphic Design"
              imageSrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxJrW4JUqREwIZ3uJAEn8oTDfDPmh-HsxJf8s9gk3INw&s"
              description="Did you know? Orange cats are usually male. In fact, about 80% of all orange tabbies are male."
            ></SkillsCard>

            <SkillsCard
            title="Video Editing"
            imageSrc="https://i.ytimg.com/vi/TC18L-ntFI4/maxresdefault.jpg"
            description="Cats love to hunt prey (like you)"></SkillsCard>

            <SkillsCard
            title="Business Management"
            imageSrc="https://t3.ftcdn.net/jpg/06/08/87/72/360_F_608877257_Fzqg9kgG6hcR9hoVCUyg8RrmQWkv2JTM.jpg"
            description="Cats love business"></SkillsCard>
          </div>

          <div className="text-left">
            <Contact />
          </div>
        </div>
      </main>
    </div>
  );
}
