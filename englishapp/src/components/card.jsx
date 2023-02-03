import './card'

function Card(props) {
    return (<div className="card"> 
    
        <h2 className="card-title"> {props.word}</h2> 
        
         <div className="card-transcription">Transcription:  {props.transcription}</div> 
        
        <div className="card-hint"> Hint:  {props. hint}</div> 

<button className="card-add">I know this word</button>

         </div>);
}

export default Card;