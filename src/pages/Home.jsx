import React, { useEffect, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Categories, Sort, BalloonBlock, Skeleton, Pagination, BackToTop } from '../components';
import { catArr } from '../components/Categories';

import { selectFilter, setCategoryId, setCurrentPage } from '../redux/slices/filterSlice';
import { fetchItems, selectItemData } from '../redux/slices/itemSlice';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';

const Home = () => {
  const dispatch = useDispatch();

  const { items, status } = useSelector(selectItemData);
  const { categoryId, sort, currentPage, searchValue } = useSelector(selectFilter);

  const onChangeCategory = useCallback((id) => {
    dispatch(setCategoryId(id));
  }, []);

  const onChangePage = (number) => {
    dispatch(setCurrentPage(number));
  };

  const getItems = async () => {
    const sortBy = sort.sortProp.replace('-', '');
    const order = sort.sortProp.includes('-') ? 'asc' : 'desc';
    const category = categoryId > 0 ? `category=${categoryId}` : '';
    const search = searchValue ? `&search=${searchValue}` : '';

    dispatch(
      fetchItems({
        sortBy,
        order,
        category,
        search,
        currentPage,
      }),
    );
    window.scrollTo(0, 0);
  };

  useEffect(() => {
    getItems();
  }, [categoryId, sort.sortProp, searchValue, currentPage]);

  const balloons = items.map((el) => (
    <React.Fragment key={el.id}>
      <BalloonBlock {...el} />
    </React.Fragment>
  ));

  const skeletons = [...new Array(6)].map((_, index) => <Skeleton key={index} />);

  return (
    <div className="container">
      {' '}
      <div className="content__top">
        <Categories value={categoryId} onChangeCategory={onChangeCategory} />
        <Sort value={sort} />
      </div>
      <h2 className="content__title">Главная / {catArr[categoryId].name}</h2>
      <Box>
        <Toolbar id="back-to-top-anchor" />
        {status === 'error' ? (
          <div className="content__error-info">
            <h2> Произошла ошибка 😕 </h2>
            <p>К сожалению, не удалось получить товары. Попробуйте повторить попытку позже</p>
          </div>
        ) : (
          <div className="content__items">{status === 'loading' ? skeletons : balloons}</div>
        )}
        {categoryId !== 0 && <Pagination currentPage={currentPage} onChangePage={onChangePage} />}
      </Box>
      {categoryId === 0 && <BackToTop />}
    </div>
  );
};

export default Home;
