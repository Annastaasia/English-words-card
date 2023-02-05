
import React from 'react';
import Card from './components/table.jsx';
import cards from './components/card.js';
import './components/card.css'




class App extends React.Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Vocabulary</h1>
        </header>
        <main>
          <div className='cards'> {
            cards.map((card) => <Card
              number={
                card.number
              }

              word={
                card.word
              }

              transcription={
                card.transcription
              }

              translate={
                card.translate
              }
            ></Card>)
          }
          </div>
        </main>
      </div>);

  }
}

export default App;
