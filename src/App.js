import logo from './logo.svg';
import './App.css';

function App() {
  const conditional = (number) => {
    if (number > 4) {
      return <p>its greaterrrrr</p>
    } else {
      return <p>its not so greattttt</p>
    }
  }
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
        {conditional(4)}
      </header>
    </div>
  );
}

export default App;
