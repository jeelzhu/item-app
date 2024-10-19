import React from 'react';
import { TableRow, TableCell } from '@mui/material';

function ItemRow({ item, onSelect }) {
  return (
    <TableRow
        key={item.guid}
        hover
        onClick={() => onSelect(item)}
        sx={{
            cursor: 'pointer',                
            '&:nth-of-type(odd)': {
                backgroundColor: 'rgba(173, 216, 230, 0.2)', // Slightly darker blue for odd rows
            },
            // transition: 'background-color 0.3s ease',
            }}
        >
      <TableCell>{item.guid}</TableCell>
      <TableCell>{item.name}</TableCell>
      <TableCell>{item.path.join(' > ')}</TableCell>
    </TableRow>
  );
}

export default ItemRow;