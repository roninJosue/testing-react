import './App.css';
import Counter from "./components/Counter";
import Printer from "./components/Printer";
import Greeter from "./components/Greeter";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Counter />
        <Printer />
        <Greeter name='Reynaldo' />
      </header>
    </div>
  );
}

export default App;
