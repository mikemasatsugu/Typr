import React, { Component } from 'react';
import { useState, useEffect, useRef } from 'react';
import wordsArray from '../data/wordsArray';

import MainContainer from './components/MainContainer.jsx';

const App = () => {
  return (
    <div className="App">
      <nav className="navbar"></nav>
      <MainContainer />
    </div>
  );
};

export default App;
