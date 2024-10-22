import React from 'react';
import { Box, Table, TableBody, TableCell, TableContainer, TableRow, Paper } from '@mui/material';
import { isDateString, formatDate } from '../utils/utils';

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
                      ? value
                        : isDateString(value) 
                          ? formatDate(value)
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

export default PropertiesTab;