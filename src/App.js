import React, { Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import MainLayout from './layouts/MainLayout';
import './scss/app.scss';

const Cart = React.lazy(() => import(/* webpackChunkName: "Cart" */ './pages/Cart'));
const FullItem = React.lazy(() => import(/* webpackChunkName: "FullItem" */ './pages/FullItem'));

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route path="" element={<Home />} />
        <Route path="/:category" element={<Home />}>
          <Route path=":sortParam" element={<Home />} />
        </Route>
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
