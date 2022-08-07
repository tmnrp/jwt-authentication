import { Box, Button, Stack, TextField, Typography } from "@mui/material";
import { useGlobalStore } from "../../store/store";
import HttpsOutlinedIcon from "@mui/icons-material/HttpsOutlined";

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
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Box
        sx={{
          marginBottom: 5,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <HttpsOutlinedIcon
          sx={{ fontSize: "50px", color: "lightcoral", marginBottom: 2 }}
        />
        <Typography variant="h5" textTransform="uppercase" letterSpacing={4}>
          Login
        </Typography>
      </Box>

      <Stack gap={2} sx={{ width: "80%" }}>
        <TextField label="username" variant="outlined" />
        <TextField label="password" variant="outlined" type="password" />
      </Stack>

      <Button
        variant="contained"
        size="large"
        sx={{ marginTop: 5, width: "80%" }}
        onClick={() => doLogin()}
      >
        <Typography
          textTransform="uppercase"
          letterSpacing={4}
          fontWeight="bold"
        >
          LOGIN
        </Typography>
      </Button>
    </Box>
  );
};

/*

<Box
      sx={{
        height: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Stack gap={4} sx={{ width: "100%" }}>
        <Box>
          <Box
            sx={{ display: "flex", justifyContent: "center", marginBottom: 1 }}
          >
            <HttpsOutlinedIcon sx={{ fontSize: "50px", color: "lightcoral" }} />
          </Box>

          <Box sx={{ display: "flex", justifyContent: "center" }}>
            <Typography
              variant="h5"
              textTransform="uppercase"
              letterSpacing={4}
            >
              Login
            </Typography>
          </Box>
        </Box>

        <Box display="flex" flexDirection="column" sx={{ width: "50%" }}>
          <Stack className="tony" gap={2} marginBottom={4}>
            <TextField label="username" variant="outlined" />
            <TextField label="password" variant="outlined" type="password" />
          </Stack>

          <Box>
            <Button
              size="large"
              variant="contained"
              onClick={() => doLogin()}
              startIcon={<LoginIcon />}
              sx={{ width: "100%" }}
            >
              <Typography>Login</Typography>
            </Button>
          </Box>
        </Box>
      </Stack>
    </Box>

*/
