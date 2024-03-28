import React from "react";
import Footer from "../components/footer/Footer";
import Container from "@mui/material/Container";
import { Outlet } from "react-router-dom";
import Header from "../components/header/Header";

const Layout = () => {
  return (
    <main>
      <Header />
      <Container maxWidth="xl">
        <Outlet />
      </Container>
      <Footer />
    </main>
  );
};

export default Layout;
