import './App.css';

function App() {
  // Add [light, light-AAA, dark, dark-AAA] to .App to switch themes
  return (
    <div className="App dark-AAA" id="app">
      <h1>Yay</h1>
      <div>
        <h2 className="light:text-gray-800 light:bg-gray-100 dark:bg-gray-600 dark:text-gray-200 dark-AAA:text-white dark-AAA:bg-example light-AAA:text-black light-AAA:bg-white">Dark</h2>
      </div>
      <div>
        <h2 className="light:text-gray-800 light:bg-gray-100 dark:bg-gray-600 dark:text-gray-200 dark-AAA:text-white dark-AAA:bg-example-high light-AAA:text-black light-AAA:bg-white">Dark AAA</h2>
      </div>
      <div>
        <h2 className="light:text-gray-800 light:bg-gray-100 dark:bg-gray-600 dark:text-gray-200 dark-AAA:text-white dark-AAA:bg-example-dark light-AAA:text-black light-AAA:bg-white">Light</h2>
      </div>
      <div>
        <h2 className="light:text-gray-800 light:bg-gray-100 dark:bg-gray-600 dark:text-gray-200 dark-AAA:text-white dark-AAA:bg-example-dark-high light-AAA:text-black light-AAA:bg-white">LightAAA</h2>
      </div>
    </div>
  );
}

export default App;
