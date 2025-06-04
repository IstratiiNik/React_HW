import "./App.css";
import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
import Home from "./pages/Home";
import ArticlesList from "./pages/ArticlesList";
import ArticlePage from "./pages/ArticlePage";

// Main application component with routing
const App = () => (
  <BrowserRouter>
    {/* Navigation menu */}
    <nav>
      <ul>
        <li>
          <NavLink to="/">Главная</NavLink>
        </li>
        <li>
          <NavLink to="/articles">Статьи</NavLink>
        </li>
      </ul>
    </nav>
    {/* Application routes */}
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/articles" element={<ArticlesList />} />
      <Route path="/articles/:id" element={<ArticlePage />} />
    </Routes>
  </BrowserRouter>
);

export default App;
