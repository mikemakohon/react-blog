import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/home";
import Books from "./pages/books";
import Book from "./pages/book";
import Statistics from "./pages/statistics";

import Header from "./components/Header";

import GlobalStyles from "./components/styles/Global";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <GlobalStyles />
        <Header />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/books" element={<Books />} />
          <Route path="/books/:id" element={<Book />} />
          <Route path="/statistics" element={<Statistics />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
