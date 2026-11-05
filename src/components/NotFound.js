import React from 'react';
import { Link } from 'react-router-dom';
import './NotFound.css';

const NotFound = () => (
  <div className="not-found">
    <h1>404</h1>
    <p>Страница не найдена</p>
    <Link to="/login" className="home-link">Вернуться на главную</Link>
  </div>
);

export default NotFound;
