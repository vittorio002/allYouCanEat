import React, { Component } from 'react';

class Lista extends Component{
  render(){
    return (
      
              <tr>
                <th scope="row">{this.props.quantita}</th>
                <td>{this.props.nome}</td>
                <td>{this.props.prezzo}$</td>
              </tr>
              
          
    );
}} 
export default Lista;