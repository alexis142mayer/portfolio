'use client'
import { useTranslation } from "react-i18next";
import AnimatedContent from "../utils/ReactBits/AnimatedContent";
import LiquidChrome from "../utils/ReactBits/LiquidChrome";
import { useState, useEffect } from "react";


export default function Landing() {
    const {t} = useTranslation();
    const [darkMode, setDarkMode] = useState(false);

    useEffect(() => {
        return setDarkMode(document.documentElement.classList.contains("dark"));
    });
    
    return <div className="h-screen w-full flex flex-col justify-center items-center text-center">
        <LiquidChrome
        baseColor={darkMode ? [0.1, 0.1, 0.1] : [0.3, 0.3, 0.3]}
        speed={0.2}
        amplitude={0.3}
        interactive={false}
        className="w-full h-12/11 absolute top-0 left-0"
        />

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
            <h1 className="mb-4 px-3 text-4xl font-extrabold tracking-tight leading-none md:text-5xl lg:text-6xl dark:text-white">
                {t("welcomeMessageTitle")}
            </h1>
            <p className="mb-8 px-3 text-lg font-semibold dark:text-gray-300 lg:text-2xl sm:px-16 lg:px-48">
                {t("welcomeMessageSubTitle")}
            </p>
        </AnimatedContent>

        <div className="flex justify-center items-center">
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
            delay={0.4}
            >
                <a href="#summary" className="flex justify-center items-center sm:mb-0 py-3 px-5 mr-4 text-base font-medium text-center text-white rounded-lg bg-orange-700 hover:bg-orange-800">
                    {t("getStarted")}
                    <svg className="w-3.5 h-3.5 ms-2 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                    </svg>
                </a>
            </AnimatedContent>
            
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
            delay={0.4}
            >
                <a href="#contact" className="flex justify-center items-center py-3 px-5 ml-4 sm:ms-4 font-medium text-orange-700 focus:outline-none bg-white rounded-lg border border-orange-700 hover:bg-gray-100 hover:text-orange-700">
                    {t("contactMe")}
                </a>
            </AnimatedContent>
        </div>
    </div>
}