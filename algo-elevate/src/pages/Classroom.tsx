// src/pages/Classroom.tsx

import React from 'react';
import { Box, Typography } from '@mui/material';

const Classroom = () => {
  return (
    <Box className="classroom">
      <Typography variant="h4" component="h1">
        Classroom
      </Typography>
      <Typography variant="body1">
        Welcome to your classroom! Here you can find all your course materials and assignments.
      </Typography>
      {/* Add additional content such as course materials, assignments, etc. */}
    </Box>
  );
};

export default Classroom;
