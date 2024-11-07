import React from "react";
import "./App.css";
import InputTask from "./components/InputTask";

const App: React.FC = () => {
  return (
    <div className="App">
      <span className="heading">My Tasks</span>
      <InputTask />
    </div>
  );
};

export default App;
