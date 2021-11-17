import React from 'react';
import { useState, useEffect, useRef } from 'react';
import InputContainer from './InputContainer.jsx';
import TextBox from './TextBox.jsx';
import wordsArray from '../../data/wordsArray';

const SECONDS = 30;

const TestContainer = () => {
  /*---------- State ----------*/
  const [randomWords, setRandomWords] = useState([]);

  /*---------- Generating random word list and storing in state ----------*/
  const randomizeWords = (array) => {
    const inputArray = [...array];
    //Fisher-Yates shuffle. The idea is to walk the array in the reverse order and swap each element with a random one before it
    for (let i = inputArray.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1)); // random index from 0 to i
      [inputArray[i], inputArray[j]] = [inputArray[j], inputArray[i]];
    }
    return inputArray;
  };

  useEffect(() => {
    setRandomWords(randomizeWords(wordsArray));
  }, []);

  console.log('state.randomWords in TestContainer.jsx: ', randomWords);
  return (
    <div className="test-container">
      <InputContainer randomWords={randomWords} />
      <TextBox randomWords={randomWords} />
    </div>
  );
};

export default TestContainer;
