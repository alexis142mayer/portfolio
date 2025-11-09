'use client'
import { useTranslation } from "react-i18next";
import MetaBalls from "../utils/ReactBits/MetalBalls";
import { useState, useEffect } from "react";


export default function Contact() {
    const {t} = useTranslation();
    const [darkMode, setDarkMode] = useState(false);

    useEffect(() => {
        return setDarkMode(document.documentElement.classList.contains("dark"));
    });
    
    return <div id="contact" className="h-screen w-fit flex-col justify-center items-center bg-primary p-5 sm:p-15 dark:bg-primary-dark dark:text-white text-lg lg:text-xl">
        <h1 className="text-lg font-extrabold text-orange-700 mb-2 text-center">Contact</h1>
        <h1 className="text-3xl lg:text-4xl font-bold text-center">{t("getInTouch")}</h1>
        <p className="my-5 text-2xl text-center">{t("getInTouchDescription")}</p>
        <div className="h-1/3 sm:h-2/3 w-full flex items-center justify-center">
            <MetaBalls
                color={darkMode ? "#FFFFFF" : "#000000"}
                cursorBallColor={darkMode ? "#FFFFFF" : "#000000"}
                cursorBallSize={2}
                ballCount={15}
                animationSize={30}
                enableMouseInteraction={true}
                enableTransparency={true}
                hoverSmoothness={0.05}
                clumpFactor={1}
                speed={0.2}
            />
        </div>
        <div className="flex flex-col sm:flex-row items-center justify-center font-semibold mt-6">
            <div className="text-center sm:text-left">
                <p className="border-b">{t("emailAddress")}</p>
                <a href="mailto:alexis.g.mayer@gmail.com">alexis.g.mayer@gmail.com</a>
            </div>
            <a href="ResumeAlexisMayer.pdf" target="_blank" rel="noopener noreferrer"  className="inline-flex justify-center items-center p-2 m-5 mx-8 text-base font-medium text-center text-white rounded-lg bg-blue-700 hover:bg-blue-800">
                {t("downloadResume")}
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6 ml-2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3" />
                </svg>
            </a>
            <div className="text-center sm:text-right">
                <p className="border-b">{t("phoneNumber")}</p>
                <p>613-306-2871</p>
            </div>
        </div>
    </div>
}

