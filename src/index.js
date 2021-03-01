import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

function HelloWorld(){
  return (
    <div>
      <p>Hello World</p>
    </div>
  )
}

ReactDOM.render(
  <HelloWorld/>, document.getElementById("root")
);