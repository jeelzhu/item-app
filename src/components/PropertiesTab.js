import React from 'react';
import { Box, Table, TableBody, TableCell, TableContainer, TableRow, Paper, Typography } from '@mui/material';
import { isDateString, formatDate } from '../utils/utils';

// Component to display the properties in tab 1
function PropertiesTab({ properties = {} }) { 
  if (Object.keys(properties).length === 0) {
    return (
      <Box p={2}>
        <Typography variant="h6" color="textSecondary" align="center">
          No properties available.
        </Typography>
      </Box>
    );
  }

  return (
    <Box p={2}>
      <TableContainer component={Paper} sx={{ float: 'left', width: '50%', margin: '0 auto' }}>
        <Table>
          <TableBody>
            {Object.entries(properties).map(([key, value]) => (
              <TableRow key={key}>
                <TableCell>{key}</TableCell>
                <TableCell
                  align={typeof value === 'number' || isDateString(value) ? 'right' : 'left'}
                >
                  {renderValue(value)}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
}

function renderValue(value) {
  if (typeof value === 'number') {
    return value;
  }
  if (isDateString(value)) {
    return formatDate(value);
  }
  return String(value);
}

export default PropertiesTab;
