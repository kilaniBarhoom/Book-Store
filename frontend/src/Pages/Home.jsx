// React imports
import { useEffect, useState } from "react";

//Variables
import { BaseURL } from "../Contexts/Vars";

//MUI Imports
import { Box, Button } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";

//Skeletons
import Table from "../Skeletons/Table";

//Axios
import axios from "axios";
import BooksTable from "../Components/BooksTable";
import CreateBook from "../Modals/CreateBook";

export default function Home() {
  const [books, setBooks] = useState([]);
  const [openCreate, setOpenCreate] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get(`${BaseURL}/books`)
      .then((res) => {
        setBooks(res.data.books);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [books]);

  function handleOpenCreate() {
    setOpenCreate(true);
  }
  function handleClose() {
    setOpenCreate(false);
  }
  return (
    <Box py={3}>
      <CreateBook open={openCreate} handleClose={handleClose} />

      <Box marginBottom={3}>
        <Button
          onClick={handleOpenCreate}
          variant="contained"
          endIcon={<AddIcon />}
        >
          Create
        </Button>
      </Box>
      {loading ? <Table /> : <BooksTable books={books} />}
    </Box>
  );
}
