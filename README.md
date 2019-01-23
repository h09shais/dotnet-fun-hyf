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
// simple-portal/src/App.js
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

### Proxy setup

```json
// simple-portal/package.json
"proxy": "https://localhost:5001"
```

### Adjust App component

```javascript
// simple-portal/src/App.js
this.state = {
  items: []
};

componentDidMount() {
    fetch("/api/values")
      .then(response => response.json())
      .then(data => this.setState({ items: data }));
}
```

### Render unique items

```javascript
// simple-portal/src/App.js

<ul>
  {items.map((item, i) => (
    <li key={i}>{item}</li>
  ))}
</ul>
```

## Part 04: Bonus

### Add CORS support (If required)

```cs
// simple-webapi/Startup.cs
public void ConfigureServices(IServiceCollection services)
{
    services.AddMvc().SetCompatibilityVersion(CompatibilityVersion.Version_2_1);

    //Add CORS support
    services.AddCors(o => o.AddPolicy("AllowAll",
        builder =>
        {
            builder
                .AllowAnyOrigin()
                .AllowAnyMethod()
                .AllowAnyHeader()
                .AllowCredentials();
        }));
}
```
