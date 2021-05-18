import React from 'react';
import ReactDOM from 'react-dom';
import SamuraiAppJS from './App';
 
export let rerenderfunc = (state) => {

ReactDOM.render(
  <SamuraiAppJS />,
  document.getElementById('root')
);
};

rerenderfunc();