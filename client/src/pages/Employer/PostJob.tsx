import React, { useState } from "react";

const PostJobs: React.FC = () => {
  const [jobTitle, setJobTitle] = useState("");
  const [jobDescription, setJobDescription] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [location, setLocation] = useState("");
  const [salary, setSalary] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const jobData = {
      jobTitle,
      jobDescription,
      companyName,
      location,
      salary,
    };
    console.log("Job Posted:", jobData);
    // Add your form submission logic here
  };

  return (
    <div className="w-screen h-screen">
      <div className="max-w-4xl mx-auto p-8 bg-white rounded-xl shadow-lg">
        <h1 className="text-3xl font-semibold text-center mb-6">
          Post a New Job
        </h1>
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Job Title */}
          <div>
            <label className="block text-lg font-medium text-gray-700">
              Job Title
            </label>
            <input
              type="text"
              value={jobTitle}
              onChange={(e) => setJobTitle(e.target.value)}
              className="mt-2 w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-prime focus:outline-none"
              required
              placeholder="Enter the job title"
            />
          </div>

          {/* Job Description */}
          <div>
            <label className="block text-lg font-medium text-gray-700">
              Job Description
            </label>
            <textarea
              value={jobDescription}
              onChange={(e) => setJobDescription(e.target.value)}
              className="mt-2 w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-prime focus:outline-none"
              required
              rows={5}
              placeholder="Enter job description"
            />
          </div>

          {/* Company Name */}
          <div>
            <label className="block text-lg font-medium text-gray-700">
              Company Name
            </label>
            <input
              type="text"
              value={companyName}
              onChange={(e) => setCompanyName(e.target.value)}
              className="mt-2 w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-prime focus:outline-none"
              required
              placeholder="Enter the company name"
            />
          </div>

          {/* Location */}
          <div>
            <label className="block text-lg font-medium text-gray-700">
              Location
            </label>
            <input
              type="text"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              className="mt-2 w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-prime focus:outline-none"
              required
              placeholder="Enter job location"
            />
          </div>

          {/* Salary */}
          <div>
            <label className="block text-lg font-medium text-gray-700">
              Salary
            </label>
            <input
              type="text"
              value={salary}
              onChange={(e) => setSalary(e.target.value)}
              className="mt-2 w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-prime focus:outline-none"
              required
              placeholder="Enter salary range"
            />
          </div>

          {/* Submit Button */}
          <div className="text-center">
            <button
              type="submit"
              className="mt-4 px-8 py-3 bg-prime text-white font-semibold rounded-lg hover:bg-prime-dark transition duration-300"
            >
              Post Job
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default PostJobs;
