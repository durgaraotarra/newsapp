import { Button, Stack, Typography } from "@mui/material";
import React from "react";
import { useRouteError, Link as NavLink } from "react-router-dom";

const PageNotFound = () => {
  const error = useRouteError();
  if (error.status === 404) {
    return (
      <Stack
        direction="column"
        alignItems="center"
        justifyContent="center"
        sx={{ minHeight: "100vh" }}
      >
        <Typography variant="h2">404</Typography>
        <Typography variant="h4" gutterBottom>
          Page Not Found
        </Typography>
        <Button component={NavLink} to="/" variant="contained">
          Go to home page
        </Button>
      </Stack>
    );
  }
  return (
    <Stack
      direction="column"
      alignItems="center"
      justifyContent="center"
      sx={{ minHeight: "100vh" }}
    >
      <Typography variant="h2">404</Typography>
      <Typography variant="h4" gutterBottom>
        Some thing wrong
      </Typography>
      <Button component={NavLink} to="/" variant="contained">
        Go to home page
      </Button>
    </Stack>
  );
};

export default PageNotFound;
