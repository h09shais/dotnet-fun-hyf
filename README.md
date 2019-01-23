# dotnet-fun-hyf

.NET Introduction by HackYourFuture-Copenhagen

## Part 01 - Web API

```sh
> mkdir simple-webapi
> cd simple-webapi
> dotnet new webapi
> dotnet build
> dotnet run
> Browse https://localhost:5001/api/values
```

## Part 02 - Portal

```sh
> cd ..
> create-react-app simple-portal
> cd simple-portal
> yarn start
> Browse http://localhost:3000/
```

## Part 03 - Fetch data from Web API

### Render items

```javascript
// App.js
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
```
