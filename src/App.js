import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="header">
        <a
          className="header-link"
          href="/"
        >
          <img src={logo} className="header-link-image" alt="logo" />
        </a>
      </header>
    </div>
  );
}

export default App;
