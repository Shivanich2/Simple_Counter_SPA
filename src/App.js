import { useState } from "react";
import Counter from "./components/Counter";
import Todo from "./components/Todo";
import SimpleForm from "./components/SimpleForm";
import ThemeToggle from "./components/ThemeToggle";
import "./App.css";

function App() {
  const [active, setActive] = useState("counter");
  const [theme, setTheme] = useState("light");

  return (
    <div className={`app ${theme}`}>
      <ThemeToggle theme={theme} setTheme={setTheme} />

      <h1 className="main-heading">React SPA Experiments</h1>

      <div className="nav">
        <button onClick={() => setActive("counter")}>Counter</button>
        <button onClick={() => setActive("todo")}>To-Do List</button>
        <button onClick={() => setActive("form")}>Simple Form</button>
      </div>

      {active === "counter" && <Counter />}
      {active === "todo" && <Todo />}
      {active === "form" && <SimpleForm />}
    </div>
  );
}

export default App;
