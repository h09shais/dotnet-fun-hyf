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

### Run both of our React App and .Net Web API

```sh
> yarn start
```

```sh
> dotnet run
```

## Part 04: Add and configure Swagger

### Package installation

```sh
> dotnet add simple-webapi.csproj package Swashbuckle.AspNetCore
```

### Add and configure Swagger middleware

```cs
// public void ConfigureServices(IServiceCollection services)
services.AddSwaggerGen(c =>
{
  c.SwaggerDoc("v1", new Swashbuckle.AspNetCore.Swagger.Info { Title = "My API", Version = "v1" });
});

// public void Configure(IApplicationBuilder app)
app.UseSwagger();
app.UseSwaggerUI(c =>
{
  c.SwaggerEndpoint("/swagger/v1/swagger.json", "My API V1");
});
```

### Get your swagger documentation

```sh
> dotnet run
```

Browse https://localhost:5001/swagger

## Part 05: Bonus

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
