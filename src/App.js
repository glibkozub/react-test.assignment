import React, { Component } from 'react';
import './App.css';
import UserInput from './UserInput';
import UserOutput from './UserOutput';

class App extends Component {
  state = {
    username: 'Martyn'
  };

  changeUserName = (e) => {
    this.setState({username: e.target.value})
  };

  render() {
    return (
      <div className='App'>
        <UserInput username={this.state.username} changeUserName={this.changeUserName}/>
        <UserOutput username={this.state.username}/>
      </div>
    );
  }
}

export default App;
