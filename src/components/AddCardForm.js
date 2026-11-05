import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { createPart } from '../store/slices/partsSlice';
import { partsAPI } from '../services/api';
import './AddCardForm.css';

const AddCardForm = () => {
  const [name, setName] = useState('');
  const [article, setArticle] = useState('');
  const [price, setPrice] = useState('');
  const [quantity, setQuantity] = useState('');
  const [error, setError] = useState('');

  const dispatch = useDispatch();

  const handleAdd = (e) => {
    e.preventDefault();
    setError('');

    if (!partsAPI.isArticleUnique(article)) {
      setError('Запчасть с таким артикулом уже существует!');
      return;
    }

    dispatch(createPart({
      name,
      article,
      price: Number(price),
      quantity: Number(quantity)
    }));

    setName('');
    setArticle('');
    setPrice('');
    setQuantity('');
  };

  return (
    <form className="add-form" onSubmit={handleAdd}>
      <h3>Добавить запчасть</h3>
      {error && <div className="form-error">{error}</div>}
      <input
        type="text"
        placeholder="Название детали"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />
      <input
        type="text"
        placeholder="Артикул (например: TR-100)"
        value={article}
        onChange={(e) => setArticle(e.target.value)}
        required
      />
      <input
        type="number"
        placeholder="Цена ($)"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
        required
      />
      <input
        type="number"
        placeholder="Количество (шт.)"
        value={quantity}
        onChange={(e) => setQuantity(e.target.value)}
        required
      />
      <button type="submit">Добавить в базу</button>
    </form>
  );
};

export default AddCardForm;
