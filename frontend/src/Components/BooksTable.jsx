import * as React from "react";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import InfoIcon from "@mui/icons-material/Info";
import EditIcon from "@mui/icons-material/Edit";
import { Stack } from "@mui/material";
import deleteBook from "../Contexts/DeleteBook";
import { useNavigate } from "react-router-dom";

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

export default function BooksTable({ books }) {
  function createData(_id, title, author, publishYear) {
    return { id: _id, title, author, publishYear };
  }

  const nav = useNavigate();
  const [rows, setRows] = React.useState([]);

  React.useEffect(() => {
    const rowsData = books.map(({ _id, title, author, publishYear }) => {
      return createData(_id, title, author, publishYear);
    });
    setRows(rowsData);
  }, []);

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Book Title</StyledTableCell>
            <StyledTableCell align="left">Book Author</StyledTableCell>
            <StyledTableCell align="left">Publish Year</StyledTableCell>
            <StyledTableCell align="left"></StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <StyledTableRow key={row.id}>
              <StyledTableCell component="th" scope="row">
                {row.title}
              </StyledTableCell>
              <StyledTableCell align="left">{row.author}</StyledTableCell>
              <StyledTableCell align="left">{row.publishYear}</StyledTableCell>
              <StyledTableCell>
                <Stack direction="row" gap={1} justifyContent="flex-end">
                  <IconButton
                    aria-label="delete"
                    onClick={() => {
                      deleteBook(row.id);
                    }}
                  >
                    <DeleteIcon sx={{ color: "red " }} />
                  </IconButton>
                  <IconButton
                    aria-label="Info"
                    onClick={() => nav(`/book/${row.id}`)}
                  >
                    <InfoIcon />
                  </IconButton>
                  <IconButton
                    aria-label="Edit"
                    onClick={() => nav(`/book/${row.id}`)}
                  >
                    <EditIcon />
                  </IconButton>
                </Stack>
              </StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
