import { Nunito } from "next/font/google";
import Navbar from "./Components/Navbar";
import Status from "./Components/Status";
import Contact from "./Components/Contact";
import SectionTitle from "./Components/SectionTitle";
import ProjectCard from "./Components/ProjectCard";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import SkillsCard from "./Components/SkillsCard";
import Positions from "./Components/Positions";

const nunito = Nunito({
  subsets: ["latin"],
  weight: "variable",
});

export default function Home() {
  return (
    <div
      className={`${nunito.className} px-8 sm:px-16 md:px-18 lg:px-24 py-5 bg-main1`}
    >
      <link rel="icon" href="/images/favicon.png" />
      <Navbar></Navbar>
      <Status></Status>
      <main className="flex min-h-screen flex-col items-center text-center justify-between bg-main1">
        <div className="text-main2">
          <div className="text-6xl font-bold mt-8 md:hidden">
            <p className="text-2xl opacity-50">Hey! I am</p>
            <p className="gradient-text text-transparent animate-gradient">
              Yassir Utara.
            </p>
          </div>
          <span className="text-6xl font-bold mt-8 hidden md:inline-block">
            Hey! I am
          </span>
          <span className="gradient-text text-transparent animate-gradient text-6xl font-bold mt-8 hidden md:inline-block ml-2 ">
            Yassir Utara.
          </span>
          <Positions />
          <p className="opacity-75 text-center mx-auto font-semibold text-sm md:text-lg my-8 max-w-[400px]">
            I am currently in my 3rd year of my Bachelor’s Degree in Computer
            Science at Ateneo de Davao University. I manage the sales and the
            creatives of my own business. I have a well-rounded skillset
            relevant to today’s job market ranging from website development,
            video editing, to graphic designing.
          </p>
          <div className="mb-40 mt-10 align-middle text-center justify-between space-x-8">
            <a
              href="https://linkedin.com/in/yassir-utara"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-opacity duration-300 hover:opacity-75"
            >
              <FontAwesomeIcon icon={faLinkedin} size="2x" />
            </a>
            <a
              href="https://github.com/yashiyoshi"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-opacity duration-300 hover:opacity-75"
            >
              <FontAwesomeIcon icon={faGithub} size="2x" />
            </a>
          </div>
        </div>

        <div className="lg:mx-32">
          <div id="projects">
            <SectionTitle title="PROJECTS"></SectionTitle>
          </div>
          {/* image SHOULD be 800x450px. edited with Canva*/}
          <ProjectCard
            title="Chi Boards: Product Catalog Page"
            description="A product catalog page for the small business -- Chi Boards (owned
              by yours truly)."
            projectNumber="01"
            imageSource="https://i.postimg.cc/85GhJp6Q/Project-1.png"
            tech1="NEXTJS"
            tech2="TAILWIND"
            tech3="FIREBASE"
            githubLink="https://github.com/yashiyoshi/chi-boards-website"
            liveLink="https://chiboards.netlify.app"
          ></ProjectCard>

          <ProjectCard
            title="Yassir's Playground"
            description="A project where I experiment my web development skills, through games and other knick-knacks."
            projectNumber="02"
            imageSource="https://i.postimg.cc/85GhJp6Q/Project-1.png"
            tech1="NEXTJS"
            tech2="TAILWIND"
            tech3=""
            githubLink="https://github.com/yashiyoshi/yassir-playground"
            liveLink="https://yassir-playground.netlify.app"
          ></ProjectCard>

          <div id="skills">
            <SectionTitle title="OTHER SKILLS"></SectionTitle>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-2">
            <SkillsCard
              title="UI Designing"
              imageSrc="https://i.postimg.cc/mgLy3Skt/UI-Designing.png"
              description="I take pride in my meticulous attention to detail, especially when it comes to graphic design tasks. My style leans towards the modern and minimalistic, reflecting a focused and refined approach to design. "
            ></SkillsCard>

            <SkillsCard
              title="Video Editing"
              imageSrc="https://i.postimg.cc/CxcHcfnJ/New-graphics-editing.png"
              description="Editing used to be such a big hobby of mine. I used to record minecraft gameplays and funny moments with friends and edit them for fun :)"
            ></SkillsCard>

            <SkillsCard
              title="Business Management"
              imageSrc="https://i.postimg.cc/Gp9PVhkR/business-management.png"
              description="I'm currently handling everything related to Chi Boards. From the sales, to the creatives, to the marketing, I'm the one in charge of it all."
            ></SkillsCard>
          </div>

          {/* <SectionTitle title="GRAPHICS"></SectionTitle> */}

          <div className="text-left" id="contacts">
            <Contact />
          </div>
        </div>
      </main>
    </div>
  );
}
