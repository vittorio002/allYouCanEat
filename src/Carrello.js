import React, { Component } from 'react';
import ListaCarrello from "./Components/ListaCarrello";
import { connect } from 'react-redux';

class Carrello extends Component{

  ordineEffettuato=()=>{
    {alert("ordine effettuato con successo")}
  }

  render(){
    const { cards } = this.props;
    const { totale } = this.props;
    let carr = cards.filter(card => card.quantita > 0 );

    return (
      <>
        <div>
          <table className="table">
            <thead>
              <tr>
                <th scope="col">quantita'</th>
                <th scope="col">nome</th>
                <th scope="col">prezzo</th>
              </tr>
            </thead>
            <tbody>
              {carr.map(card=>(
                <ListaCarrello 
                  key={card.id}
                  quantita={card.quantita}
                  nome={card.nome}
                  prezzo={card.prezzo}
                />
              ))}
            </tbody>
          </table>
        </div>
        <hr/>
        <div className="container-sm w-25 text-center fs-1 p-3 bg-info bg-opacity-10 border border-info border-start-0 rounded-pill ">
          <h1></h1>Conto = {totale.toFixed(2)}
        </div>
        <hr/>
        <div className="d-grid gap-3">
          <a onClick={this.ordineEffettuato} href='/' className="btn btn-success" type="button">CONFERMA INVIO</a>
        </div>
      </>   
    );
}} 

const mapStateToProps = (state) => {
  return {
    cards: state.cards,
    totale: state.totale
  }
}
export default connect(mapStateToProps)(Carrello);