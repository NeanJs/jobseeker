import React, { useState } from "react";
import Button from "../../../components/Button";
import { Text } from "../../../components/Texts";
import { SUGGESTED_JOBS } from "../../../constants/constants";

function JobSuggestions() {
  let [jobLen, setJobLen] = useState(3);
  const handleShowMore = () => {
    jobLen <= SUGGESTED_JOBS.length ? setJobLen(jobLen + 3) : setJobLen(3);
  };
  return (
    <div className="flex flex-col w-full h-full max-h-fit items-center gap-4">
      <div className="flex flex-col w-full items-start gap-4">
        <Text text="Jobs for you" head />
        <Text text="Find jobs of your choice" subhead />
      </div>
      <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-8">
        {SUGGESTED_JOBS.slice(0, jobLen).map((job) => (
          <div className="job-card w-full h-fit flex flex-col items-start p-4 gap-4 bg-cream rounded-sm ease duration-300 hover:shadow-xl cursor-pointer">
            <div className="flex flex-col justify-between items-start md:items-center gap-4 md:flex-row">
              <div className="flex flex-row items-center gap-4">
                <img
                  src={`https://blog.hubspot.com/hubfs/image8-2.jpg`}
                  className="rounded-full w-16 h-16 object-cover"
                />
                <div className="flex flex-col">
                  <span className="text-lg font-semibold">{job.jobTitle}</span>
                  <span className="font-medium text-gray">
                    <span className="text-slate-900">{job.company},</span>{" "}
                    {job.location}
                  </span>
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <span>
                <span className="font-semibold">Job Type:</span> {job.jobType}
              </span>

              <span>
                <span className="font-semibold">Salary: </span>
                {job.salary}
              </span>
            </div>
          </div>
        ))}
      </div>
      <Button
        text={jobLen <= SUGGESTED_JOBS.length ? `Show More` : "Show Less"}
        className={"w-fit"}
        onClick={handleShowMore}
      />
    </div>
  );
}

export default JobSuggestions;
