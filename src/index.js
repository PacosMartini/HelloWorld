// React boilerplate
import React from 'react';
import ReactDOM from 'react-dom';

// CSS
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';

// extension is required e.g. ./HelloWorld.js vs ./HelloWorld
import HelloWorld from './HelloWorld.js';

// Render to page
ReactDOM.render(
  <HelloWorld />, document.getElementById("root")
);