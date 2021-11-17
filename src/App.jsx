import React, { Component } from 'react';
import { useState, useEffect, useRef } from 'react';
import wordsArray from '../data/wordsArray';

import MainContainer from './components/MainContainer.jsx';

const App = (props) => {
  return (
    <div className="App">
      <MainContainer />
    </div>
  );
};

export default App;
