import React from "react";
import Counter from "./components/Counter";
import Todo from "./components/Todo";

function App() {
  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>React SPA Experiments</h1>
      
      {/* Experiment 1: Counter */}
      <Counter />

      {/* Experiment 2: To-Do List */}
      <Todo />
    </div>
  );
}

export default App;
