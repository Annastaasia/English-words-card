
import React from 'react';
import Header from './components/Header.jsx';
import TableMap from './components/TableMap.jsx';
import CardMap from './components/CardMap.jsx';
import './style/allstyle.scss';




class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Header />
        <TableMap />
        <CardMap />
      </div >);

  }
}

export default App;
