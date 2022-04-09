// client/src/App.js

import React from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  const [data, setData] = React.useState(null);

  React.useEffect(() => {
    fetch("/")
      .then((res) => res.json())
      .then((data) => setData(data.message));
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>{!data ? "Loading... [run from localhost]" : data}</p>
        <p>
          This is the link to the app deployed on hieroku:<br/>
          <a href="https://node-apppp.herokuapp.com">
            https://node-apppp.herokuapp.com
          </a>
        </p>
      </header>
    </div>
  );
}

export default App;