'use client'
import { useTranslation } from "react-i18next";
import LiquidChrome from "./utils/ReactBits/LiquidChrome";
import Navbar from "./components/navbar";
import { useEffect, useState } from "react";
import Summary from "./components/summary";
import ExperienceEducation from "./components/experienceEducation";
import Contact from "./components/contact";
import AnimatedContent from "./utils/ReactBits/AnimatedContent";
import "./utils/i18n";


export default function Home() {
  const {t} = useTranslation();
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    setDarkMode(document.documentElement.classList.contains("dark"));
  });

  return <div className="flex flex-col justify-center items-center relative">
    <Navbar />

    <div className="flex justify-center w-full h-full absolute top-0 left-0 -z-1">
      <LiquidChrome
        baseColor={[0.1, 0.1, 0.1]}
        speed={0.2}
        amplitude={0.3}
        interactive={false}
      />
    </div>
    
    <section className="h-screen flex flex-col justify-center items-center">
      <AnimatedContent
      distance={80}
      direction="vertical"
      reverse={false}
      duration={1.2}
      ease="power3.out"
      initialOpacity={0}
      animateOpacity
      scale={1}
      threshold={0.1}
      delay={0.2}
      >
        <h1 className="mb-2 text-2xl font-semibold text-white text-6xl text-center">
          {t("welcomeMessagePart1")}
          <b className="bg-radial-[at_50%_75%] from-sky-200 via-blue-400 to-indigo-900 to-90% bg-clip-text text-transparent"> Alexis Mayer </b>
          {t("welcomeMessagePart2")}
        </h1>
      </AnimatedContent>
    </section>

    <section id="summary" className="relative h-screen w-9/10 my-1 flex justify-center">
      <Summary />
    </section>

    <section id="experienceEducation" className="h-fit w-9/10 my-1 flex justify-center">
    
      <AnimatedContent
      distance={80}
      direction="vertical"
      reverse={false}
      duration={0.8}
      ease="power3.out"
      initialOpacity={0}
      animateOpacity
      scale={1}
      threshold={0.1}
      delay={0}
      >
        <ExperienceEducation />
      </AnimatedContent>
    </section>

    <section id="contact" className="relative h-screen w-9/10 my-1 flex justify-center items-center">
      <Contact />
    </section>
  </div>;
}
