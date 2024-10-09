// server/controllers/jobController.js

import Job from "../models/Job.js";

// @desc    Get all jobs
// @route   GET /api/jobs
export const getAllJobs = async (req, res) => {
  try {
    const jobs = await Job.find(); // Fetch jobs from the database
    res.status(200).json(jobs);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// @desc    Get a specific job by ID
// @route   GET /api/jobs/:id
export const getJobById = async (req, res) => {
  try {
    const job = await Job.findById(req.params.id); // Fetch job by ID
    if (!job) return res.status(404).send("Job not found");
    res.status(200).json(job);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// @desc    Create a new job
// @route   POST /api/jobs
export const createJob = async (req, res) => {
  const newJob = new Job(req.body);
  try {
    const savedJob = await newJob.save(); // Save new job to the database
    res.status(201).json(savedJob);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// @desc    Update a job by ID
// @route   PUT /api/jobs/:id
export const updateJob = async (req, res) => {
  try {
    const job = await Job.findByIdAndUpdate(req.params.id, req.body, {
      new: true, // Return the updated document
      runValidators: true, // Ensure validators are applied
    });
    if (!job) return res.status(404).send("Job not found");
    res.status(200).json(job);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// @desc    Delete a job by ID
// @route   DELETE /api/jobs/:id
export const deleteJob = async (req, res) => {
  try {
    const job = await Job.findByIdAndDelete(req.params.id); // Delete job by ID
    if (!job) return res.status(404).send("Job not found");
    res.status(204).send(); // No content to send back
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
