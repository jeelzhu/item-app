import React from 'react';
import { TableHead, TableRow, TableCell } from '@mui/material';

function ItemHeader() {
  return (
    <TableHead>
      <TableRow sx={{ backgroundColor: 'grey.300', color: 'white', boxShadow: '0 2px 4px rgba(0,0,0,0.2)' }}>
        <TableCell sx={{ fontWeight: 'bold', fontSize: '1.3rem', borderBottom: '2px solid white' }}>GUID</TableCell>
        <TableCell sx={{ fontWeight: 'bold', fontSize: '1.3rem', borderBottom: '2px solid white' }}>Name</TableCell>
        <TableCell sx={{ fontWeight: 'bold', fontSize: '1.3rem', borderBottom: '2px solid white' }}>Path</TableCell>
      </TableRow>
    </TableHead>
  );
}

export default ItemHeader;