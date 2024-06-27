import React from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { selectJobById } from '../features/jobs/jobsSelectors';
import { Container, Typography, List, ListItem, ListItemText } from '@mui/material';
import { motion } from 'framer-motion';

const JobDetailsPage = () => {
  const { id } = useParams();
  const job = useSelector((state) => selectJobById(state, id));

  if (!job) {
    return <Typography variant="h5">Job not found</Typography>;
  }

  return (
    <Container component={motion.div} initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
      <Typography variant="h4" component="h1" gutterBottom>
        {job.title}
      </Typography>
      <Typography variant="body1" gutterBottom>
        {job.description}
      </Typography>
      <Typography variant="h6" component="h2" gutterBottom>
        Applicants:
      </Typography>
      <List>
        {job.applicants.length > 0 ? (
          job.applicants.map((applicant, index) => (
            <ListItem key={index}>
              <ListItemText primary={applicant} />
            </ListItem>
          ))
        ) : (
          <Typography variant="body2">No applicants yet.</Typography>
        )}
      </List>
    </Container>
  );
};

export default JobDetailsPage;
