import React from 'react';
import { TableHead, TableRow, TableCell } from '@mui/material';

function ItemHeader() {
  return (
    <TableHead>
      <TableRow>
        <TableCell><strong>GUID</strong></TableCell>
        <TableCell><strong>Name</strong></TableCell>
        <TableCell><strong>Path</strong></TableCell>
      </TableRow>
    </TableHead>
  );
}

export default ItemHeader;