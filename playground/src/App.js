import logo from './logo.svg';
import './App.css';

function App() {
  const theNumber = 7;
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
         {2+3 > 4 ?
          <p> heyyyyy it is greater </p> :
          <p> awww its smaller</p>
        }
      </header>
    </div>
  );
}

export default App;
