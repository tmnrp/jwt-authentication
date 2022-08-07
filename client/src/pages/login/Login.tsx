import { Box, Button, Typography } from "@mui/material";
import { useGlobalStore } from "../../store/store";
import LoginIcon from "@mui/icons-material/Login";

//
export const Login = () => {
  //
  const { doLogin } = useGlobalStore();

  //
  return (
    <Box
      sx={{
        height: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Box>
        <Button
          variant="contained"
          onClick={() => doLogin()}
          startIcon={<LoginIcon />}
        >
          <Typography>Login</Typography>
        </Button>
      </Box>
    </Box>
  );
};
