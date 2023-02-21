
import React from 'react';
import Table from './components/Table.jsx';
import Header from './components/Header.jsx';
import Card from './components/Card.jsx';
import cards from './utils/card.js';
import './style/allstyle.scss';




class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Header />
        <main>
          <div className='container__cards'> {
            cards.map((card, i) => <Table
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

            />)
          }
          </div>
          <div className='container__onecard'> {
            cards.map((card, i) => <Card
              key={i}
              word={
                card.word
              }

              transcription={
                card.transcription
              }

              hint={
                card.hint
              }

              translate={
                card.translate
              }

            />)
          }
          </div>
        </main>
      </div>);

  }
}

export default App;
