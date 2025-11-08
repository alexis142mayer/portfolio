'use client'
import Navbar from "./components/navbar";
import Summary from "./components/summary";
import ExperienceEducation from "./components/experienceEducation";
import Contact from "./components/contact";
import "./utils/i18n";
import Landing from "./components/landing";
import { Projects } from "./components/projects";


export default function Home() {
  return <div className="flex flex-col justify-center items-center">
    <Navbar />

    <Landing />

    <Summary />

    <Projects />

    <ExperienceEducation />

    <Contact />
  </div>;
}
