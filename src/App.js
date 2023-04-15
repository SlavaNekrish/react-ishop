import React, { Suspense } from 'react';
import './scss/app.scss';
import { Routes, Route } from 'react-router-dom';
import { useState } from 'react';

import Home from './pages/Home';
import NotFound from './pages/NotFound';
import MainLayout from './layouts/MainLayout';

const Cart = React.lazy(() => import(/* webpackChunkName: "Cart" */ './pages/Cart'));
const FullItem = React.lazy(() => import(/* webpackChunkName: "FullItem" */ './pages/FullItem'));

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route path="" element={<Home />} />
        <Route
          path="cart"
          element={
            <Suspense fallback={<div>Идет загрузка корзины..</div>}>
              <Cart />
            </Suspense>
          }
        />
        <Route
          path="fullItem/:id"
          element={
            <Suspense fallback={<div>Идет загрузка..</div>}>
              <FullItem />
            </Suspense>
          }
        />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}

export default App;
