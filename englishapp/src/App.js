
import React from 'react';
import Card from './Components/Table.jsx';
import Header from './Components/Header.jsx';
import CardInner from './Components/Card.jsx';
import cards from './utils/card.js';
import './style/allstyle.scss';




class App extends React.Component {
  render() {
    return (
      <div className="App">
        <header>
          <Header />
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

              ></Card>)
            }
            </div>
            <div className='container__onecard'> {
              cards.map((card, i) => <CardInner
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

              ></CardInner>)
            }
            </div>
          </div>
        </main>
      </div>);

  }
}

export default App;
