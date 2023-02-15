
import React from 'react';
import Card from './Components/Table.jsx';
import cards from './utils/card.js';
import './Components/style/card.scss';
import './Components/style/header.scss';




class App extends React.Component {
  render() {
    return (
      <div className="App">
        <header className="App__header">
          <h1 className="App__header__h1">English cards</h1>
          <button className="App__header__game"></button>
        </header>
        <main>
          <div className='container'>
            <div className='container__cards'> {
              cards.map((card, i) => <Card
                key={i}
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

                isSelected={card.isSelected}
              ></Card>)
            }
            </div>
          </div>
        </main>
      </div>);

  }
}

export default App;
