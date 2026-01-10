"use client";

import { EducationEntry } from "@/components/education-entry";
import { educationData } from "@/data/education";
import { PublicationEntry } from "@/components/publication-entry";
import { publicationData } from "@/data/publication";
import { ProfileSection } from "@/components/profile-section";
import { aboutMe } from "@/data/aboutme";
import { ExperienceEntry } from "@/components/experience-entry";
import { experienceData } from "@/data/experience";
import { PortfolioEntry } from "@/components/portfolio-entry";
import { portfolioData } from "@/data/portfolio";
import { TalkEntry } from "@/components/talk-entry";
import { talksData } from "@/data/talks";
import { useState } from "react";

type Tab = "education" | "experience" | "projects" | "publications" | "talks";

export default function Home() {
  const [activeTab, setActiveTab] = useState<Tab>("education");

  return (
    <div className="min-h-screen bg-[#FFFCF8]">
      <div className="max-w-screen-lg mx-auto px-8 py-24">
        {/* Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-2">
          {/* Left Column - Fixed Info */}
          <div className="col-span-12 md:col-span-4 space-y-12 mb-8 md:mb-0">
            {/* Profile */}
            <div className="md:sticky top-12 space-y-8">
              <ProfileSection aboutMe={aboutMe} />
            </div>
          </div>

          {/* Right Column - Scrolling Content */}
          <div className="col-span-12 md:col-span-7 md:col-start-6 space-y-8">
            {/* About section */}
            {aboutMe.description && (
              <section>
                <p
                  className="font-serif text-sm leading-relaxed text-zinc-700 [&_a]:underline [&_a]:text-zinc-900 [&_a:hover]:text-zinc-600"
                  dangerouslySetInnerHTML={{ __html: aboutMe.description }}
                />
              </section>
            )}

            {/* Horizontal Tabs */}
            <div className="flex flex-wrap gap-4 border-b border-zinc-200 pb-2 mt-8">
              <button
                onClick={() => setActiveTab("education")}
                className={`font-serif text-sm tracking-wide uppercase transition-colors pb-2 ${
                  activeTab === "education"
                    ? "text-zinc-900 border-b-2 border-zinc-900"
                    : "text-zinc-500 hover:text-zinc-700"
                }`}
              >
                Education
              </button>
              <button
                onClick={() => setActiveTab("experience")}
                className={`font-serif text-sm tracking-wide uppercase transition-colors pb-2 ${
                  activeTab === "experience"
                    ? "text-zinc-900 border-b-2 border-zinc-900"
                    : "text-zinc-500 hover:text-zinc-700"
                }`}
              >
                Experience
              </button>
              <button
                onClick={() => setActiveTab("projects")}
                className={`font-serif text-sm tracking-wide uppercase transition-colors pb-2 ${
                  activeTab === "projects"
                    ? "text-zinc-900 border-b-2 border-zinc-900"
                    : "text-zinc-500 hover:text-zinc-700"
                }`}
              >
                Projects
              </button>
              <button
                onClick={() => setActiveTab("publications")}
                className={`font-serif text-sm tracking-wide uppercase transition-colors pb-2 ${
                  activeTab === "publications"
                    ? "text-zinc-900 border-b-2 border-zinc-900"
                    : "text-zinc-500 hover:text-zinc-700"
                }`}
              >
                Publications
              </button>
              <button
                onClick={() => setActiveTab("talks")}
                className={`font-serif text-sm tracking-wide uppercase transition-colors pb-2 ${
                  activeTab === "talks"
                    ? "text-zinc-900 border-b-2 border-zinc-900"
                    : "text-zinc-500 hover:text-zinc-700"
                }`}
              >
                Talks
              </button>
            </div>

            {/* Tab Content */}
            <div className="mt-8">
              {activeTab === "education" && (
                <section>
                  <div className="space-y-12">
                    {educationData.map((education, index) => (
                      <EducationEntry key={index} education={education} />
                    ))}
                  </div>
                </section>
              )}

              {activeTab === "experience" && (
                <section>
                  <div className="space-y-12">
                    {experienceData.map((experience, index) => (
                      <ExperienceEntry
                        key={index}
                        experience={experience}
                      />
                    ))}
                  </div>
                </section>
              )}

              {activeTab === "projects" && (
                <section>
                  <div className="space-y-12">
                    {portfolioData.map((portfolio, index) => (
                      <PortfolioEntry key={index} portfolio={portfolio} />
                    ))}
                  </div>
                </section>
              )}

              {activeTab === "publications" && (
                <section>
                  <div className="space-y-12">
                    {publicationData.length > 0 ? (
                      publicationData.map((publication, index) => (
                        <div key={index}>
                          <PublicationEntry publication={publication} />
                          {index < publicationData.length - 1 && (
                            <div className="h-px bg-zinc-200 my-8" />
                          )}
                        </div>
                      ))
                    ) : (
                      <p className="text-sm text-zinc-500 italic">
                        Publications will appear here.
                      </p>
                    )}
                  </div>
                </section>
              )}

              {activeTab === "talks" && (
                <section>
                  <div className="space-y-12">
                    {talksData.length > 0 ? (
                      talksData.map((talk, index) => (
                        <TalkEntry key={index} talk={talk} />
                      ))
                    ) : (
                      <p className="text-sm text-zinc-500 italic">
                        Talks will appear here.
                      </p>
                    )}
                  </div>
                </section>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
