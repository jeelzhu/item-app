import { Box, Typography } from '@mui/material';

// Component to display the properties in tab 1
function PropertiesTab({ properties }) {
    return (
      <Box p={2}>
        {Object.entries(properties)
        .map(([key, value]) => (
          <Typography key={key}>
            <strong>{key}:</strong> {String(value)}
          </Typography>
        ))}
      </Box>
    );
  }
  
  export default PropertiesTab;