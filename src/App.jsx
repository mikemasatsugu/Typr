import React, { Component } from 'react';
import { useState, useEffect, useRef } from 'react';
import wordsArray from '../data/wordsArray';
import MainContainer from './components/MainContainer.jsx';
import { createWordListActionCreator } from './actions/actions';
import { connect, useDispatch } from 'react-redux';

const mapDispatchToProps = (dispatch) => ({
  createWordList: () => dispatch(createWordListActionCreator()),
});

const App = (props) => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(createWordList());
  }, []);

  return (
    <div className="App">
      <MainContainer />
    </div>
  );
};

export default App;
