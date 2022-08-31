import { Box, Button } from "@mui/material";
import { useAuthStore } from "../../store/AuthStore";

export const Home = () => {
  const { doLogout } = useAuthStore();

  //
  return (
    <Box>
      <Button variant="contained" onClick={() => doLogout()}>
        Logout
      </Button>
    </Box>
  );
};
