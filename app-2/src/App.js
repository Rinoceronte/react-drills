import React from 'react';
import logo from './logo.svg';
import './App.css';

class App extends React.Component {

  constructor(){
    super();

    this.state = {
      array: ["Spaghetti", "ice cream", "sushi", "bologna", "cheese"]
    }

  }
  render() {
    let foods = this.state.array.map((el, i) => {
      return <h2 key={i}>{el}</h2>;
    })
    return (
    <div className="App">
      {foods}
    </div>
  );
    }

   
}

export default App;
