import { Box, Button, Grid, Stack, Typography } from "@mui/material";
import FlashOnIcon from "@mui/icons-material/FlashOn";
import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const HeaderTop = () => {
  const user = useSelector(state => state.auth.user);
  const navigate = useNavigate();

  const loginHandler = (e) => {
    navigate("/login");
  }

  return (
    <Box py={1} bgcolor="grey.900">
      <Grid container maxWidth="xl" margin="auto" alignItems="center">
        <Grid item xs={6}>
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <FlashOnIcon color="secondary" />
            <Typography variant="body2" color="white">
              Class property employ ancho red multi level mansion
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={6}>
          <Stack direction="row" justifyContent="flex-end">
            {!user && <Button variant="contained" color="secondary" onClick={loginHandler}>Login</Button>}
            {user && <Button variant="contained" color="secondary">Logout</Button>}
          </Stack>
        </Grid>
      </Grid>
    </Box>
  );
};

export default HeaderTop;
