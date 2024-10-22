import React from 'react';
import { TableHead, TableRow, TableCell } from '@mui/material';
import { styled } from '@mui/material/styles';

// Styled TableRow
const StyledTableRow = styled(TableRow)(({ theme }) => ({
  backgroundColor: theme.palette.grey[300],
  boxShadow: theme.shadows[2],
}));

// Styled TableCell
const StyledTableCell = styled(TableCell)(({ theme }) => ({
  fontWeight: 'bold',
  fontSize: '1.3rem',
  borderBottom: `2px solid ${theme.palette.common.white}`,
  color: theme.palette.common.white,
}));

function ItemHeader() {
  return (
    <TableHead>
      <StyledTableRow>
        <StyledTableCell>GUID</StyledTableCell>
        <StyledTableCell>Name</StyledTableCell>
        <StyledTableCell>Path</StyledTableCell>
      </StyledTableRow>
    </TableHead>
  );
}

export default ItemHeader;
