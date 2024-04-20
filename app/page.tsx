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
          <p className="p-3 text-2xl sm:text-3xl opacity-50">
            front-end developer
          </p>
          <p className="opacity-75 text-center mx-auto font-semibold text-sm md:text-lg my-8 max-w-[400px]">
            I am currently in my 3rd year of my Bachelor’s Degree in Computer
            Science at Ateneo de Davao University. I manage the sales and the
            creatives of my own business. I have a well-rounded skillset
            relevant to today’s job market ranging from website development,
            video editing, to graphic designing.
          </p>
          <div className="mb-40 mt-12 align-middle text-center justify-between space-x-8">
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
          <SectionTitle title="PROJECTS"></SectionTitle>
          <ProjectCard
            title="Chi Boards: Product Catalog Page"
            description="A product catalog page for the small business -- Chi Boards (owned
              by yours truly)."
            projectNumber="01"
            imageSource="https://media.discordapp.net/attachments/1223282823620858039/1230913559459008542/New_Project_17.png?ex=66350c95&is=66229795&hm=68288d2cb206069cf7949565f33186192848b6a67f8ccc7f593b7b80baaa9aed&=&format=webp&quality=lossless&width=728&height=546"
            tech1="NEXTJS"
            tech2="TAILWIND"
            tech3="FIREBASE"
            githubLink="https://github.com/yashiyoshi/chi-boards-website"
            liveLink="https://chiboards.netlify.app"
          ></ProjectCard>
          {/* Want to add more projects? Head on to the ProjectCard.tsx file */}

          <SectionTitle title="OTHER SKILLS"></SectionTitle>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <SkillsCard
              title="Graphic Design"
              imageSrc=""
              description="I'd like to think I'm very meticulate and particular with graphics when I'm assigned tasks related to graphic designing. I have a mordern and minimalistic style when it comes to designing. "
            ></SkillsCard>

            <SkillsCard
              title="Video Editing"
              imageSrc=""
              description="Editing used to be such a big hobby of mine. I used to record minecraft gameplays and funny moments with friends and edit them for fun :)"
            ></SkillsCard>

            <SkillsCard
              title="Business Management"
              imageSrc=""
              description="I'm currently handling everything related to Chi Boards. From the sales, to the creatives, to the marketing, I'm the one in charge of it all."
            ></SkillsCard>
          </div>

          <div className="text-left">
            <Contact />
          </div>
        </div>
      </main>
    </div>
  );
}
