import React from 'react';
import { TableRow, TableCell } from '@mui/material';
import { styled } from '@mui/material/styles';
import { joinArray } from '../utils/utils';

// Styled TableRow with hover effect
const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:hover': {
    backgroundColor: theme.palette.primary.main + '1A',
  },
  cursor: 'pointer',
}));

function ItemRow({ item, onSelect }) {
  return (
    <StyledTableRow onClick={() => onSelect(item)}>
      <TableCell>{item.guid}</TableCell>
      <TableCell>{item.name}</TableCell>
      <TableCell>{joinArray(item.path, ' > ')}</TableCell>
    </StyledTableRow>
  );
}

export default ItemRow;
