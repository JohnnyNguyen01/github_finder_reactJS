import React, {Component} from 'react';
import "./App.css";
import Navbar from './components/layout/Navbar';

class App extends Component{
  helloName = (name) => 'Hello ' + name;

  render() {
    return (
      <div className="App">
        <Navbar/>
      </div>
    );
  }
}

export default App;
