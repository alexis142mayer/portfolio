"use client";

import { useTranslation } from "react-i18next";
import { Carousel, Card } from "../utils/AcerternityUi/appleCardsCarousel";
import AnimatedContent from "../utils/ReactBits/AnimatedContent";

export function Projects() {
  const {t} = useTranslation();

  const data = [
    {
      category: t("AI"),
      title: t("projectA"),
      src: "https://plus.unsplash.com/premium_photo-1700942979297-57a1077c7004?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=870",
      content: <>
          <div className="bg-[#F5F5F7] dark:bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4">
            <div className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto">
              <span className="font-bold text-neutral-700 dark:text-neutral-200 mb-4">
                {t("objectives")}
              </span>
              <br/>
              {t("projectAObjectiveDescription")}
            </div>
          </div>
          <div className="bg-[#F5F5F7] dark:bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4">
            <div className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto">
              <span className="font-bold text-neutral-700 dark:text-neutral-200 mb-4">
                {t("technologies")}
              </span>
              <br/>
              <ul className="list-disc my-4 ml-10">
                <li>AWS Worspace</li>
                <li>JFrog</li>
                <li>React</li>
                <li>BootStrap</li>
                <li>SQL</li>
              </ul>
            </div>
          </div>
          <div className="bg-[#F5F5F7] dark:bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4">
            <div className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto">
              <span className="font-bold text-neutral-700 dark:text-neutral-200 mb-4">
                {t("role")}
              </span>
              <br/>
              {t("projectARoleDescription")}
            </div>
          </div>
      </>,
    },
    {
      category: t("mobileApproach"),
      title: t("projectB"),
      src: "https://images.unsplash.com/photo-1602081957921-9137a5d6eaee?q=80&w=2793&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      content: <>
          <div className="bg-[#F5F5F7] dark:bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4">
            <div className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto">
              <span className="font-bold text-neutral-700 dark:text-neutral-200 mb-4">
                {t("objectives")}
              </span>
              <br/>
              {t("projectBObjectiveDescription")}
            </div>
          </div>
          <div className="bg-[#F5F5F7] dark:bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4">
            <div className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto">
              <span className="font-bold text-neutral-700 dark:text-neutral-200 mb-4">
                {t("technologies")}
              </span>
              <br/>
              <ul className="list-disc my-4 ml-10">
                <li>PowerApps</li>
                <li>Dataverse</li>
                <li>Power Platform</li>
                <li>Power Automate</li>
                <li>Power Bi</li>
              </ul>
            </div>
          </div>
          <div className="bg-[#F5F5F7] dark:bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4">
            <div className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto">
              <span className="font-bold text-neutral-700 dark:text-neutral-200 mb-4">
                {t("role")}
              </span>
              <br/>
              {t("projectBRoleDescription")}
            </div>
          </div>
      </>,
    },
    {
      category: t("caseManagement"),
      title: t("projectC"),
      src: "https://images.unsplash.com/photo-1599202860130-f600f4948364?q=80&w=2515&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      content: <>
          <div className="bg-[#F5F5F7] dark:bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4">
            <div className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto">
              <span className="font-bold text-neutral-700 dark:text-neutral-200 mb-4">
                {t("objectives")}
              </span>
              <br/>
              {t("projectCObjectiveDescription")}
            </div>
          </div>
          <div className="bg-[#F5F5F7] dark:bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4">
            <div className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto">
              <span className="font-bold text-neutral-700 dark:text-neutral-200 mb-4">
                {t("technologies")}
              </span>
              <br/>
              <ul className="list-disc my-4 ml-10">
                <li>PowerApps</li>
                <li>Dataverse</li>
                <li>Power Platform</li>
                <li>Power Automate</li>
                <li>GcNotify</li>
                <li>Power Bi</li>
              </ul>
            </div>
          </div>
          <div className="bg-[#F5F5F7] dark:bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4">
            <div className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto">
              <span className="font-bold text-neutral-700 dark:text-neutral-200 mb-4">
                {t("role")}
              </span>
                <br/>
              {t("projectCRoleDescription")}
            </div>
          </div>
      </>,
    },
    {
      category: t("internalEfficiency"),
      title: t("projectD"),
      src: "https://images.unsplash.com/photo-1511984804822-e16ba72f5848?q=80&w=2048&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      content: <>
          <div className="bg-[#F5F5F7] dark:bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4">
            <div className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto">
              <span className="font-bold text-neutral-700 dark:text-neutral-200 mb-4">
                {t("objectives")}
              </span>
              <br/>
              {t("projectDObjectiveDescription")}
            </div>
          </div>
          <div className="bg-[#F5F5F7] dark:bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4">
            <div className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto">
              <span className="font-bold text-neutral-700 dark:text-neutral-200 mb-4">
                {t("technologies")}
              </span>
              <br/>
              <ul className="list-disc my-4 ml-10">
                <li>PowerApps</li>
                <li>Dataverse</li>
                <li>Power Platform</li>
                <li>Power Automate</li>
                <li>GcNotify</li>
                <li>Power Bi</li>
              </ul>
            </div>
          </div>
          <div className="bg-[#F5F5F7] dark:bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4">
            <div className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto">
              <span className="font-bold text-neutral-700 dark:text-neutral-200 mb-4">
                {t("role")}
              </span>
                <br/>
              {t("projectDRoleDescription")}
            </div>
          </div>
      </>,
    },
  ];

  const cards = data.map((card, index) => (
    <Card key={card.src} card={card} index={index} />
  ));

  return (
    <div className="w-full h-full bg-primary dark:bg-primary-dark py-30">
      <div className="py-10 bg-gradient-to-t from-blue-50 dark:from-zinc-700 to-[var(--bg-primary)]">
        <p className="pl-4 pb-4 text-left text-lg font-extrabold text-orange-700">{t("projects")}</p>
        <h2 className="pl-4 text-2xl md:text-3xl font-bold text-neutral-800 dark:text-neutral-200 font-sans pb-4 text-left">
          {t("projectsTitle")}
        </h2>
        <h3 className="pl-4 text-xl md:text-xl text-neutral-800 dark:text-neutral-200 font-sans text-left">
          {t("projectsSubTitle")}
        </h3>
      </div>
      <Carousel items={cards} />
    </div>
  );
}
