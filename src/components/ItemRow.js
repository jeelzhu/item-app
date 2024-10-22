import React from 'react';
import { TableRow, TableCell } from '@mui/material';
import { joinArray } from '../utils/utils';


// Component to display the item row
function ItemRow({ item, onSelect }) {
  return (
    <TableRow
      sx={{ 
        '&:hover': { backgroundColor: 'rgba(25, 118, 210, 0.1)' } // Hover effect
      }}
      onClick={() => onSelect(item)}
    >
      <TableCell>{item.guid}</TableCell>
      <TableCell>{item.name}</TableCell>
      <TableCell>{joinArray(item.path, ' > ')}</TableCell>
    </TableRow>
  );
}

export default ItemRow;