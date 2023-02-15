
export default function Card(props) {

    const classSave = (props.isSelected? 'table_save':'table_save_none');
    return (
        
    <div className="table"> 

        <div className="table_number">№  {props.number}</div> 
    
        <h2 className="table_title"> {props.word}</h2> 
        
        <div className="table_transcription">{props.transcription}</div> 
        
        <div className="table_translate">{props.translate}</div> 

        <div className='table_buttons'> 

        <button className={`${classSave}`}></button>

        <button className="table_edit"></button>

        <button className="table_delete"></button>

        </div>

         </div>);
}