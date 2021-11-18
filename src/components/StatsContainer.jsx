import React from 'react';
import { useState, useEffect, useRef } from 'react';

const StatsContainer = () => {
  const [resultsList, setResultsList] = useState([]);

  function handleGet() {
    fetch('http://localhost:3000/history')
      .then((data) => data.json())
      .then((results) => {
        console.log('results: ', results);
        const arr = results.map((el, i) => {
          return (
            <p>
              <strong>DATE</strong>: {el.date} <strong>WPM</strong>: {el.wpm},{' '}
              <strong>ACC</strong>: {el.acc}
            </p>
          );
        });
        console.log(arr);
        setResultsList(arr);
      });
  }

  function handleDelete() {
    console.log('delete clicked');
    fetch('http://localhost:3000/history/', {
      method: 'DELETE',
    })
      .then((res) => res.json())
      .then((res) => setResultsList([]));
  }
  return (
    <div className="stats-container">
      <div className="stats-btn-container">
        <button className="get-history db-btn" onClick={handleGet}>
          Get Test History from DB
        </button>
        <button className="delete-history db-btn" onDoubleClick={handleDelete}>
          Delete Test History from DB
          <br /> <em>(Double Click)</em>
        </button>
      </div>
      <div id="history-div">{resultsList}</div>
    </div>
  );
};

export default StatsContainer;
