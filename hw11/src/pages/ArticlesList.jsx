import React from "react";
import { Link } from "react-router-dom";

// List of articles
const articles = [
  { id: 1, title: "Первая статья" },
  { id: 2, title: "Вторая статья" },
  { id: 3, title: "Третья статья" },
  { id: 4, title: "Четвёртая статья" },
];

// Component to display the list of articles
const ArticlesList = () => {
  return (
    <div>
      <h1>Список статей</h1>
      <ul>
        {/* Render links to each article */}
        {articles.map((article) => (
          <li key={article.id}>
            <Link to={`/articles/${article.id}`}>{article.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ArticlesList;
