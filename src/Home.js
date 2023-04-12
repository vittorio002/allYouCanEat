import React, { Component } from "react";
import Card from './Components/Card';
import { Link } from "react-router-dom";
import { connect } from "react-redux";

class Home extends Component {
      HandleDelete = CardId =>{
        this.props.deleteCard(CardId)
      }
    
      HandleIncrement = CardId =>{
        this.props.incrementCard(CardId)
      }
    
      HandleDecrement = CardId =>{
        this.props.decrementCard(CardId)
      }
    
      render(){
        console.log(this.props)
        const { cards } = this.props;
        const { totale } = this.props;
        return (
          <div>
            <div className="container">
            <h1>Cosa desideri ordinare?</h1>
            <hr/>
            <div className='row'>
          {cards.map(card=>(
            <Card
              key={card.id}
              card={card}
              OnDecrement={this.HandleDecrement}
              OnIncrement={this.HandleIncrement}
              OnDelete={this.HandleDelete}
            />
          ))}
            </div>
            </div>
            
            <hr/>
            <div className="container-sm w-25 text-center fs-1 p-3 bg-info bg-opacity-10 border border-info border-start-0 rounded-pill ">
            <h1></h1>Conto = {totale.toFixed(2)}
            </div>
            <hr/>
            <div className="d-grid gap-2">
              <Link className="btn btn-success" to="/Carrello">Invia il tuo ordine</Link>
            </div>   
              
          </div>
        
        );
      }
}

const mapStateToProps = (state) => {
  return {
    cards: state.cards,
    totale:state.totale
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    deleteCard : (CardId) => {dispatch({type: 'DELETE_CARD', id: CardId})},
    incrementCard : (CardId) => {dispatch({type: 'INCREMENT_CARD', id: CardId})},
    decrementCard : (CardId) => {dispatch({type: 'DECREMENT_CARD', id: CardId})}
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home); 