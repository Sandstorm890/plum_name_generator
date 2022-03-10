import './App.css';
import React from 'react'
import NameShow from './components/NameShow.js';
import NameContainer from './containers/NameContainer';

class App extends React.Component {
  
  render() {
    return (
      <div className="App">
        <NameContainer />
      </div>
    );
  }

}

export default App;
