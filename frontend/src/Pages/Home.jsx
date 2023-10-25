// React imports
import { useEffect, useState } from "react";

//Variables
import { BaseURL } from "../Contexts/Vars";

//MUI Imports
import { Box, Button, Stack } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import StyleIcon from "@mui/icons-material/Style";
import BackupTableIcon from "@mui/icons-material/BackupTable";

//Skeletons
import Table from "../Skeletons/Table";

//Axios
import axios from "axios";
import BooksTable from "../Components/BooksTable";
import CreateBook from "../Modals/CreateBook";
import RenderCards from "../Components/RenderCards";

export default function Home() {
  const [books, setBooks] = useState([]);
  const [showAsCards, setShowAsCards] = useState(false);
  const [open, setOpen] = useState(false);
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

  function handleOpen() {
    setOpen(true);
  }
  function handleClose() {
    setOpen(false);
  }
  return (
    <div>
      <CreateBook open={open} handleClose={handleClose} />
      <Box marginBottom={3}>
        <Button onClick={handleOpen} variant="contained" endIcon={<AddIcon />}>
          Create
        </Button>
      </Box>
      {loading && showAsCards == false ? (
        <Table />
      ) : loading && setShowAsCards == true ? (
        <Cards />
      ) : showAsCards ? (
        <RenderCards books={books} />
      ) : (
        <BooksTable books={books} />
      )}
      <Box>
        <Stack direction="row" marginTop={3} gap={2}>
          <Button
            sx={{ bgcolor: "#000" }}
            size="small"
            variant="contained"
            onClick={() => {
              showAsCards == true ? setShowAsCards(false) : "";
            }}
          >
            Show as Table
          </Button>
          <Button
            size="small"
            variant="contained"
            onClick={() => {
              showAsCards == false ? setShowAsCards(true) : "";
            }}
          >
            Show as Cards
          </Button>
        </Stack>
      </Box>
    </div>
  );
}
