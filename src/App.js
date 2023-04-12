import './App.css';
import React, { Component } from 'react';
import NavBar from './Components/NavBar';
import Carrello from './Carrello';
import Home from './Home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

class App extends Component{
  render(){
    return(
      <div>
        <BrowserRouter>
        <NavBar/>
             <Routes>
              <Route index path="/" element={<Home/>}/>
              <Route path="/carrello" element={<Carrello />}/>
            </Routes>
      
        </BrowserRouter>
        </div>
    )
  }
  
}
export default App;