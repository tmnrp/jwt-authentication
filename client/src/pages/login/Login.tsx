import {
  Box,
  Button,
  Divider,
  Link as MuiLink,
  Paper,
  Stack,
  TextField,
  Typography,
  useTheme,
} from "@mui/material";
import LockPersonIcon from "@mui/icons-material/LockPerson";
import LogoDevOutlinedIcon from "@mui/icons-material/LogoDevOutlined";
import { useAuthStore } from "../../store/AuthStore";
import { Link } from "react-router-dom";

//
export const Login = () => {
  //
  const { doLogin } = useAuthStore();
  const theme = useTheme();

  //
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height: "100%",
        background: "#F7F9FC",
      }}
    >
      <Box sx={{ mb: 2 }}>
        <LogoDevOutlinedIcon
          sx={{ fontSize: "100px", color: theme.palette.primary.dark }}
        />
      </Box>
      <Paper elevation={0} sx={{ p: 4 }}>
        <Stack direction="row" gap={1} alignItems="center">
          <LockPersonIcon
            sx={{ fontSize: "50px", color: theme.palette.primary.main }}
          />
          <Typography variant="h4" letterSpacing={1}>
            Login
          </Typography>
        </Stack>

        <Divider sx={{ my: 2 }} />

        <Stack gap={2} sx={{ width: "400px" }}>
          <TextField label="username" variant="outlined" />
          <Box>
            <TextField
              label="password"
              variant="outlined"
              type="password"
              fullWidth
            />
            <Box sx={{ mt: 0.5 }}>
              <MuiLink component={Link} to="" underline="hover">
                <Typography letterSpacing={1} sx={{ fontStyle: "italic" }}>
                  Forgot password ?
                </Typography>
              </MuiLink>
            </Box>
          </Box>
        </Stack>

        <Divider sx={{ my: 2 }} />

        <Button
          variant="contained"
          size="large"
          fullWidth
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
      </Paper>
    </Box>
  );
};

/*
        
        
*/
