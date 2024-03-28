import React, { useState, useEffect } from "react";
import axios from "axios";

const HeroSlider = () => {
  const [topNews, setTopNews] = useState([]);
  const url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=${process.env.REACT_APP_API_KEY}`;

  const getTopNews = async () => {
    try {
      const res = await axios.get(url);
      setTopNews(res.data.articles)
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getTopNews();
  }, []);

  return <div></div>;
};

export default HeroSlider;
