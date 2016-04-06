import React from 'react';
import Note from './Note.jsx';

export default class App extends React.Component {
  render() {
  var string = "";
  for(var i = 0;i<5;i++){
    string += i+1;
  }
  return(<div>{string}<Note /></div>);
  }
}