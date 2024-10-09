// server/routes/jobRoutes.js

import express from 'express';
import { getAllJobs, getJobById, createJob, updateJob, deleteJob } from '../controllers/jobController.js';

const router = express.Router();

// Define routes
router.get('/', getAllJobs); // GET all jobs
router.get('/:id', getJobById); // GET a specific job by ID
router.post('/', createJob); // POST a new job
router.put('/:id', updateJob); // PUT (update) a job by ID
router.delete('/:id', deleteJob); // DELETE a job by ID

export default router;
