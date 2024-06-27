import React from 'react';
import { useSelector } from 'react-redux';
import { selectAllJobs } from '../features/jobs/jobsSelectors';
import JobItem from './JobItem';
import { List } from '@mui/material';

const JobList = () => {
  const jobs = useSelector(selectAllJobs);

  return (
    <List>
      {jobs.map((job) => (
        <JobItem key={job.id} job={job} />
      ))}
    </List>
  );
};

export default JobList;
