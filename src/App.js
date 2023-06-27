import './App.css';
import Menu from './components/Menu/Menu.jsx';
import Header from './components/Header/Header.jsx';
import WorkingWithGET from './components/WorkingWithGET/WorkingWithGET.jsx';
import WorkingWithPOST from './components/WorkingWithPOST/WorkingWithPOST.jsx';
import Success from './components/Success/Success.jsx';
import { useState } from 'react';

function App() {
  const [success, setSuccess] = useState(false);
  const [fetchedData, setFetchedData] = useState([]);

  return (
    <div className="App">
      <Menu />
      <Header />
      <WorkingWithGET
        fetchedData={fetchedData}
        setFetchedData={setFetchedData}
      />
      {!success ? (
        <WorkingWithPOST
          success={success}
          setSuccess={setSuccess}
          fetchedData={fetchedData}
          setFetchedData={setFetchedData}
        /> )
      : <Success />}
    </div>
  );
}

export default App;
