import React, { Component } from "react";
import "./app.scss";
import deviceCheck from "../utils/deviceCheck";
import MainPage from "../MainPage/MainPage";
class App extends Component {
  render() {
    return (
      <div className="App">
        <MainPage />
      </div>
    );
  }
}

export default App;
