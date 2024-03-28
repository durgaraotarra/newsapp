import React from "react";
import axios from "axios";
import { useLoaderData, useNavigation, useParams } from "react-router-dom";
import { Box, Divider, Grid, Typography } from "@mui/material";
import { v4 as uuidv4 } from "uuid";
import NewsCard from "../components/news/NewsCard";
import Loader from "../components/news/Loader";
import CatogriesList from "../components/news/CatogriesList";

export const getNewsByCategory = async (request) => {
  const url = `https://newsapi.org/v2/top-headlines?country=in&category=${request.params.name}&apiKey=${process.env.REACT_APP_API_KEY}`;
  try {
    const res = await axios.get(url);
    return res.data.articles;
  } catch (error) {
    console.log(error);
  }
};

const Categories = () => {
  const { name } = useParams();
  const hotNews = useLoaderData();
  const navigation = useNavigation();

  return (
    <Grid container maxWidth="xl" spacing={2}>
      <Grid item sm={9}>
        <Box py={6}>
          <Typography variant="h5" sx={{ fontWeight: "bold" }}>
            Category: {name.toUpperCase()}
          </Typography>
          <Box my={2}>
            <Divider />
          </Box>
          <Grid container maxWidth="xl" spacing={2}>
            {navigation.state === "loading" ? (
              <Loader />
            ) : (
              hotNews?.map((item) => <NewsCard key={uuidv4()} {...item} />)
            )}
          </Grid>
        </Box>
      </Grid>
      <Grid item sm={3}>
        <Box py={6}>
          <Typography variant="h5" sx={{ fontWeight: "bold" }}>
            Top Category:
          </Typography>
          <Box my={2}>
            <Divider />
          </Box>
          <Box>
              <CatogriesList />
          </Box>
        </Box>
      </Grid>
    </Grid>
  );
};

export default Categories;
