import { Box, Container, Grid, Link, Typography } from "@mui/material";
import React from "react";
import { NavLink } from "react-router-dom";
import { links } from "../../utils/catogriesList";


const Navbar = () => {
  return (
    <Box component="nav" bgcolor="secondary.main">
      <Container maxWidth="xl">
        <Grid container>
          <Grid item xs={8}>
            <Box sx={{ display: "flex" }}>
              <Link
                underline="none"
                py={2}
                px={3}
                sx={[{'&.active' : {backgroundColor: 'secondary.light'},'&:hover':{backgroundColor: 'secondary.light'}}]}
                to="/"
                component={NavLink}
              >
                <Typography variant="span" color="white">
                  Home
                </Typography>
              </Link>
              {links.map((link) => {
                return (
                  <Link
                    underline="none"
                    key={link.id}
                    py={2}
                    px={3}
                    sx={[{'&.active' : {backgroundColor: 'secondary.light'},'&:hover':{backgroundColor: 'secondary.light'}}]}
                    to={`/categories/${link.text}`}
                    component={NavLink}
                  >
                    <Typography variant="span" color="white">
                      {link.text.toUpperCase()}
                    </Typography>
                  </Link>
                );
              })}
            </Box>
          </Grid>
          <Grid item xs={4}>

          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Navbar;
