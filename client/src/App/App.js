import React, { useState } from "react";
import "./app.scss";
import deviceCheck from "../utils/deviceCheck";
import MainPage from "../MainPage/MainPage";
const App = () => {
  const [currentTheme, setCurrentTheme] = useState("light");

  return (
    <div className="App">
      <button
        style={{ width: "20%" }}
        onClick={() =>
          currentTheme === "light"
            ? setCurrentTheme("dark")
            : setCurrentTheme("light")
        }
      >
        Switch Theme
      </button>
      <MainPage currentTheme={currentTheme} />
    </div>
  );
};

export default App;
