import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import About from './about';
import Main from './maincarousel'; 
import Service from './services';  

export default function rout() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Main />} exact />
                <Route path="/about" element={<About />} />
                <Route path="/services" element={<Service />} />
                <Route path="*" element={<h2>404 Not Found</h2>} />
            </Routes>
        </Router>
    );
}
