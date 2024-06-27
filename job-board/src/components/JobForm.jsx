import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addJob } from '../features/jobs/jobsSlice';
import { Box, Button, TextField } from '@mui/material';
import { v4 as uuidv4 } from 'uuid';
import { motion } from 'framer-motion';

const JobForm = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addJob({ id: uuidv4(), title, description, applicants: [] }));
    setTitle('');
    setDescription('');
  };

  return (
    <Box component={motion.form} onSubmit={handleSubmit} sx={{ mt: 2 }} initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
      <TextField
        label="Job Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        fullWidth
        required
      />
      <TextField
        label="Job Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        fullWidth
        multiline
        rows={4}
        sx={{ mt: 2 }}
        required
      />
      <Button type="submit" variant="contained" sx={{ mt: 2 }}>
        Post Job
      </Button>
    </Box>
  );
};

export default JobForm;
