import React from "react";
import JobFinder from "../../components/JobFinder";
import JobsCategories from "./Categories/JobsCategories";
import JobSuggestions from "./Popular/JobSuggestions";

function Jobs() {
  return (
    <div className="flex gap-16 items-center w-full min-h-screen justify-center flex-col">
      <div className="flex flex-col gap-4 items-start">
        <span>Search Jobs</span>
        <JobFinder />
      </div>
      <JobSuggestions />
      <JobsCategories header="Jobs by their categories" />
    </div>
  );
}

export default Jobs;
