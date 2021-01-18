import React from 'react';
import './App.css';
import Todo from './Todo.js';

class App extends React.Component {
  constructor(){
    super();

    this.state = {
      todoList: [],
      current: ""
    };

    this.updateCurrent = this.updateCurrent.bind(this);
    this.addTodo = this.addTodo.bind(this);
  }

  updateCurrent(val){
    this.setState({
      current: val
    });
  }

  addTodo(){
    let newArr = [...this.state.todoList, this.state.current];
    this.setState({
      todoList: newArr
    });
  }

 render() {
   return (
      <div className="App">
        <input type="text" onChange={e => this.updateCurrent(e.target.value)} />
        <button onClick={this.addTodo}>Add</button>
        <Todo todoList={this.state.todoList} />
      </div>
    );
   }
}

export default App;
