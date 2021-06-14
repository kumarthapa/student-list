import React, { useContext, useState, createContext } from "react";
import axios from "axios";
const NewsContext = createContext();

export const useNews = () => {
  return useContext(NewsContext);
};

export const NewsProvider = ({ children }) => {
  const [newsData, setNewsData] = useState([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState("");
  const getNews = (open) => {
   
      setLoading(true)
      let apiUrl =
        "http://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=2ae5d92ef04d41469f239acc1b745e0d";
      axios
        .get(apiUrl)
        .then((res) => {
          setNewsData(res.data.articles);
          setLoading(false);
        })
        .catch((err) => setError(err));
    
  };
  
  const value = {
    newsData,
    getNews,
    loading,
    error,
  };

  return <NewsContext.Provider value={value}>{children}</NewsContext.Provider>;
};