import React from 'react';
import { Box, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Typography } from '@mui/material';

// Component to display the properties in tab 1
function PropertiesTab({ properties }) {
  return (
    <Box p={2}>
      <TableContainer component={Paper} sx={{ float: 'left', width: '50%', margin: '0 auto', align: 'left' }} >
        <Table>
          <TableBody>
            {Object.entries(properties).map(([key, value]) => (
              <TableRow key={key}>
                <TableCell>{key}</TableCell>
                  <TableCell align={typeof value === 'number' || isDateString(value) ? 'right' : 'left'}>
                    {typeof value === 'number' 
                      ? value.toFixed(2) 
                        : isDateString(value) 
                          ? new Date(value).toLocaleDateString() 
                    : String(value)}
                </TableCell>
              </TableRow>
            ))}
        </TableBody>
        </Table>
    </TableContainer>
  </Box>
);
}

//check if a string is in date format
const isDateString = (value) => {
    const date = new Date(value);
    return !isNaN(date.getTime());
};

export default PropertiesTab;