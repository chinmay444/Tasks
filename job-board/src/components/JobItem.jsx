import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { applyJob } from '../features/jobs/jobsSlice';
import { ListItem, ListItemText, Button, TextField, Collapse, List, Link as MuiLink } from '@mui/material';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const JobItem = ({ job }) => {
  const [open, setOpen] = useState(false);
  const [applicant, setApplicant] = useState('');
  const dispatch = useDispatch();

  const handleApply = () => {
    dispatch(applyJob({ jobId: job.id, applicant }));
    setApplicant('');
  };

  return (
    <>
      <ListItem component={motion.div} initial={{ x: -100 }} animate={{ x: 0 }}>
        <ListItemText primary={job.title} secondary={job.description} />
        <Button component={Link} to={`/jobs/${job.id}`} variant="contained">
          Applicants
        </Button>
        <Button variant="contained" onClick={() => setOpen(!open)} sx={{ ml: 2 }}>
          Apply
        </Button>
      </ListItem>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItem sx={{ pl: 4 }}>
            <TextField
              label="Your Name"
              value={applicant}
              onChange={(e) => setApplicant(e.target.value)}
              fullWidth
            />
            <Button variant="contained" sx={{ ml: 2 }} onClick={handleApply}>
              Submit
            </Button>
          </ListItem>
        </List>
      </Collapse>
    </>
  );
};

export default JobItem;
