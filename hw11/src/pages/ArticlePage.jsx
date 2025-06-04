import React from "react";
import { useParams, useNavigate, useLocation } from "react-router-dom";

// Article data
const articles = {
  1: { title: "Первая статья", content: "Контент первой статьи." },
  2: { title: "Вторая статья", content: "Контент второй статьи." },
  3: { title: "Третья статья", content: "Контент третьей статьи." },
  4: { title: "Четвёртая статья", content: "Контент четвёртой статьи." },
};

// Component to display a single article page
const ArticlePage = () => {
  // Get article id from route parameters
  const { id } = useParams();
  // Navigation hook
  const navigate = useNavigate();
  // Location hook for current path
  const location = useLocation();

  // Get article by id
  const article = articles[id];

  // If article not found, show message
  if (!article) return <p>Статья не найдена.</p>;

  return (
    <div style={{ textAlign: "center", padding: "40px" }}>
      {/* Article title and content */}
      <h1>{article.title}</h1>
      <p>{article.content}</p>
      {/* Show current path */}
      <p>
        <i>Текущий путь: {location.pathname}</i>
      </p>
      {/* Button to go back */}
      <button
        onClick={() => navigate(-1)}
        style={{
          marginTop: "20px",
          padding: "10px 20px",
          backgroundColor: "#007bff",
          border: "none",
          borderRadius: "6px",
          color: "#fff",
          cursor: "pointer",
          fontWeight: "bold",
        }}
      >
        Назад
      </button>
    </div>
  );
};

export default ArticlePage;
