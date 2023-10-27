// MUI IMOPRTS
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";

// REACT ROUTER

//PAGE IMPORTS
import Home from "./Pages/Home";

//Toast import
import { Toaster } from "react-hot-toast";

export default function FixedContainer() {
  return (
    <div style={{ backgroundColor: "#fff" }}>
      <Toaster />
      <CssBaseline />
      <Container fixed>
        <Box sx={{ bgcolor: "#fff", height: "100vh", py: 5 }}>
          <Home />
        </Box>
      </Container>
    </div>
  );
}
