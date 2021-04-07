// Necessary for JSX elements
import React from 'react';
import Header from './Header';
import Footer from './Footer';
import MainContentContainer from './MainContentContainer';

class HelloWorld extends React.Component{
  // constructor(props){
  //   super(props);
  // }

  render() {
    return (
      <div className="center-text">
        <Header key="Header" />
        <MainContentContainer key="MainContent" />
        <Footer key="Footer" />
      </div>
    );
  }
}

export default HelloWorld;