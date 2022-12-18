import "./App.css";
import Program from "./components/Program";
// import schedule from "./schedule.json";
import logo from "./logo-m6.png";

function App() {
  return (
    <div className="App">
      <header>
        <img alt="logo" src={logo} />
        <h1>M6</h1>
      </header>
      <main>
        <Program />
      </main>
    </div>
  );
}

export default App;
