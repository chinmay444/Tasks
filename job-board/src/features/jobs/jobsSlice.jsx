import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  jobs: JSON.parse(localStorage.getItem('jobs')) || [],
};

const jobsSlice = createSlice({
  name: 'jobs',
  initialState,
  reducers: {
    addJob: (state, action) => {
      state.jobs.push(action.payload);
      localStorage.setItem('jobs', JSON.stringify(state.jobs));
    },
    applyJob: (state, action) => {
      const { jobId, applicant } = action.payload;
      const job = state.jobs.find(job => job.id === jobId);
      if (job) {
        job.applicants.push(applicant);
        localStorage.setItem('jobs', JSON.stringify(state.jobs));
      }
    },
  },
});

export const { addJob, applyJob } = jobsSlice.actions;
export default jobsSlice.reducer;
