'use client'
import AnimatedContent from "../utils/ReactBits/AnimatedContent";
import { useTranslation } from "react-i18next";
import selftPortrait from "../utils/images/portrait.jpg"
import Image from "next/image";


export default function Summary() {
    const {t} = useTranslation();
    
    return <div id="summary" className="h-fit sm:h-screen w-full flex flex-col sm:flex-row justify-around items-center bg-primary dark:bg-primary-dark dark:text-white py-15">
        <div className="w-9/10 sm:w-1/2 lg:2/3 p-2 lg:p-6 text-lg">
            <p className="py-5 text-lg font-extrabold text-orange-700">{t("summarySubtitle")}</p>
            <h1 className="text-2xl lg:text-4xl font-bold mb-4">{t("summaryTitle")}</h1>
            <p className="py-3 lg:py-8">{t("summaryDescription")}</p>
            <ul className="list-inside">
                <AnimatedContent
                distance={80}
                direction="horizontal"
                reverse={false}
                duration={0.8}
                ease="power3.out"
                initialOpacity={0}
                animateOpacity
                scale={1}
                threshold={0.1}
                delay={0}
                >
                <li className="flex items-center p-2">
                    <svg className="w-3.5 h-3.5 me-2 text-green-500 dark:text-green-400 shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"/>
                    </svg>
                    {t("summaryPoint1")}
                </li>
                </AnimatedContent>
                <AnimatedContent
                distance={80}
                direction="horizontal"
                reverse={false}
                duration={0.8}
                ease="power3.out"
                initialOpacity={0}
                animateOpacity
                scale={1}
                threshold={0.1}
                delay={0.2}
                >
                <li className="flex items-center p-2">
                    <svg className="w-3.5 h-3.5 me-2 text-green-500 dark:text-green-400 shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"/>
                    </svg>
                    {t("summaryPoint4")}
                </li>
                </AnimatedContent>
                <AnimatedContent
                distance={80}
                direction="horizontal"
                reverse={false}
                duration={0.8}
                ease="power3.out"
                initialOpacity={0}
                animateOpacity
                scale={1}
                threshold={0.1}
                delay={0.4}
                >
                <li className="flex items-center p-2">
                    <svg className="w-3.5 h-3.5 me-2 text-green-500 dark:text-green-400 shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"/>
                    </svg>
                    {t("summaryPoint2")}
                </li>
                </AnimatedContent>
                <div className="hidden lg:block">
                    <AnimatedContent
                        distance={80}
                        direction="horizontal"
                        reverse={false}
                        duration={0.8}
                        ease="power3.out"
                        initialOpacity={0}
                        animateOpacity
                        scale={1}
                        threshold={0.1}
                        delay={0.6}
                    >
                        <li className="flex items-center p-2">
                            <svg className="w-3.5 h-3.5 me-2 text-green-500 dark:text-green-400 shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"/>
                            </svg>
                            {t("summaryPoint5")}
                        </li>
                    </AnimatedContent>
                    <AnimatedContent
                        distance={80}
                        direction="horizontal"
                        reverse={false}
                        duration={0.8}
                        ease="power3.out"
                        initialOpacity={0}
                        animateOpacity
                        scale={1}
                        threshold={0.1}
                        delay={0.8}
                    >
                        <li className="flex items-center p-2">
                            <svg className="w-3.5 h-3.5 me-2 text-green-500 dark:text-green-400 shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"/>
                            </svg>
                            {t("summaryPoint3")}
                        </li>
                    </AnimatedContent>
                    <AnimatedContent
                        distance={80}
                        direction="horizontal"
                        reverse={false}
                        duration={0.8}
                        ease="power3.out"
                        initialOpacity={0}
                        animateOpacity
                        scale={1}
                        threshold={0.1}
                        delay={1.0}
                    >
                        <li className="flex items-center p-2">
                            <svg className="w-3.5 h-3.5 me-2 text-green-500 dark:text-green-400 shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"/>
                            </svg>
                            {t("summaryPoint6")}
                        </li>
                    </AnimatedContent>
                </div>
        </ul>
        </div>
        <Image src={selftPortrait} alt="Self Portrait" className="w-8/10 sm:w-1/3 h-1/3 sm:h-2/3 rounded-4xl object-cover shadow-xl/30 my-2" />
    </div>
}