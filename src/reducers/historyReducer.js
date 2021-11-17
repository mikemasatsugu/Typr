import * as types from '../actions/actionTypes';


const initialState = {

}

const historyReducer = (state = initialState, action) => {

  switch (action.type) {
    case types.GET_HISTORY:
      return {
        ...state,
      };

    case types.ADD_HISTORY:
      return {
        ...state,
      };

    case types.DELETE_HISTORY:
      return {
        ...state,
      }
  }
  return state;
}

export default historyReducer;