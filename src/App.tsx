import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import MoviePage from "./pages/MoviePage";
import Header from "./components/ui/Header";
import Footer from "./components/ui/Footer";
import SearchPage from "./pages/SearchPage";
import { ErrorProvider } from "./context/ErrorContext";
import NotFoundPage from "./pages/404Page";

const App: React.FC = () => {
  return (
    <ErrorProvider>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/movies/:movieId" element={<MoviePage />} />
          <Route path="/search" element={<SearchPage />} />
          {/* catch 404 page */}
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
        <Footer />
      </Router>
    </ErrorProvider>
  );
};

export default App;
