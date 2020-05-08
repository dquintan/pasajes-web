import React, {Component} from 'react';
import './App.css';
import Person from './Person/Person'

class App extends Component {
  state = {
    name: 'Diego',
    age: 29
  }

  switchNameHandler = () => {
    this.setState({name: 'Pepe'});
  }

  render() {
    return (
    <div className="App">
      <h1>Hello world</h1>
      <button onClick={this.switchNameHandler}>Change Name!</button>
      <Person name={this.state.name} age={this.state.age}>BYAAAAAA</Person>
    </div>
    );
  }
}

export default App;
