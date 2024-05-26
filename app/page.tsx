"use client";

import { useEffect, useState, useRef } from "react";
import { useInView } from "react-intersection-observer";
import Image from "next/image";
import Navbar from "./Components/Navbar";
import Status from "./Components/Status";
import Contact from "./Components/Contact";
import SectionTitle from "./Components/SectionTitle";
import ProjectCard from "./Components/ProjectCard";
import SkillsCard from "./Components/SkillsCard";
import Positions from "./Components/Positions";
import Loader from "./Components/Loader";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedin,
  faGithub,
  faLinkedinIn,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import { Nunito } from "next/font/google";

const nunito = Nunito({
  subsets: ["latin"],
  weight: "variable",
});

export default function Home() {
  const [loading, setLoading] = useState(false);
  const [socialVisible, setSocialVisible] = useState(false);
  const [aboutAnimated, setAboutAnimated] = useState(false);

  const aboutRef = useRef<HTMLDivElement | null>(null);
  const projectsRef = useRef<HTMLDivElement | null>(null);
  const skillsRef = useRef<HTMLDivElement | null>(null);
  const contactRef = useRef<HTMLDivElement | null>(null);

  const { ref: aboutInViewRef, inView: aboutInView } = useInView();
  const { ref: projectsInViewRef, inView: projectsInView } = useInView({
    threshold: 0.5,
  });
  const { ref: skillsInViewRef, inView: skillsInView } = useInView();
  const { ref: contactInViewRef, inView: contactInView } = useInView();

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 5500);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (aboutInView && !aboutAnimated) {
      setAboutAnimated(true);
    }
    setSocialVisible(aboutInView || projectsInView || skillsInView);
  }, [aboutInView, aboutAnimated, projectsInView, skillsInView]);

  return (
    <div
      className={`${nunito.className} px-8 sm:px-16 md:px-18 lg:px-24 py-5 bg-main1`}
    >
      <link rel="icon" href="/images/favicon.png" />

      {loading && <Loader />}

      {!loading && (
        <div>
          <div
            className={`fixed bottom-0 left-0 ml-4 text-main2 hidden md:block transition-opacity duration-500 ${
              socialVisible ? "opacity-100" : "opacity-0"
            }`}
          >
            <ul className="flex flex-col items-center space-y-8 translate-x-[22px]">
              <a href="https://github.com/yashiyoshi" target="_blank">
                <li className="hover:text-yellow hover:cursor-pointer hover:opacity-100 transition duration-300 ease-in-out opacity-75">
                  <FontAwesomeIcon icon={faGithub} className="fa-xl" />
                </li>
              </a>
              <a href="https://linkedin.com/in/yassir-utara" target="_blank">
                <li className="hover:text-yellow hover:cursor-pointer hover:opacity-100 transition duration-300 ease-in-out opacity-75">
                  <FontAwesomeIcon icon={faLinkedinIn} className="fa-xl" />
                </li>
              </a>
              <a href="https://instagram.com/ysrutara" target="_blank">
                <li className="hover:text-yellow hover:cursor-pointer hover:opacity-100 transition duration-300 ease-in-out opacity-75">
                  <FontAwesomeIcon icon={faInstagram} className="fa-xl" />
                </li>
              </a>
            </ul>
            <div className="w-[1.5px] h-24 mt-8 translate-x-8 bg-main2 opacity-75"></div>
          </div>

          <div
            className={`fixed bottom-0 right-0 text-main2 hidden md:block transition-opacity duration-500 ${
              socialVisible ? "opacity-100" : "opacity-0"
            }`}
          >
            <div className="flex flex-col items-center space-y-4">
              <a
                href="mailto:yassirutara@gmail.com"
                className="opacity-75 transform rotate-90 hover:text-yellow hover:opacity-100 transition duration-300 ease-in-out translate-x-12 -translate-y-24 tracking-wider"
              >
                yassirutara@gmail.com
              </a>
              <div className="w-[1.5px] h-24  mt-8 translate-x-12 bg-main2 opacity-75"></div>
            </div>
          </div>

          <Navbar />
          <Status />
          <main className="flex min-h-screen flex-col items-center text-center justify-between bg-main1">
            <div className="text-main2">
              <div className=" animate-fade-in opacity-0">
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
              </div>

              <Positions />
              <div className="animate-fade-in-delay-1 opacity-0">
                <p className="opacity-75 text-center mx-auto font-semibold text-sm md:text-lg my-8 max-w-[400px]">
                  I am currently in my 4th year of my Bachelor’s Degree in
                  Computer Science at Ateneo de Davao University. I create (and
                  sometimes design) website pages from time to time! I am
                  currently exploring new technologies, specifically in cloud
                  computing and machine learning.
                </p>
              </div>

              <div className="mb-40 mt-10 align-middle text-center justify-between space-x-8 opacity-0 animate-fade-in-delay-1">
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
              <div
                id="aboutme"
                ref={(el) => {
                  aboutInViewRef(el);
                  aboutRef.current = el;
                }}
                className="about-section"
              >
                <div>
                  <SectionTitle title="ABOUT ME" />
                </div>
                <div className="flex md:flex-row flex-col justify-between mx-12 text-main2 text-justify md:text-left">
                  <div
                    className={`md:w-1/2 min-w-[350px] transition-opacity duration-2000 ease-out opacity-0 ${
                      aboutAnimated ? "animate-fade-in" : ""
                    }`}
                  >
                    <p className="opacity-75">
                      Hello! My name is Yassir and I enjoy creating things that
                      are fun and relevant to my hobbies. My interest in this
                      field started when I stumbled upon an app that hosted
                      trivia games. Upon finding out that there was a way to
                      scrape the questions off of the internet using code, I was
                      intrigued and decided to learn more about the tech field.
                      That was the start of it all.
                    </p>
                    <p className="mt-8 opacity-75">
                      Fast-forward to today, here I am in my last year of
                      college, working on various projects that combine my
                      passion for technology and love for creating fun and
                      functional apps.
                    </p>
                    <p className="mt-8 opacity-75">
                      For this year, I plan to focus on learning more about
                      cloud computing and improving my proficiency in machine
                      learning. These are areas that I believe will be essential
                      in the future, and I am excited to dive deeper into them.
                    </p>
                    <div className="flex justify-between my-12">
                      <ul>
                        <li>
                          <span className="text-yellow text-opacity-100 text-lg mr-2">
                            ‣
                          </span>
                          <span className="opacity-75">JavaScript (ES6+)</span>
                        </li>
                        <li>
                          <span className="text-yellow text-opacity-100 text-lg mr-2">
                            ‣
                          </span>
                          <span className="opacity-75">React</span>
                        </li>
                        <li>
                          <span className="text-yellow text-opacity-100 text-lg mr-2">
                            ‣
                          </span>
                          <span className="opacity-75">NextJS</span>
                        </li>
                      </ul>
                      <ul className="ml-16">
                        <li>
                          <span className="text-yellow text-opacity-100 text-lg mr-2">
                            ‣
                          </span>
                          <span className="opacity-75">Django</span>
                        </li>
                        <li>
                          <span className="text-yellow text-opacity-100 text-lg mr-2">
                            ‣
                          </span>
                          <span className="opacity-75">Firebase</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div
                    className={`relative my-12 md:my-0 mx-12 align-right opacity-0 transition-opacity duration-300 ${
                      aboutAnimated ? "animate-fade-in-delay-1" : ""
                    }`}
                  >
                    <div className="hover:-translate-x-2 hover:-translate-y-2 transition duration-300 ease-in-out">
                      <Image
                        src="https://i.postimg.cc/zBnW5d9d/Yassir-Portrait.png"
                        width={300}
                        height={300}
                        alt="Picture of Yassir"
                        className="rounded relative z-10 min-h-[250px] min-w-[250px]"
                      />
                    </div>
                  </div>
                </div>
              </div>


              {/* TODO
              - create fade in effect for bg of each project, subsequently fading in for when it is in view.
              - maybe fade in effect also for the stack used for every project
              - for the skills section, have their positions move to the top left (similar to hover effect) */}

              <div
                id="projects"
                ref={(el) => {
                  projectsInViewRef(el);
                  projectsRef.current = el;
                }}
              >
                <div>
                  <SectionTitle title="PROJECTS" />
                </div>
                <ProjectCard
                  title="Yassir's Playground"
                  description="A project where I experiment my web development skills through games and other knick-knacks."
                  projectNumber="01"
                  imageSource="https://i.postimg.cc/jSkk9TJQ/2.png"
                  tech1="NEXTJS"
                  tech2="TAILWIND"
                  tech3=""
                  githubLink="https://github.com/yashiyoshi/yassir-playground"
                  liveLink="https://yassir-playground.netlify.app"
                />
                <ProjectCard
                  title="Chi Boards: Product Catalog Page"
                  description="A product catalog page for the small business -- Chi Boards (owned by yours truly)."
                  projectNumber="02"
                  imageSource="https://i.postimg.cc/52tRnyj2/1.png"
                  tech1="NEXTJS"
                  tech2="TAILWIND"
                  tech3="FIREBASE"
                  githubLink="https://github.com/yashiyoshi/chi-boards-website"
                  liveLink="https://chiboards.netlify.app"
                />
              </div>

              <div
                id="skills"
                ref={(el) => {
                  skillsInViewRef(el);
                  skillsRef.current = el;
                }}
              >
                <SectionTitle title="OTHER SKILLS" />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-2">
                <SkillsCard
                  title="UI Designing"
                  imageSrc="https://i.postimg.cc/mgLy3Skt/UI-Designing.png"
                  description="I take pride in my meticulous attention to detail, especially when it comes to graphic design tasks. My style leans towards the modern and minimalistic; reflecting a focused and refined approach to design."
                />
                <SkillsCard
                  title="Video Editing"
                  imageSrc="https://i.postimg.cc/CxcHcfnJ/New-graphics-editing.png"
                  description="Editing used to be such a big hobby of mine. I used to record minecraft gameplays and funny moments with friends and edit them for fun :)"
                />
                <SkillsCard
                  title="Business Management"
                  imageSrc="https://i.postimg.cc/Gp9PVhkR/business-management.png"
                  description="I'm currently handling everything related to Chi Boards. From the sales, to the creatives, up to the marketing and customer service, I have managed to handle it all."
                />
              </div>

              <div
                className="text-left"
                id="contacts"
                ref={(el) => {
                  contactInViewRef(el);
                  contactRef.current = el;
                }}
              >
                <Contact />
              </div>
            </div>
          </main>
        </div>
      )}
    </div>
  );
}
