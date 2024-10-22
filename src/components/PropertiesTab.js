import React from 'react';
import { Box, Table, TableBody, TableCell, TableContainer, TableRow, Paper } from '@mui/material';
import { isDateString, formatDate } from '../utils/utils';

// Component to display the properties in tab 1
function PropertiesTab({ properties = {} }) { // Fallback in case properties is undefined
  return (
    <Box p={2}>
      <TableContainer component={Paper} sx={{ float: 'left', width: '50%', margin: '0 auto', align: 'left' }}>
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