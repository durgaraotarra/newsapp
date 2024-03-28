import { Box, Container, Typography } from "@mui/material";
import FlashOnIcon from "@mui/icons-material/FlashOn";
import React from "react";

const HeaderTop = () => {
  return (
    <Box py={1} bgcolor="grey.900">
      <Container maxWidth="xl">
        <Box sx={{ display: "flex",alignItems: 'center' }}>
            <FlashOnIcon color="secondary" />
          <Typography variant="body2" color="white">
            Class property employ ancho red multi level mansion
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default HeaderTop;
