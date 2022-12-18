import "./App.css";
import Program from "./components/Program";
import schedule from "./schedule.json";
import logo from "./logo-m6.png";

function App() {
  return (
    <div className="App">
      <header>
        <img alt="logo" src={logo} />
        <h1>M6</h1>
      </header>
      <main>
        {/* TRAITEMENT JSON */}
        {schedule.map((element, index) => {
          console.log(element.title);
          return (
            <Program
              key={index}
              time={element.time}
              title={element.title}
              type={element.type}
              duration={element.duration}
              image={element.image}
              isUnseen={element.isUnseen}
              direct={element.direct}
            />
          );
        })}
      </main>
    </div>
  );
}

export default App;
