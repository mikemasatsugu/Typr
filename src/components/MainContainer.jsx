import React from 'react';
import { useState, useEffect, useRef } from 'react';
import TestContainer from './TestContainer.jsx';
import StatsContainer from './StatsContainer.jsx';

const MainContainer = () => {
  return (
    <div className="main-container">
      <TestContainer />
      <StatsContainer />
    </div>
  );
};

export default MainContainer;
