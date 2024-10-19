import React from 'react';
import { TableRow, TableCell } from '@mui/material';

function ItemRow({ item, onSelect }) {
  return (
    <TableRow
      hover
      style={{ cursor: 'pointer' }}
      onClick={() => onSelect(item)}
    >
      <TableCell>{item.guid}</TableCell>
      <TableCell>{item.name}</TableCell>
      <TableCell>{item.path.join(' > ')}</TableCell>
    </TableRow>
  );
}

export default ItemRow;