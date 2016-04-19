import React from 'react';
import Note from './Note.jsx';
import AppBar from './AppBar.jsx';

import './app.css';

export default class App extends React.Component {
  render() {
  var string = "";
  for(var i = 0;i<10;i++){
    string += i+1;
  }
  return(
      <div>
          <AppBar/>
          {string}
          <Note />
      </div>);
  }
}