import logo from './logo.svg';
import Button from '@mui/material/Button';
import Switch from '@mui/material/Switch';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>snow fuck you</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          
        >
          Learn React
        </a>
      </header>
      <Switch defaultChecked />
      <Switch  />
      <Switch disabled defaultChecked />
      <Switch disabled />
      <Button variant="contained">Hello World</Button>
    </div>
  );
}

export default App;
