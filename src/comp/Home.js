import React from 'react';
import Header from './Header';
import Howitworks from './Howitworks';
import About from './About';
import Agent from './Agent';

function Home() {
  return (
    <div className="App">
       <Header/>
       <Howitworks/>
       <About/> 
       <Agent/>
    </div>
  )
}

export default Home;