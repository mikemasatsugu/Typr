import React from 'react';
import { useState, useEffect, useRef } from 'react';

const InputContainer = ({
  randomWords,
  setCurrInput,
  textInput,
  currInput,
  handleKeyDown,
}) => {
  console.log('currInput: ', currInput);
  return (
    <div className="input-container">
      <input
        className="input"
        value={currInput}
        type="text"
        ref={textInput}
        onChange={(e) => setCurrInput(e.target.value)}
        onKeyDown={handleKeyDown}
      />
    </div>
  );
};

export default InputContainer;
