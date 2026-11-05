import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Header from './components/Header';
import ProtectedRoute from './components/ProtectedRoute';
import LoginForm from './components/LoginForm';
import View from './components/View';
import NotFound from './components/NotFound';
import './App.css';

const App = () => (
  <div className="app">
    <Header />
    <main className="app-main">
      <Routes>
        <Route path="/" element={<Navigate to="/login" replace />} />
        <Route path="/login" element={<LoginForm />} />
        <Route path="/view" element={<ProtectedRoute><View /></ProtectedRoute>} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </main>
  </div>
);

export default App;
