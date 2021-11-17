import React from 'react';
import wordsArray from '../../data/wordsArray';

const TextBox = (props) => {
  console.log('props.wordList: ', props);
  const randomizeWords = (array) => {
    const inputArray = [...array];
    //Fisher-Yates shuffle. The idea is to walk the array in the reverse order and swap each element with a random one before it
    for (let i = inputArray.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1)); // random index from 0 to i
      [inputArray[i], inputArray[j]] = [inputArray[j], inputArray[i]];
    }
    return inputArray;
  };

  const randomWords = randomizeWords(wordsArray);

  return (
    <div className="test-words">
      {randomWords.map((str, i) => (
        <span>{str} </span>
      ))}
    </div>
  );
};

export default TextBox;
