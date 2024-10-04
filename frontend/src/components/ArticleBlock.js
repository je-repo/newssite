import React from 'react';
import { Link } from 'react-router-dom';
import "./ArticleBlock.css";

// block for previewing individual articles
// displays article picture and title
// entire block is a clickable link to the respective article's page

function ArticleBlock({ article, classname = "article-block" }) {
  return (
      <div className={classname}>
          <Link to={`/article/${article.pk}`} className="article-block-link">
            <img className="article-block-image" src={article.picture_url} alt={article.picture_caption} />
            <h3 className="artick-block-title">{article.title}</h3>
          </Link>
      </div>
  )
}

export default ArticleBlock;