// Necessary for JSX elements
import React from 'react';
import MainContent from './MainContent';
import Header from './Header';
import Footer from './Footer';

function HelloWorld(){
    return (
      <div className="center-text">
        <Header />
        <MainContent />
        <Footer />
      </div>
    );
  }

  export default HelloWorld;