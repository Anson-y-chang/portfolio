import React from 'react';
import Nav from './Nav'
import Profile from './Profile';
import Project from './Project';
import Contact from './Contact'

function Home() {

  return (
    <>
      <Nav />
      <Profile />
      <Project />
      <Contact />
    </>
  );
}

export default Home;