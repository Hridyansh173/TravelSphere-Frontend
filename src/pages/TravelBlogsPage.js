import React, { useState, useEffect, useCallback } from 'react';
import axios from 'axios';

const TravelNewsPage = () => {
  const [articles, setArticles] = useState([]);
  const [page, setPage] = useState(0);

  const fetchArticles = useCallback(async () => {
    try {
      const response = await axios.get(`https://api.nytimes.com/svc/search/v2/articlesearch.json?q=travel&page=${page}&api-key=xeS3AcqjbKRGCln6HfpH0axmCVvPLf8a`);
      setArticles((prevArticles) => [...prevArticles, ...response.data.response.docs]);
    } catch (error) {
      console.error('Error fetching travel articles:', error);
    }
  }, [page]);

  useEffect(() => {
    fetchArticles();
  }, [fetchArticles]);

  useEffect(() => {
    const handleScroll = () => {
      if (window.innerHeight + document.documentElement.scrollTop === document.documentElement.offsetHeight) {
        setPage((prevPage) => prevPage + 1);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-200 via-blue-300 to-blue-400 py-8 px-4">
      <h1 className="text-5xl font-bold text-center text-white mb-8">Travel Blogs and News</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {articles.map((article, index) => (
          <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden transform transition-transform hover:scale-105">
            <img src={`https://www.nytimes.com/${article.multimedia[0]?.url}`} alt={article.headline.main} className="w-full h-48 object-cover" />
            <div className="p-6">
              <h2 className="text-2xl font-bold text-gray-800 mb-2">{article.headline.main}</h2>
              <p className="text-gray-600 mb-4 line-clamp-3">{article.abstract}</p>
              <a href={article.web_url} className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">
                Read more
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TravelNewsPage;
