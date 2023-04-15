import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import axios from 'axios';

import { useParams, useNavigate } from 'react-router-dom';
import { addItem, selectCartItemById } from '../redux/slices/cartSlicee';
import { selectItemData, getItemsForSlider } from '../redux/slices/itemSlice';
import { Slider } from '../components/Slider';
import { useResize } from '../components/useResize/useResize';

const FullItem = () => {
  const dispatch = useDispatch();
  const [item, setItem] = useState();
  const { items } = useSelector(selectItemData);
  const { id } = useParams();
  const { isScreenMomile, isScreenSm, isScreenMd, isScreenLg, isScreenXl } = useResize();

  const navigate = useNavigate();

  const onClickAdd = () => {
    dispatch(addItem(item));
  };

  useEffect(() => {
    async function fetchItem() {
      try {
        const { data } = await axios.get('https://64295fee5a40b82da4d189a9.mockapi.io/items/' + id);
        setItem(data);
      } catch (error) {
        alert('Ошибка при получении товара');
        navigate('/');
      }
    }
    fetchItem();
    dispatch(getItemsForSlider());
  }, [id]);

  const cartItem = useSelector(selectCartItemById(id));

  const addedCount = cartItem ? cartItem.count : 0;

  if (!item) {
    return 'Загрузка...';
  }

  return (
    <div className="container">
      <h2 className="fullitem__title">{item.title}</h2>
      <div className="fullitem__content">
        <img src={item.imageUrl} className="fullitem__picture" />
        <div className="fullitem__info">
          <h4>{item.price} Br</h4>
          <button onClick={onClickAdd} className="button button--outline button--add">
            <svg
              width="12"
              height="12"
              viewBox="0 0 12 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <path
                d="M10.8 4.8H7.2V1.2C7.2 0.5373 6.6627 0 6 0C5.3373 0 4.8 0.5373 4.8 1.2V4.8H1.2C0.5373 4.8 0 5.3373 0 6C0 6.6627 0.5373 7.2 1.2 7.2H4.8V10.8C4.8 11.4627 5.3373 12 6 12C6.6627 12 7.2 11.4627 7.2 10.8V7.2H10.8C11.4627 7.2 12 6.6627 12 6C12 5.3373 11.4627 4.8 10.8 4.8Z"
                fill="white"
              />
            </svg>
            <span>Добавить</span>
            {addedCount > 0 && <i>{addedCount}</i>}
          </button>
          <p>{item.description}</p>
        </div>
      </div>
      <h2 className="fullitem__titleSlider">Возможно, вас заинтересуют другие наши товары:</h2>
      {isScreenLg && <Slider slides={items} quant={5} />}
      {isScreenMd && !isScreenLg && <Slider slides={items} quant={3} />}
      {!isScreenMomile && !isScreenMd && <Slider slides={items} quant={2} />}
      {isScreenMomile && <Slider slides={items} quant={1} />}
    </div>
  );
};

export default FullItem;
