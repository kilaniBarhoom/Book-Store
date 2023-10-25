import Skeleton from "@mui/material/Skeleton";
import Stack from "@mui/material/Stack";

const a = [1, 2, 3, 4];

export default function Cards() {
  <Stack direction="row" gap={2}>
    {a.map((a) => {
      return <Skeleton variant="rounded" height={200} width={150} />;
    })}
  </Stack>;
}
