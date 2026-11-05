import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { logout } from '../store/slices/authSlice';
import './Header.css';

const Header = () => {
  const { user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  return (
    <header className="header">
      <div className="header-title">🛞 ДеталиПрофи</div>
      {user && (
        <div className="header-user">
          <span>Пользователь: <strong>{user.name}</strong></span>
          <button className="logout-btn" onClick={() => dispatch(logout())}>Выйти</button>
        </div>
      )}
    </header>
  );
};

export default Header;
