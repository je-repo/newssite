import { Routes, Route } from 'react-router-dom';
import React from 'react';
import HomePage from './components/pages/HomePage';
import CategoryPage from './components/pages/CategoryPage';
import ArticlePage from './components/pages/ArticlePage';
import './App.css';

function App() {
  return (
    <Routes>
      <Route path="/" element={ <HomePage /> }></Route>
      <Route path="/article/:articleId" element={ <ArticlePage /> }></Route>
      <Route path="/:categoryName" element={<CategoryPage />}></Route>
    </Routes>
  );
}

export default App;
