import React, { useCallback, useRef, useState } from 'react';
import debounce from 'lodash.debounce';
import { useDispatch, useSelector } from 'react-redux';
import { setSearchValue } from '../../redux/slices/filterSlice';

import styles from './Search.module.scss';

const Search = () => {
  const dispatch = useDispatch();
  const [value, setValue] = useState(''); // быстрое отражение данных в input
  const inputRef = useRef(null);

  const updateSearchValue = useCallback(
    debounce((str) => {
      dispatch(setSearchValue(str));
    }, 300),
    [],
  );

  const onChangeInput = (event) => {
    setValue(event.target.value);
    updateSearchValue(event.target.value);
  };

  const onCLickClear = () => {
    dispatch(setSearchValue(''));
    setValue('');
    inputRef.current?.focus();
  };

  return (
    <div className={styles.root}>
      <svg
        className={styles.icon}
        width="10"
        height="10"
        viewBox="0 0 10 10"
        fill="none"
        xmlns="http://www.w3.org/2000/svg">
        <path
          d="M4.1998 0.600006C2.32402 0.600006 0.799805 2.12422 0.799805 4.00001C0.799805 5.87579 2.32402 7.40001 4.1998 7.40001C4.94199 7.40001 5.62793 7.16094 6.1873 6.75626L8.81855 9.38126L9.38105 8.81876L6.78105 6.21251C7.29199 5.61719 7.5998 4.84454 7.5998 4.00001C7.5998 2.12422 6.07559 0.600006 4.1998 0.600006ZM4.1998 1.00001C5.85918 1.00001 7.1998 2.34063 7.1998 4.00001C7.1998 5.65938 5.85918 7.00001 4.1998 7.00001C2.54043 7.00001 1.1998 5.65938 1.1998 4.00001C1.1998 2.34063 2.54043 1.00001 4.1998 1.00001Z"
          fill="black"
        />
      </svg>
      <input
        ref={inputRef}
        value={value}
        onChange={onChangeInput}
        className={styles.input}
        placeholder="Поиск товара.."
      />
      {value && (
        <svg
          onClick={onCLickClear}
          className={styles.clearIcon}
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg">
          <path d="M10 8.586L2.929 1.515 1.515 2.929 8.586 10l-7.071 7.071 1.414 1.414L10 11.414l7.071 7.071 1.414-1.414L11.414 10l7.071-7.071-1.414-1.414L10 8.586z" />
        </svg>
      )}
    </div>
  );
};

export default Search;
