import * as types from './actionTypes';


export const getHistoryActionCreator = () => ({
  type: types.GET_HISTORY
});

export const addHistoryActionCreator = (data) => ({
  type: types.ADD_HISTORY,
  payload: data
});

export const deleteHistoryActionCreator = () => ({
  type: types.DELETE_HISTORY
});


export const createWordListActionCreator = () => {
  type: types.CREATE_WORDLIST
}