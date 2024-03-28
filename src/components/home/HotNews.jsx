import React, { useState, useEffect } from "react";
import axios from "axios";
import NewsCard from "../news/NewsCard";
import { Box, Grid, Skeleton } from "@mui/material";
import { v4 as uuidv4 } from "uuid";

const HotNews = () => {
  const [hotNews, setHotNews] = useState([]);
  const url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=${process.env.REACT_APP_API_KEY}`;

  const getHotNews = async () => {
    try {
      const res = await axios.get(url);
      setHotNews(res.data.articles);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getHotNews();
  }, []);

  return (
    <Box py={6}>
        <Grid container maxWidth="xl" spacing={2}>
          {hotNews.length === 0 ? (
            <>
            <Grid item xs={3}>
              <Skeleton variant="rectangular" width={'100%'} height={180} style={{ marginBottom: 6 }} />
              <Skeleton width="60%" style={{ marginBottom: 6 }}/>
              <Skeleton />
            </Grid>
            <Grid item xs={3}>
              <Skeleton variant="rectangular" width={'100%'} height={180} style={{ marginBottom: 6 }} />
              <Skeleton width="60%" style={{ marginBottom: 6 }}/>
              <Skeleton />
            </Grid>
            <Grid item xs={3}>
              <Skeleton variant="rectangular" width={'100%'} height={180} style={{ marginBottom: 6 }} />
              <Skeleton width="60%" style={{ marginBottom: 6 }}/>
              <Skeleton />
            </Grid>
            <Grid item xs={3}>
              <Skeleton variant="rectangular" width={'100%'} height={180} style={{ marginBottom: 6 }} />
              <Skeleton width="60%" style={{ marginBottom: 6 }}/>
              <Skeleton />
            </Grid>
            </>
          ) : (
            hotNews?.map((item) => <NewsCard key={uuidv4()} {...item} />)
          )}
        </Grid>
    </Box>
  );
};

export default HotNews;
