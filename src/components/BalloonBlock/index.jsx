import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { addItem, selectCartItemById } from '../../redux/slices/cartSlicee';
import { Link } from 'react-router-dom';
import ToolTipStyled from '../ToolTipStyled';

const typeNames = ['воздушные', 'гелевые'];

function BalloonBlock({ id, title, price, imageUrl, types }) {
  const dispatch = useDispatch();
  const cartItem = useSelector(selectCartItemById(id));
  const [activeType, setActiveType] = useState(0);

  const addedCount = cartItem ? cartItem.count : 0;

  const onClickAdd = () => {
    const item = {
      id,
      title,
      price,
      imageUrl,
      type: typeNames[activeType],
    };
    dispatch(addItem(item));
  };

  return (
    <div className="balloon-block-wrapper">
      <div className="balloon-block">
        <ToolTipStyled
          title="Клик для подробной инфо"
          enterDelay={2000}
          leaveDelay={0}
          followCursor>
          <Link to={`/fullItem/${id}`}>
            <img className="balloon-block__image" src={imageUrl} alt="Balloon" />
            <h4 className="balloon-block__title">{title}</h4>
          </Link>
        </ToolTipStyled>
        <div className="balloon-block__selector">
          <ul>
            {types.map((typeId, i) => (
              <li
                onClick={() => setActiveType(typeId)}
                className={activeType === typeId ? 'active' : ''}
                key={typeId}>
                {typeNames[typeId]}
              </li>
            ))}
          </ul>
        </div>
        <div className="balloon-block__bottom">
          <div className="balloon-block__price">{price} Br</div>
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
        </div>
      </div>
    </div>
  );
}

export default BalloonBlock;
