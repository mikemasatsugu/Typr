import React from 'react';
import { useState, useEffect, useRef } from 'react';

const ScoreDisplay = ({ charCount, backSpaceCount, prevWpm }) => {
  return (
    <div>
      <div className="wpm">
        WPM: {prevWpm}
        <div className="charCount">Characters typed: {charCount}</div>
      </div>
    </div>
  );
};

export default ScoreDisplay;
