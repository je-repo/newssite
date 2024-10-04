import React from 'react';
import ArticleBlock from './ArticleBlock';
import "./ArticleSection.css";


// container that displays article blocks horizontally
// intended to show 3-4 articles
// displays title at the top

function ArticleSection({ category, articles }) {

  // hoisted variable value to be decided by if statement below
  let previewCards;

  // check, if articles exist
  if (typeof articles === 'string') {
    // if data type is string, console.log the string error message
    console.log(articles);
  } else {
    // if data type is object(array), set hoisted variable as an array and push article components to it
    previewCards = [];
    articles.map(article => previewCards.push(<ArticleBlock key={article.pk} article={article}/>));    
  }


  return (
    <div className="article-section-wrapper">
      <h3 className="article-section-title">{category}</h3>
      <div className="article-section">
        {previewCards}
      </div>
    </div>
  )
}


export default ArticleSection;