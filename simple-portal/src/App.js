import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      items: [1, 2, 3]
    };
  }

  render() {
    const { items } = this.state;
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <ul>
            {items.map(item => {
              return <li>{item}</li>;
            })}
          </ul>
        </header>
      </div>
    );
  }
}

export default App;
