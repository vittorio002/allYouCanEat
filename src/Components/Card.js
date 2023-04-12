import React, { Component } from "react";

class Card extends Component {
    render() {
        return (
            <div className="col">
                <div className="card" style={{width: "22rem",textAlign: "center"}}>
                <div className="btn-group" role="group">
                    <button onClick={()=> this.props.OnDecrement(this.props.card)} className="btn btn-info">-</button>
                    <button onClick={()=> this.props.OnIncrement(this.props.card)} className="btn btn-primary">+</button>
                    <button className="btn btn-light"><span className='badge text-bg-light'>{this.props.card.quantita}</span></button>
                </div>    
                    <img src={this.props.card.immagine} class="" style={{maxWidth:"680px",maxHeight:"200px"}}/>
                    <div className="card-body">
                        <h5 className="card-title">{this.props.card.nome} Roll</h5>
                        <p className="card-text">${this.props.card.prezzo}</p>
                        <button onClick={()=> this.props.OnDelete(this.props.card)} className="btn btn-outline-danger">Elimina</button>
                    </div>
                </div>
            </div>
        );
    }
}
export default Card; 