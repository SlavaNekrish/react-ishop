import React from 'react';

import { useState, useRef } from 'react';
import { useDispatch } from 'react-redux';
import { setSort } from '../redux/slices/filterSlice';
import { useEffect } from 'react';

const listArr = [
  { name: 'популярности 🡓', code: 0, sortProp: 'rating' },
  { name: 'популярности 🡑', code: 1, sortProp: '-rating' },
  { name: 'цене 🡓', code: 2, sortProp: 'price' },
  { name: 'цене 🡑', code: 3, sortProp: '-price' },
  { name: 'алфавиту 🡓', code: 4, sortProp: 'title' },
  { name: 'алфавиту 🡑', code: 5, sortProp: '-title' },
];

const Sort = React.memo(({ value }) => {
  const dispatch = useDispatch();
  const sortRef = useRef();

  const [isVisible, setOpen] = useState(false);

  const onClickSelectedItem = (obj) => {
    dispatch(setSort(obj));
    setOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (sortRef.current && !event.composedPath().includes(sortRef.current)) {
        setOpen(false);
      }
    };
    document.body.addEventListener('click', handleClickOutside);

    return () => document.body.removeEventListener('click', handleClickOutside);
  }, []);

  const list = listArr.map((obj) => (
    <li
      onClick={() => onClickSelectedItem(obj)}
      className={value.sortProp === obj.sortProp ? 'active' : ''}
      key={obj.code}>
      {obj.name}
    </li>
  ));

  return (
    <div ref={sortRef} className="sort">
      <div className="sort__label">
        <svg
          width="10"
          height="6"
          viewBox="0 0 10 6"
          fill="none"
          xmlns="http://www.w3.org/2000/svg">
          <path
            d="M10 5C10 5.16927 9.93815 5.31576 9.81445 5.43945C9.69075 5.56315 9.54427 5.625 9.375 5.625H0.625C0.455729 5.625 0.309245 5.56315 0.185547 5.43945C0.061849 5.31576 0 5.16927 0 5C0 4.83073 0.061849 4.68424 0.185547 4.56055L4.56055 0.185547C4.68424 0.061849 4.83073 0 5 0C5.16927 0 5.31576 0.061849 5.43945 0.185547L9.81445 4.56055C9.93815 4.68424 10 4.83073 10 5Z"
            fill="#2C2C2C"
          />
        </svg>
        <b>Сортировка по:</b>
        <span onClick={() => setOpen(!isVisible)}>{value.name}</span>
      </div>
      {isVisible && (
        <div className="sort__popup">
          <ul>{list}</ul>
        </div>
      )}
    </div>
  );
});

export default Sort;
