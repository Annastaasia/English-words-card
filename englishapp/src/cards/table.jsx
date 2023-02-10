import './card'

function Card(props) {
    return (<div className="table"> 

<div className="table_number">№  {props.number}</div> 
    
        <h2 className="table_title"> {props.word}</h2> 
        
         <div className="table_transcription">{props.transcription}</div> 
        
        <div className="table_translate">{props.translate}</div> 

        <div className="table_buttons"> 

        <button className="table_save"></button>

        <button className="table_edit"></button>

        <button className="table_delete"></button>

        </div>

         </div>);
}

export default Card;