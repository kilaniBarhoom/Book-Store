import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import InfoIcon from "@mui/icons-material/Info";
import EditIcon from "@mui/icons-material/Edit";
import { Stack } from "@mui/material";
import { useNavigate } from "react-router-dom";

export default function BookCard({ id, title, author, publishYear }) {
  const nav = useNavigate();
  return (
    <Card
      sx={{
        minWidth: 270,
        minHeight: 300,
        bgcolor: "rgba(0, 0, 0, 0.9)",
        color: "#fff",
        position: "relative",
      }}
    >
      <CardContent>
        <Typography
          gutterBottom
          variant="h4"
          textTransform="capitalize"
          component="div"
        >
          {title}
        </Typography>
        <Typography variant="h6">By: {author}</Typography>
        <Typography variant="Body2">Published in: : {publishYear}</Typography>
      </CardContent>
      <CardActions sx={{ position: "absolute", bottom: "0" }}>
        <Stack direction="row" gap={1}>
          <IconButton
            aria-label="delete"
            onClick={() => {
              deleteBook(id);
            }}
          >
            <DeleteIcon sx={{ color: "red " }} />
          </IconButton>
          <IconButton aria-label="Info" onClick={() => nav(`/book/${id}`)}>
            <InfoIcon
              sx={{
                color: "#fff",
              }}
            />
          </IconButton>

          <IconButton aria-label="Edit">
            <EditIcon
              sx={{
                color: "#fff",
              }}
            />
          </IconButton>
        </Stack>
      </CardActions>
    </Card>
  );
}
