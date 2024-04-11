import './App.css'
import React from 'react'

import Nav from './components/Nav'
import Home from './components/Home'
import Aulas from './components/Aulas'
import Sobre from './components/Sobre'

import { BrowserRouter as Router } from 'react-router-dom'

function App () {
  return (
    <Router>
      <div className="App">
        <Nav></Nav>
        <Home></Home>
        {/* <Aulas> </Aulas> 
        {/* <Sobre> </Sobre> 
        */}
      </div>
    </Router>
  );
}

export default App;