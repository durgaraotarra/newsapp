import {
  Box,
  Container,
  IconButton,
  InputBase,
  Paper,
  Stack,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import React from "react";
import { Link as NavLink, useNavigate } from "react-router-dom";
import logo from "../../assets/logo.png";
import { useState } from "react";

const Logo = () => {
  const [search, setSearch] = useState('');
  const navigate = useNavigate();
  const searchhandler = (e) => {
    e.preventDefault();
    navigate("/search",{state: search});
    setSearch('');
  }

  return (
    <Box py={2}>
      <Container maxWidth="xl">
        <Stack direction="row" justifyContent="space-between" alignItems="center">
          <NavLink to="/">
            <img src={logo} alt="logo" />
          </NavLink>
          <Paper
            component="form"
            variant="elevation"
            elevation={2}
            onSubmit={searchhandler}
            sx={{
              p: "2px 4px",
              display: "flex",
              alignItems: "center",
              width: 350,
            }}
          >
            <InputBase
              sx={{ ml: 1, flex: 1 }}
              placeholder="Search Google"
              value={search}
              inputProps={{ "aria-label": "search google" }}
              onChange={(e) => setSearch(e.target.value)}
            />
            <IconButton type="submit" sx={{ p: "10px" }} color="secondary" aria-label="search">
              <SearchIcon />
            </IconButton>
          </Paper>
        </Stack>
      </Container>
    </Box>
  );
};

export default Logo;
