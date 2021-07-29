import logo from './logo.svg';
import './App.css';
import axios from 'axios';

function App() {
  const getData = () => {
    axios.get('/api/testwithcurrentuser').then(resp => {
      console.log(resp.data);
    })
  };
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
        <button onClick={getData}>click</button>
      </header>
    </div>
  );
}

export default App;
