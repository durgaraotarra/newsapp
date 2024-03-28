import { Box, Button, Paper, Stack, Typography } from "@mui/material";
import React, { useState } from "react";
import FormControl from "@mui/material/FormControl";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import IconButton from "@mui/material/IconButton";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import EmailIcon from "@mui/icons-material/Email";
import { useDispatch } from "react-redux";
import { setUser } from "../features/authSlice";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const loginHandler = (e) => {
    e.preventDefault();
    dispatch(
      setUser({
        email: "durga",
        password: "1234",
      })
    );
      navigate("/");
  };
  return (
    <Box
      minHeight={`100vh`}
      sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}
    >
      <Paper sx={{ width: 320 }} elevation={0} p={2}>
        <Typography variant="h5" gutterBottom align="center">
          Sign in
        </Typography>
        <Box component="form" onSubmit={loginHandler}>
          <FormControl
            sx={{ m: 1, width: "100%" }}
            variant="outlined"
            size="small"
          >
            <InputLabel htmlFor="outlined-adornment-password">Email</InputLabel>
            <OutlinedInput
              id="outlined-adornment-password"
              type="text"
              endAdornment={
                <InputAdornment position="end">
                  <IconButton edge="end">
                    <EmailIcon />
                  </IconButton>
                </InputAdornment>
              }
              label="Password"
            />
          </FormControl>
          <FormControl
            sx={{ m: 1, width: "100%" }}
            variant="outlined"
            size="small"
          >
            <InputLabel htmlFor="outlined-adornment-password">
              Password
            </InputLabel>
            <OutlinedInput
              id="outlined-adornment-password"
              type={showPassword ? "text" : "password"}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    edge="end"
                  >
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              }
              label="Password"
            />
          </FormControl>
          <FormControl
            sx={{ m: 1, width: "100%" }}
            variant="outlined"
            size="small"
          >
            <Button variant="contained" align="center" type="submit">
              Login
            </Button>
          </FormControl>
        </Box>
      </Paper>
    </Box>
  );
};

export default Login;
