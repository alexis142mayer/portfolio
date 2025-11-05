import { useTranslation } from "react-i18next";
import GlassSurface from "../utils/ReactBits/GlassSurface";

export default function Contact() {
    const {t} = useTranslation();
    
    return <>
        <GlassSurface height={550} width={70} borderRadius={50} className="mr-4"/>
        <GlassSurface height={550} width={750} borderRadius={50}>
        <div className="text-white">
            <h1 className="text-4xl font-bold">{t("getInTouch")}</h1>
            <p className="my-8 text-2xl">{t("getInTouchDescription")}</p>
            <div className="w-full flex flex-col items-end font-semibold text-right mt-8">
                <a href="mailto:alexis.g.mayer@gmail.com" className="underline text-2xl">alexis.g.mayer@gmail.com</a>
                <p className="text-2xl py-4">613-306-2871</p>
                <a href="ResumeAlexisMayer.pdf" target="_blank" rel="noopener noreferrer" className="w-fit text-3xl bg-primary dark:bg-neutral-400/20 text-neutral-600 dark:text-neutral-300 border border-neutral-400/20 p-3 rounded-4xl flex justify-center items-center text-left">
                    {t("downloadResume")}
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-8 ml-4">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3" />
                    </svg>
                </a>
            </div>
        </div>
        </GlassSurface>
    </>
}