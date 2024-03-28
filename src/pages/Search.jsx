import { Box, Divider, Grid, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import NewsCard from "../components/news/NewsCard";
import { v4 as uuidv4 } from "uuid";
import Loader from "../components/news/Loader";
import axios from "axios";

const Search = () => {
  const { state } = useLocation();
  const [searchNews, setSearchNews] = useState([]);
  const getSearchNews = async () => {
    const res = await axios.get(
      `https://newsapi.org/v2/everything?q=${state}&apiKey=${process.env.REACT_APP_API_KEY}`
    );
    setSearchNews(res.data.articles);
  };

  useEffect(() => {
    getSearchNews();
  }, [state]);

  return (
    <Box py={6}>
      <Typography variant="h5" sx={{ fontWeight: "bold" }}>
        Search About: {state.toUpperCase()}
      </Typography>
      <Box my={2}>
        <Divider />
      </Box>
      <Grid container maxWidth="xl" spacing={2}>
        {searchNews.length === 0 ? (
          <Loader />
        ) : (
          searchNews?.map((item) => <NewsCard key={uuidv4()} {...item} />)
        )}
      </Grid>
    </Box>
  );
};

export default Search;
