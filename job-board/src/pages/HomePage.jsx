import React from 'react';
import JobForm from '../components/JobForm';
import JobList from '../components/JobList';
import { Container, Typography } from '@mui/material';
import { motion } from 'framer-motion';

const HomePage = () => {
  return (
    <Container component={motion.div} initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
      <Typography variant="h4" component="h1" gutterBottom>
        Job Board
      </Typography>
      <JobForm />
      <JobList />
    </Container>
  );
};

export default HomePage;
