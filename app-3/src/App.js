import React from 'react';
import logo from './logo.svg';
import './App.css';

class App extends React.Component {
  constructor(){
    super();

    this.state = {
      array: ["Spaghetti", "ice cream", "sushi", "bologna", "cheese"],
      filter: ""
    }

    this.updateFilter = this.updateFilter.bind(this);
  }

  updateFilter(val){
    this.setState({filter: val});
  }

  render() {
    let filtered = this.state.array
      .filter((f, i) => f.includes(this.state.filter)).map((food, i) => {
      return <h2 key={i}>{food}</h2>;
    })

    return (
      <div className="App">
        <input onChange={e => this.updateFilter(e.target.value)} type="text"/>
        {filtered}
      </div>
    );
  }
}

export default App;
