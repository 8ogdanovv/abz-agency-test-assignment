import './App.css';
import Menu from './components/Layout/Menu/Menu.jsx';
import Header from './components/Layout/Header/Header.jsx';
import Users from './components/Layout/Users/Users.jsx';
import SignUp from './components/Layout/SignUp/SignUp.jsx';
import Success from './components/Utility/Success/Success.jsx';
import React, { useState } from 'react';

function App() {
  const [success, setSuccess] = useState(false);
  const [fetchedData, setFetchedData] = useState([]);

  return (
    <div className="App">
      <Menu />
      <Header />
      <Users
        fetchedData={fetchedData}
        setFetchedData={setFetchedData}
      />
      {!success ? (
        <SignUp
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
