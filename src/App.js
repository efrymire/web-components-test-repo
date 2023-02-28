import logo from './logo.svg';
import './App.css';
import '@atomfinance/atom-viz-web-components';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <atom-login-component/>
        {/* <atom-streaming-price 
          symbol={'AAPL'}
          api-key={'89838e4f-d7f4-454c-8ccd-84ea73e23200'}
        />
        <atom-test-component/> */}
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
      </header>
    </div>
  );
}

export default App;
