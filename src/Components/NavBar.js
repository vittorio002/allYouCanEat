import { Link } from "react-router-dom";
import React, { Component } from "react";

class NavBar extends Component{
  render(){
  return(
    <nav className="navbar navbar-expand-lg bg-dark navbar-dark">
      <div className="container-fluid">
        <a className="navbar-brand">
        <img src="../logo192.png" width="30" height="24"/>
          VittSushi</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <Link className="nav-link active" aria-current="page" to="/">Home</Link>
               
                  
          </div>
          
        </div>
        <a className="navbar-brand" href="../carrello.js">
        <Link to="/Carrello"> <img src="../carrello.png" width="35" height="35"/></Link>  
        </a>
        
      </div>
      
    </nav>
    
  );
}}
export default NavBar;