import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import { ThemeProvider } from 'styled-components';
import Login from './pages/Login';
import DashBoard from './pages/Dashboard';

const theme = {
  breakpoints: {
    xs: 0,
    sm: 480,
    md: 768,
    lg: 1024,
    xl: 1200
  }
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <ThemeProvider theme={theme}>
        <Routes>
          {/* Add Login page and parameters to dashboard route later */}
          <Route path='/' element={<Login />} />
          <Route path='/dashboard/:userId' element={<DashBoard />} />
        </Routes>
      </ThemeProvider>
    </Router>
  </React.StrictMode>
);