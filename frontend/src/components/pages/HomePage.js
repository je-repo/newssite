import React, { useState, useEffect } from 'react';
import ArticleSection from '../ArticleSection';
import TopStoriesSection from '../TopStoriesSection';

import './HomePage.css';
import './stylesheet/base_styles.css';


function HomePage() {

  // declare state variables to store data from APIs
  const [topStories, setTopStories] = useState([]);
  const [homePageArticles, setHomePageArticles] = useState([]);

  useEffect(() => {

    const fetchTopStories = async () => {
      try {
          const response = await fetch(
              `http://127.0.0.1:8000/homepagetopstories`
          );
          
          let data = await response.json();

          setTopStories(data);

      } catch(error){
          console.log(error);
      }
  }   

    // fetch articles
    const fetchArticles = async () => {
      try {

        const response = await fetch(
          `http://127.0.0.1:8000/`
        );

        let data = await response.json();

        setHomePageArticles(data);
      } catch (error) {
        console.log(error);
      }
    }
    fetchArticles();
    fetchTopStories();

  }, []);

  const articleSections = () => {

    let sections = [];

    // create and push ArticleSections components to sections array
    for (let categoryName in homePageArticles) {
      if (typeof homePageArticles[categoryName] !== 'string') {
        sections.push(<ArticleSection key={categoryName} category={categoryName} articles={homePageArticles[categoryName]} />)
      }
    }

    return sections;

  };


  return (
    <>
      <title>Homepage</title>
      
      <div className="top-stories-section">
        <TopStoriesSection articles={topStories}></TopStoriesSection>
      </div>
      
      <div className="category-articles-section">
        { articleSections() }
      </div>

    </>
  );
}


export default HomePage