import logo from './logo.svg';
import './App.css';
import Button from './components/Button/Button';

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

        <Button title='button'/>
      </header>
    </div>
  );
}

export default App;
