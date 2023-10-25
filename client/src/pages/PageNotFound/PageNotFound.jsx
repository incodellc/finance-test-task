import { Box, Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom';

export const PageNotFound = () => (
  <Box
    sx={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      flexDirection: 'column',
    }}
  >
    <Typography variant="h1">
      404
    </Typography>
    <Typography variant="h6">
      The page you’re looking for doesn’t exist.
    </Typography>
    <Link to="/home">
      <Button variant="contained">Back Home</Button>
    </Link>
  </Box>
);