import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ArticleBlock from '../ArticleBlock'

import './CategoryPage.css';
import './stylesheet/base_styles.css';


function CategoryPage() {

    // fetch api data from category page

    // let variable with url parameters being passed
    let {categoryName} = useParams();
    let categoryNameTitleCase = categoryName[0].toUpperCase() + categoryName.slice(1,);

    // category page data used to render article sections
    const [categoryPageData, setCategoryPageData] = useState([]);

    useEffect(() => {

        const fetchData = async () => {
        try {

            const response = await fetch(
                `http://127.0.0.1:8000/category/${categoryName}`
            );

            let data = await response.json();
            
            setCategoryPageData(data);
        } catch (error) {
            console.log(error);
        }
        }
        fetchData();

    }, [categoryName]);

    console.log(`CATEGORY DATA: ${JSON.stringify(categoryPageData)}`);

    let previewCards;
    let pageTitle;
    
    for (let key in categoryPageData) {

        pageTitle = key.toUpperCase();
        let articlesArray= categoryPageData[key];

        // check, if data exists
        if (typeof articlesArray === 'string') {
            previewCards = articlesArray;
        } else {
            previewCards = [];
            // Review this error and any safey concerns.
            articlesArray.map(article => previewCards.push(<ArticleBlock key={article.pk} article={article}/>));
        }
    }

    
    return (
        <>
            <title>{categoryNameTitleCase}</title>
            <div className="category-page-wrapper">
                <h2 className="category-page-title">{pageTitle}</h2>
                <div className="category-cards-section">
                    {previewCards}
                </div>
            </div>
        </>
    );
}

export default CategoryPage