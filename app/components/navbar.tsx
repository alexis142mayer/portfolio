'use client'
import { useState } from "react";
import i18n from 'i18next';
import { useTranslation } from "react-i18next";
import GlassSurface from "../utils/ReactBits/GlassSurface";

export default function Navbar() {
  const [darkMode, setDarkMode] = useState(false);
  
  const [t, i18n] = useTranslation();
  const changeLang = () => {
      const currentLang = i18n.language;
      i18n.changeLanguage(currentLang === "en" ? "fr" : "en");
  }

  return <div className="w-5/6 flex justify-between items-center py-2">
    <h1 className="text-2xl font-semibold text-white">
      Alexis.M()
    </h1>
    <GlassSurface height={50} width={550} borderRadius={50} className="flex justify-between items-center hidden lg:flex">
      <div className="flex justify-between items-center hidden lg:flex">
        <a href="#summary">
            <h2 className="text-lg font-semibold text-white underline underline-offset-1">{t("summary")}</h2>
        </a>
        <a href="#experienceEducation" className="mx-9">
            <h2 className="text-lg font-semibold text-white underline underline-offset-1">{t("experienceEducation")}</h2>
        </a>
        <a href="#contact">
            <h2 className="text-lg font-semibold text-white underline underline-offset-1">{t("contact")}</h2>
        </a>
      </div>
    </GlassSurface>
    <div className="flex">
      <a href="#" onClick={() => changeLang()}>
        <GlassSurface height={50} width={50} borderRadius={50}>
          <h2 className="text-lg font-semibold text-white underline underline-offset-1">{String(i18n.language).toLocaleUpperCase() === "FR" ? "EN" : "FR"}</h2>
        </GlassSurface>
      </a>
      <a href="#" className="ml-4" onClick={() => {
        setDarkMode(!darkMode);
        document.documentElement.classList.toggle("dark");
      }}>
        <GlassSurface height={50} width={50} borderRadius={50}>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-8 stroke-white">
            {
              darkMode ?
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z" /> :
              <path fillRule="evenodd" d="M9.528 1.718a.75.75 0 0 1 .162.819A8.97 8.97 0 0 0 9 6a9 9 0 0 0 9 9 8.97 8.97 0 0 0 3.463-.69.75.75 0 0 1 .981.98 10.503 10.503 0 0 1-9.694 6.46c-5.799 0-10.5-4.7-10.5-10.5 0-4.368 2.667-8.112 6.46-9.694a.75.75 0 0 1 .818.162Z" clipRule="evenodd" />
            }
          </svg>
        </GlassSurface>
      </a>
    </div>
  </div>;
}
