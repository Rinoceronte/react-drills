import React from 'react';
import logo from './logo.svg';
import './App.css';

class App extends React.Component {
  constructor(){
    super();

    this.state = {
      user: "",
      pass: ""
    }

    this.updateUser = this.updateUser.bind(this);
    this.updatePass = this.updatePass.bind(this);
    this.login = this.login.bind(this);
  }

  updatePass(val){
    this.setState({pass: val});
  }

  updateUser(val){
    this.setState({user: val});
  }

  login(){
    alert(`Username: ${this.state.user} Password: ${this.state.pass}`);
  }

  render() {
    return (
      <div className="App">
          Username: <input type="text" onChange={e=>this.updateUser(e.target.value)} />
          Password: <input type="text" onChange={e=>this.updatePass(e.target.value)} />
          <button onClick={this.login}>Login</button>
      </div>
    );
  }
}

export default App;
