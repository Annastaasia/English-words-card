
import React from 'react';
import Header from './components/Header.jsx';
import TableMap from './components/TableMap.jsx';
//import CardParent from './components/CardParent.jsx';
//import CardMap from './components/CardMap.jsx';
import Card from './components/Card.jsx';
import './style/allstyle.scss';




class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Header />
        <TableMap />
        <Card />
      </div >);

  }
}

export default App;
