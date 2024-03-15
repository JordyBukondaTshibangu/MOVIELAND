import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import MoviePage from "./pages/MoviePage";
import Header from "./components/ui/Header";
import Footer from "./components/ui/Footer";
import SearchPage from "./pages/SearchPage";

const App: React.FC = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/movies/:id" element={<MoviePage />} />
        {/* <Route path="/search" element={<SearchPage />} /> */}
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
