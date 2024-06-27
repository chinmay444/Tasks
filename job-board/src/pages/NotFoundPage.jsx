import React from 'react';
import { Container, Typography } from '@mui/material';
import { motion } from 'framer-motion';

const NotFoundPage = () => {
  return (
    <Container component={motion.div} initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
      <Typography variant="h4">404 - Page Not Found</Typography>
      <Typography variant="body1">The page you are looking for does not exist.</Typography>
    </Container>
  );
};

export default NotFoundPage;
