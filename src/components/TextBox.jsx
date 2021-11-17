import React from 'react';
import wordsArray from '../../data/wordsArray';

const TextBox = ({ randomWords }) => {
  // const randomWords = randomizeWords(wordsArray);

  return (
    <div className="test-words">
      {randomWords.map((str, i) => (
        <span key={i}>{str} </span>
      ))}
    </div>
  );
};

export default TextBox;
