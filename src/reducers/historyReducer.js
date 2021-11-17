import * as types from '../actions/actionTypes';
import wordsArray from '../../data/wordsArray';

const initialState = {
  wordlist: [],
}

const historyReducer = (state = initialState, action) => {

  switch (action.type) {
    /*----------Create wordlist----------*/
    case types.CREATE_WORDLIST:
      console.log("CREATE WORDLIST REACHED")
      const randomizeWords = (array) => {
        const inputArray = [...array];
        //Fisher-Yates shuffle. The idea is to walk the array in the reverse order and swap each element with a random one before it
        for (let i = inputArray.length - 1; i > 0; i--) {
          let j = Math.floor(Math.random() * (i + 1));
          [inputArray[i], inputArray[j]] = [inputArray[j], inputArray[i]];
        }
        return inputArray;
      }

      return {
        ...state,
        wordList: randomizeWords(wordsArray)
      }
    /*----------Get history from DB----------*/
    case types.GET_HISTORY:
      return {
        ...state,
      };
    /*----------Add data to DB----------*/
    case types.ADD_HISTORY:
      return {
        ...state,
      };
    /*----------Clear history in DB----------*/
    case types.DELETE_HISTORY:
      return {
        ...state,
      }
  }
  return state;
}

export default historyReducer;