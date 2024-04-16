import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/Home';
import LoginPage from './pages/Login';
import RegisterPage from './pages/Register';
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    body {
        font-family: 'Roboto', sans-serif;
        margin: 0;
        padding: 0;
    }
`;

const App: React.FC = () => {
    return (
        <Router>
            <GlobalStyle />
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/login" element={<LoginPage />} />
                <Route path="/register" element={<RegisterPage />} />
                {/* Add more routes as needed */}
            </Routes>
        </Router>
    );
};

export default App;
