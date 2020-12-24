import React, { Component } from 'react';
import { BrowserRouter} from 'react-router-dom'
import Navbar from './components/navbar'
import About from './components/about'
import Skills from './components/skills'
import Services from './components/services';
import './App.css';
import Contact from './components/contact';

class App extends Component {
render(){
  return(
    <BrowserRouter>
        <div className="App">
          <Navbar />
          <About />
          <Services />
          <Skills />
          <Contact />
        </div>
      </BrowserRouter>

  )}
}

export default App;
