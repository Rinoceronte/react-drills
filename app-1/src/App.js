import React from 'react';
import logo from './logo.svg';
import './App.css';
class App extends React.Component {
  constructor(){
    super();

    this.state = {
      text: ""
    }

    this.updateText = this.updateText.bind(this);
  }
  render() {
    return (
      <div className="App">
        <input onChange={e => this.updateText(e.target.value)} type="text"/>
        <p>{this.state.text}</p>
      </div>
    );
  }

  updateText(val){
    this.setState({text: val});
  }
}

export default App;
