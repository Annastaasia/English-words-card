import './card'

function Card(props) {
    return (<div className="card"> 

<div className="card-number">№  {props.number}</div> 
    
        <h2 className="card-title"> {props.word}</h2> 
        
         <div className="card-transcription">{props.transcription}</div> 
        
        <div className="card-translate">{props.translate}</div> 

         </div>);
}

export default Card;