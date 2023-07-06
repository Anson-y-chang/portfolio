import React, { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import Intro from '../component/Intro';
import Record from "../component/Record"
import Present from "../component/Present"
import NotFound from '../../../components/NotFound';


function Bookkeep() {
  useEffect(() => {
    document.title = 'Bookkeep'
  },[]) 

  return (
    <Routes>
      <Route index element={<Intro />}></Route>
      <Route path="/record"  element={<Record />}></Route>
      <Route path='present' element={<Present/>}></Route>
      <Route path='*' element={<NotFound/>}></Route>
    </Routes>
  );
}

export default Bookkeep;