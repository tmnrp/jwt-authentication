import { Box, Button } from "@mui/material";
import { useGlobalStore } from "../../store/store";

export const Home = () => {
  const { doLogout } = useGlobalStore();

  //
  return (
    <Box>
      <Button variant="contained" onClick={() => doLogout()}>
        Logout
      </Button>
    </Box>
  );
};
