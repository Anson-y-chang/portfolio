import React from 'react';
import { Routes, Route} from 'react-router-dom';
import HomeTwice from '../components/HomeTwice';
import Profile from '../components/Profile';
import Discography from '../components/Discography';
import Gallery from '../components/Gallery';
import Video from '../components/Video';
import NotFound from '../../../components/NotFound';


function Home() {

  return (
    <Routes>
      <Route index element={<HomeTwice />}></Route>
      <Route path="profile"  element={<Profile />}></Route>
      <Route path='discography' element={<Discography/>}></Route>
      <Route path='gallery' element={<Gallery/>}></Route>
      <Route path='video' element={<Video/>}></Route>
      <Route path='*' element={<NotFound/>}></Route>
    </Routes>
  );
}

export default Home;