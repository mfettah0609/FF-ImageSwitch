import logo from './logo.svg';
import ldlogo from './KDBB.png'
import './App.css';
import { withLDProvider, useFlags } from 'launchdarkly-react-client-sdk';

function App() {
  const { imageSwitch } = useFlags()
  return (
    <div className="App">
      <header className="App-header">
        { imageSwitch ? (<img src={ldlogo} className="App-logo" alt="logo" />) : (
        <img src={logo} className="App-logo" alt="logo" />)
}
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

export default withLDProvider({
  clientSideID: '62b0567723dfee14b738685d',
  options: {
  bootstrap: 'localStorage'  
  },
})(App)
