import React from "react";
import Counter from "./components/Counter";
import Todo from "./components/Todo";
import ThemeToggle from "./components/ThemeToggle";

function App() {
  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>React SPA Experiments</h1>

      {/* Experiment 1 */}
      <Counter />

      {/* Experiment 2 */}
      <Todo />

      {/* Experiment 3 */}
      <ThemeToggle />
    </div>
  );
}

export default App;
