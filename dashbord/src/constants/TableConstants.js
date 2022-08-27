import React from "react";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

function TableConstants({ array, arraykeys }) {
  return (
    <Table sx={{ minWidth: 700 }} aria-label="customized table">
      <TableHead>
        <TableRow>
          {arraykeys.map((v) => {
            return <StyledTableCell>{v.toUpperCase()}</StyledTableCell>;
          })}
        </TableRow>
      </TableHead>

      <TableBody>
          {array.map((row) =>(
            <StyledTableRow key={row.email}>
                {
                    arraykeys.map(value =>{
                        return ( <StyledTableCell component="th" scope="row">
                        {row[value]}
                      </StyledTableCell>)
                    })
                }
                </StyledTableRow>
          ) 
        )}
        
      </TableBody>
    </Table>
  );
}

export default TableConstants;
