import './App.css';

function App() {
  // Add [light, light-AAA, dark, dark-AAA] to .App to switch themes
  return (
    <div className="App dark" id="app">
        
      <div className="theme light">
        <div className="background py-10 p-6">
          <div className="card">
            <h1>Light</h1>
            <h3>Card Title</h3>
            <p>Lorem ipsum dolor sit amet.</p>
          </div>
        </div>
      </div>

      <div className="theme light-AAA">
        <div className="background py-10 p-6">
          <div className="card">
            <h1>Light AAA</h1>
            <h3>Card Title</h3>
            <p>Lorem ipsum dolor sit amet.</p>
          </div>
        </div>
      </div>

      <div className="theme dark">
        <div className="background py-10 p-6">
          <div className="card">
            <h1>Dark</h1>
            <h3>Card Title</h3>
            <p>Lorem ipsum dolor sit amet.</p>
          </div>
        </div>
      </div>

      <div className="theme dark-AAA">
        <div className="background py-10 p-6">
          <div className="card">
            <h1>Dark AAA</h1>
            <h3>Card Title</h3>
            <p>Lorem ipsum dolor sit amet.</p>
          </div>
        </div>
      </div>

    </div>
  );
}

export default App;
