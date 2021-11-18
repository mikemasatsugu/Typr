import React from 'react';
import { useState, useEffect, useRef } from 'react';
import InputContainer from './InputContainer.jsx';
import TextBox from './TextBox.jsx';
import wordsArray from '../../data/wordsArray';
import ScoreDisplay from './ScoreDisplay.jsx';

const SECONDS = 5;

const TestContainer = () => {
  /*---------- State ----------*/
  const [randomWords, setRandomWords] = useState([]); // Randomized word list
  const [status, setStatus] = useState('inprogress'); // Test status - started, inprogress, finished
  const [countdown, setCountdown] = useState(SECONDS);
  const [wordIdx, setWordIdx] = useState(0);
  const [charIdx, setCharIdx] = useState(-1);
  const [hit, setHit] = useState(0);
  const [miss, setMiss] = useState(0);
  const [currInput, setCurrInput] = useState('');
  const [currChar, setCurrChar] = useState('');
  // Previous Test Vals
  const [charCount, setCharCount] = useState(0);
  const [prevCharCount, setPrevCharCount] = useState(0);
  const [prevWpmRaw, setPrevWpmRaw] = useState(0);
  const [prevWpm, setPrevWpm] = useState(0);
  const [prevAcc, setPrevAcc] = useState(0);
  const [backSpaceCount, setBackspaceCount] = useState(0);

  const textInput = useRef(null);

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

  // useEffect(() => {
  //   setRandomWords(randomizeWords(wordsArray));
  // }, []);

  useEffect(() => {
    if (status === 'started') {
      textInput.current.focus();
    }
  }, [status]);

  /*---------- Timer ----------*/ // Come back here to implement POST to send data after test end
  function timer() {
    setRandomWords(randomizeWords(wordsArray));
    setPrevCharCount(0);
    setPrevWpm(0);
    setPrevAcc(0);
    if (status !== 'started') {
      setStatus('started');
      let interval = setInterval(() => {
        setCountdown((prevCountDown) => {
          if (prevCountDown === 0) {
            clearInterval(interval);
            setStatus('finished');
            setCurrInput('');
            //
            setPrevWpmRaw(Math.round((charCount / 5) * 12));
            setPrevWpm(Math.round((charCount / 5) * 12));
            setPrevAcc(100);
            // console.log(prevWpmRaw, prevWpm, prevAcc);

            const now = new Date();
            const isoString = now.toUTCString();
            fetch('http://localhost:3000/history/', {
              method: 'POST',
              headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
              },
              mode: 'cors',
              body: JSON.stringify({
                date: isoString,
                wpm_raw: prevWpmRaw,
                wpm: prevWpmRaw,
                acc: prevAcc,
              }),
            });
            return SECONDS;
          } else {
            return prevCountDown - 1;
          }
        });
      }, 1000);
    }

    if (status === 'finished') {
      console.log('finished block');

      setWordIdx(0);
      setCharIdx(0);
      setHit(0);
      setMiss(0);
      setCharCount(0);
      setBackspaceCount(0);
    }
  }

  /*---------- Check Input ----------*/
  function checkInput() {
    const word = randomWords[wordIdx];
    const match = word === currInput.trim();
    console.log('wordIdx: ', wordIdx);
    console.log('randomWords[wordIdx]: ', randomWords[wordIdx]);
    console.log('currInput: ', currInput);
    if (match) {
      setHit(hit + 1);
    } else {
      setMiss(miss + 1);
    }
  }

  /*---------- Handle key press ----------*/
  function handleKeyDown({ keyCode, key }) {
    if (keyCode === 32) {
      checkInput();
      setCurrInput('');
      setWordIdx(wordIdx + 1);
      setCharIdx(0);
    } else if (keyCode === 8) {
      setBackspaceCount(backSpaceCount + 1);
      setCharCount(charCount - 1);
    } else {
      // setWordIdx(wordIdx + 1);
      setCharIdx(charIdx + 1);
      setCharCount(charCount + 1);
      setCurrChar(key);
    }
  }
  // console.log('state.randomWords in TestContainer.jsx: ', randomWords);

  return (
    <div className="test-container">
      <ScoreDisplay
        hit={hit}
        miss={miss}
        charCount={charCount}
        backSpaceCount={backSpaceCount}
        prevWpm={prevWpm}
      />
      <h2 className="timer">{countdown}</h2>

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
      <TextBox randomWords={randomWords} />
      <button className="start-btn" onClick={timer}>
        START
      </button>
    </div>
  );
};

export default TestContainer;
