// React boilerplate
import React from 'react';
import ReactDOM from 'react-dom';

// CSS
import 'bootstrap/dist/css/bootstrap.min.css';

// local imports
import HelloWorld from './Components/HelloWorld';

// Render to page
ReactDOM.render(
  <HelloWorld />, document.getElementById("root")
);