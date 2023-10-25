import { Stack } from "@mui/material";
import BookCard from "./BookCard";

export default function RenderCards({ books }) {
  return (
    <Stack direction="row" gap={2} flexWrap="wrap">
      {books.map(({ _id, title, author, publishYear }) => {
        return (
          <BookCard
            key={_id}
            id={_id}
            title={title}
            author={author}
            publishYear={publishYear}
          />
        );
      })}
    </Stack>
  );
}
