import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Navbar from './components/navbar'

class App extends Component{
render(){
  return(
    <BrowserRouter>
    <div className="App">
      <Navbar />
      <Switch>
        <Route path='/' />
      </Switch>
    </div>
    </BrowserRouter>
  )
}
}

export default App;
