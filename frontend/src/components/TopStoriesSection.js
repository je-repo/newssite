import React from 'react';
import ArticleBlock from "./ArticleBlock";

import './TopStoriesSection.css';


// top story section displaying 1 large- and 2 small blocks
// similar to articlesection

function TopStoriesSection( articles ) {

    // set articles as the values from key 'articles'
    articles = articles.articles;

    let largeCard;
    let smallCards;

    // check, if articles exist
    if (typeof articles === 'string') {
      // if data type is string, display the string message
      largeCard = articles;
      smallCards = articles;
    } else {
      // if data type is object(array), set hoisted variable as an array and push article components to it
      largeCard = [];
      smallCards = [];

      for (let articleClassName in articles) {
        const lowerCaseClassName = articleClassName.toLowerCase();
        if (articleClassName[0] === 'L') {
          largeCard.push(<ArticleBlock key={`top-story-${lowerCaseClassName}`} article={articles[articleClassName]} classname={`top-story-${lowerCaseClassName}`}></ArticleBlock>);
        } else if (articleClassName[1] !== 'B') {
          smallCards.push(<ArticleBlock key={`top-story-${lowerCaseClassName}`} article={articles[articleClassName]} classname={`top-story-${lowerCaseClassName}`}></ArticleBlock>);
        }
      }
    }    


    return (
        <>
          {largeCard}
          {smallCards}
        </>
    );
}


export default TopStoriesSection;