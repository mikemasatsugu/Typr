import React from 'react';
import { useState, useEffect, useRef } from 'react';
import InputContainer from './InputContainer.jsx';
import TextBox from './TextBox.jsx';

const TestContainer = () => {
  return (
    <div className="test-container">
      <InputContainer />
      <TextBox />
    </div>
  );
};

export default TestContainer;
