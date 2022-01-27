import { BadgeCheckIcon, BriefcaseIcon } from "@heroicons/react/solid";
import React from "react";
import { workExperiences } from "../data";

export default function WorkExperience() {
  return (
    <section id="workExperiences">
      <div class="container px-5 py-10 mx-auto">
        <div class="text-center mb-20">
          <BriefcaseIcon class="w-10 inline-block mb-4" />
          <h1 class="sm:text-4xl text-3xl font-medium title-font text-white mb-4">
            Work Experience
          </h1>
        </div>
        <div class="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2">
          {workExperiences.map((workExperience) => (
            <div key={workExperience} class="p-2 sm:w-1/2 w-full">
              <div class="bg-gray-800 rounded flex p-4 h-full items-center">
                <BadgeCheckIcon class="text-green-400 w-6 h-6 flex-shrink-0 mr-4" />
                <span class="title-font font-medium text-white ml-5">
                  {workExperience.companyName}
                </span>
                <span class="title-font font-medium ml-5">
                  {workExperience.duration}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}