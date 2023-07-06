import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Ecommerce from '../components/Ecommerce';
import Page from '../components/Page';
import Products from '../components/Products';
import Search from '../components/Search';
import NotFound from '../../../components/NotFound';


function Home() {
  return (
    <Routes>
      <Route index element={<Ecommerce />}></Route>
      <Route path="collections/"  element={<Page />}>
        <Route index element={<Products />}></Route>
        <Route path='new-arrivals' element={<Products />}></Route>
        <Route path='home-bath' element={<Products />}></Route>
        <Route path='kitchen-dinning' element={<Products />}></Route>
        <Route path='office-craft' element={<Products />}></Route>
        <Route path='personal-goods' element={<Products />}></Route>
      </Route>
      <Route path="search/*" element={<Search />}></Route>
      <Route path='*' element={<NotFound/>}></Route>
    </Routes>
  );
}

export default Home;