import React from 'react';
import wordsArray from '../../data/wordsArray';

const TextBox = ({ randomWords, getCharClass, wordIdx }) => {
  // const randomWords = randomizeWords(wordsArray);

  return (
    <div className="text-box disable-scrollbars">
      {/* {randomWords.map((str, i) => (
        <span key={i}>{str} </span>
      ))} */}

      {randomWords.map((word, i) => (
        <span key={i}>
          <span>
            {word.split('').map((char, idx) => (
              <span className={getCharClass(i, idx, char)} key={idx}>
                {char}
              </span>
            ))}
          </span>
          <span> </span>{' '}
        </span>
      ))}
    </div>
  );
};

export default TextBox;
