import logo from './logo.svg';
import './App.css';
import Counter from "./components/Counter";
import Printer from "./components/Printer";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Counter />
        <Printer />
      </header>
    </div>
  );
}

export default App;
