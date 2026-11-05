import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loadParts, removePart } from '../store/slices/partsSlice';
import AddCardForm from './AddCardForm';
import './View.css';

const View = () => {
  const dispatch = useDispatch();
  const { items, loading } = useSelector((state) => state.parts);

  useEffect(() => {
    dispatch(loadParts());
  }, [dispatch]);

  const handleDelete = (id) => {
    if (window.confirm('Удалить эту запчасть?')) {
      dispatch(removePart(id));
    }
  };

  return (
    <div className="view-container">
      <div className="catalog-section">
        <h2>Каталог автозапчастей</h2>
        {loading && <p>Загрузка деталей...</p>}
        <div className="parts-grid">
          {items.map((part) => (
            <div key={part.id} className="part-card">
              <h3>{part.name}</h3>
              <p>Артикул: <strong>{part.article}</strong></p>
              <p>Цена: <span className="price">${part.price}</span></p>
              <p>В наличии: {part.quantity} шт.</p>
              <button className="delete-btn" onClick={() => handleDelete(part.id)}>Удалить</button>
            </div>
          ))}
        </div>
      </div>
      <div className="form-section">
        <AddCardForm />
      </div>
    </div>
  );
};

export default View;
