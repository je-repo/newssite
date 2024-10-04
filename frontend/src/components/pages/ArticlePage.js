import DOMPurify from 'dompurify';
import parse from 'html-react-parser';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import './ArticlePage.css';
import './stylesheet/base_styles.css';

function Article () {

    const [articleData, setArticleData] = useState('');
    let {articleId} = useParams();
    
    // API call
    useEffect(() => {

        const fetchPost = async () => {
            try {
            const response = await fetch(
                `http://127.0.0.1:8000/article/${articleId}`
                );
            let data = await response.json();
            data = data.article;
            setArticleData(data);
            } catch (error) {
                console.log(error);
            }
        };
        fetchPost();
        
    }, [articleId]);

    let sanitizedData;

    // check, if article data exists
    if (typeof articleData === 'undefined') {
        sanitizedData = 'Article not found.';
    } else {
        sanitizedData = DOMPurify.sanitize(articleData.text);
        // convert HTML strings to React components with html-react-parser
        sanitizedData = parse(sanitizedData);
    }

    return (
        <div className="article-wrapper">

                <div className="article-title-wrapper">
                    <div className="article-author">By {articleData.author}</div>
                    <div className="article-create-date">{articleData.date_created}</div>
                </div>

                {/* inserting article html via sanitizedData */}
                {sanitizedData}
                
        </div>
    )
}


function ArticlePage () {
    return (
        <>
            <Article />
        </>
    )
}


export default ArticlePage