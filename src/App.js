import './App.css';
import Menu from './components/Menu/Menu.jsx';
import Header from './components/Header/Header.jsx';
import WorkingWithGET from './components/WorkingWithGET/WorkingWithGET.jsx';
import WorkingWithPOST from './components/WorkingWithPOST/WorkingWithPOST.jsx';
import Success from './components/Success/Success.jsx';

function App() {
  return (
    <div className="App">
      <Menu />
      <Header />
      <WorkingWithGET />
      <WorkingWithPOST />
      <Success />
    </div>
  );
}

export default App;
