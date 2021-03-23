// Necessary for JSX elements
import React from 'react';
import MainContent from './MainContent';
import Header from './Header';
import Footer from './Footer';

class HelloWorld extends React.Component{
  // constructor(props){
  //   super(props);
  // }

  render() {
    return (
      <div className="center-text">
        <Header key="Header" />
        <MainContent key="MainContent" />
        <Footer key="Footer" />
      </div>
    );
  }
}

export default HelloWorld;