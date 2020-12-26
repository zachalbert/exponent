import logo from './logo.svg';
import './App.css';

function App() {
  // Add [light, light-AAA, dark, dark-AAA] to .App to switch themes
  return (
    <div className="App light" id="app">
      <header className="App-header">
        <h1>Yay</h1>
        <div>
          <h2 className="light:text-gray-800 light:bg-gray-100 dark:bg-gray-600 dark:text-gray-200 dark-AAA:text-white dark-AAA:bg-black light-AAA:text-black light-AAA:bg-white">Dark</h2>
        </div>
        <div>
          <h2 className="light:text-gray-800 light:bg-gray-100 dark:bg-gray-600 dark:text-gray-200 dark-AAA:text-white dark-AAA:bg-black light-AAA:text-black light-AAA:bg-white">Dark AAA</h2>
        </div>
        <div>
          <h2 className="light:text-gray-800 light:bg-gray-100 dark:bg-gray-600 dark:text-gray-200 dark-AAA:text-white dark-AAA:bg-black light-AAA:text-black light-AAA:bg-white">Light</h2>
        </div>
        <div>
          <h2 className="light:text-gray-800 light:bg-gray-100 dark:bg-gray-600 dark:text-gray-200 dark-AAA:text-white dark-AAA:bg-black light-AAA:text-black light-AAA:bg-white">LightAAA</h2>
        </div>
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
