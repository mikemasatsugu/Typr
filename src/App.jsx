import React from 'react';
import { useState, useEffect, useRef } from 'react';
import wordsArray from '../data/wordsArray';

import MainContainer from './components/MainContainer.jsx';

const TOTALWORDS = 200;
const SECONDS = 30;

function App() {
  return (
    // <div className="App">
    //   <div className="main-container">
    //     <div className="card">
    //       <div className="card-content"></div>
    //     </div>
    //   </div>
    // </div>

    <div className="App">
      <MainContainer />
    </div>
  );
}

export default App;
