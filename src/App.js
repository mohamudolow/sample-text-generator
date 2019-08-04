import React from 'react';
import './App.css';
import axios from 'axios';
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      paras: 4,
      html: true,
      text: ''
    };
  }
  render() {
    return (
      <div className="App">
      Sample Text Generator!
      </div>
    );
  }
}

export default App;
