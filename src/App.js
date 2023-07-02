import './App.css';
import React, { useState, Suspense, lazy } from 'react';

import Menu from './components/Layout/Menu/Menu.jsx';
import Header from './components/Layout/Header/Header.jsx';

import Preloader from './components/Utility/Preloader/Preloader';

const Users = lazy(() => import('./components/Layout/Users/Users.jsx'));
const SignUp = lazy(() => import('./components/Layout/SignUp/SignUp.jsx'));
const Success = lazy(() => import('./components/Layout/Success/Success.jsx'));

function App() {
  const [success, setSuccess] = useState(false);
  const [fetchedData, setFetchedData] = useState([]);

  return (
    <div className="App">
      <Menu />
      <Header />

      <Suspense fallback={<Preloader />}>
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
          />
        ) : (
          <Success />
        )}
      </Suspense>
    </div>
  );
}

export default App;
