import Skeleton from "@mui/material/Skeleton";
import Stack from "@mui/material/Stack";

export default function Table() {
  return (
    <Stack gap={1}>
      <Skeleton variant="rounded" height={60} />
      <Skeleton variant="rounded" height={30} />
      <Skeleton variant="rounded" height={30} />
      <Skeleton variant="rounded" height={30} />
      <Skeleton variant="rounded" height={30} />
      <Skeleton variant="rounded" height={30} />
    </Stack>
  );
}
