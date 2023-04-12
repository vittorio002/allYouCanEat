import california from '../immagini/california.png';
import dragon from '../immagini/dragon.png';
import dynamite from '../immagini/dynamite.png';
import philadelphia from '../immagini/philadelphia.png';
import rainbow from '../immagini/rainbow.png';
import shrimp from '../immagini/shrimp.png';
import boston from '../immagini/Boston.png';
import heart from '../immagini/Heart.png';
import spicySalmon from '../immagini/Spicy Salmon.png';
import vulcano from '../immagini/Vulcano.png';

const initState = {
    cards:[
        {id:0, immagine:california, nome:"California", prezzo:1.99, quantita:0},
        {id:1, immagine:dragon, nome:"Dragon", prezzo:2.99, quantita:0},
        {id:2, immagine:dynamite, nome:"Dynamite", prezzo:1.49, quantita:0},
        {id:3, immagine:philadelphia, nome:"Philadelphia", prezzo:2.49, quantita:0},
        {id:4, immagine:rainbow, nome:"Rainbow", prezzo:1.79, quantita:0},
        {id:5, immagine:shrimp, nome:"Shrimp", prezzo:2.29, quantita:0},
        {id:6, immagine:boston, nome:"Boston", prezzo:2.19, quantita:0},
        {id:8, immagine:heart, nome:"Heart", prezzo:1.89, quantita:0},
        {id:9, immagine:spicySalmon, nome:"Spicy Salmon", prezzo:2.45, quantita:0},
        {id:10, immagine:vulcano, nome:"Vulcano", prezzo:2.00, quantita:0},
      ],

    totale:0  
}

const rootReducer = (state=initState, action) => {
    if(action.type === 'INCREMENT_CARD'){
        const IncrementCards = state.cards;
        action.id = IncrementCards.indexOf(action.id)
        IncrementCards[action.id].quantita++;
        state.totale+=IncrementCards[action.id].prezzo;
        return{
            ...state,
            cards: IncrementCards
        }
     
    }
    if(action.type === 'DECREMENT_CARD'){
        const DecrementCards = state.cards;
        action.id = DecrementCards.indexOf(action.id)
        if(DecrementCards[action.id].quantita>0){
            DecrementCards[action.id].quantita--;
            state.totale-=DecrementCards[action.id].prezzo;
            }else{
              alert("sei già a zero di questo elemento")
            } 
        return{
            ...state,
            cards: DecrementCards
        }
    }
    if(action.type === 'DELETE_CARD'){
        const TogliPrezzo=state.cards
        const ca = TogliPrezzo.indexOf(action.id)
        while(TogliPrezzo[ca].quantita > 0){
            state.totale-=TogliPrezzo[ca].prezzo;
            TogliPrezzo[ca].quantita--;
          }

        const UpdatedCard = state.cards.filter(card => {
            return card !== action.id
        })
        return{
            ...state,
            cards: UpdatedCard
        }
    }
    
    return state
}
export default rootReducer