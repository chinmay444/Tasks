export const selectAllJobs = (state) => state.jobs.jobs;
export const selectJobById = (state, jobId) =>
  state.jobs.jobs.find((job) => job.id === jobId);
