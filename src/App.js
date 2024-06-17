import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Main from "./components/mainPage";
import About from "./components/about";
import Header from "./components/header";
import Book from "./components/book";

function App() {
    return (
        <Router>
            <div className="mainCenter">
                <Header/>
                <Routes>
                    <Route path="/" element={<Main />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/book" element={<Book />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
