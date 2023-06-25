import './App.css';
import Input from './components/Input/Input.jsx';
import Menu from './components/Menu/Menu.jsx';
import Header from './components/Header/Header.jsx';
import WorkingWithGET from './components/WorkingWithGET/WorkingWithGET.jsx';
import WorkingWithPOST from './components/WorkingWithPOST/WorkingWithPOST.jsx';

function App() {
  // const handleUpload = (file) => {
  //   // Handle the uploaded file here
  //   console.log(file);
  // };

  return (
    <div className="App">
      <Menu />
      <Header />
      <WorkingWithGET />
      <WorkingWithPOST />
      {/* <Input
        placeholder={'Input here'}
        showError={true}
        errorMessage={'Error message'}
        title={'title'}
        hintMessage={'hint'}
      /> */}
    </div>
  );
}

export default App;
