import React, { useEffect } from "react";
import { useNews } from "./context/NewsContext"
import NewsContent from "../component/NewsList";
import useStyles from "../component/useStyles"
import Navbar from "./Navbar"
const Home = () => {
  const classes = useStyles();
  const { newsData, getNews} = useNews();
  
  useEffect(() => {
    getNews();
  }, []);

  return (
    <>

       <Navbar/>
       <br/><br/>
        <div className={classes.Cardcontainer}>
          {newsData.map((news, index) => {
            return (
              <NewsContent
                author={news.author}
                content={news.content}
                publishedDate={news.publishedAt}
                title={news.title}
                newsUrl={news.url}
                imageUrl={news.urlToImage}
                key={index}
              />
            );
          })}
        </div>
     
    </>
  );
};

export default Home;