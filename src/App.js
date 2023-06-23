import './App.css';
import Upload from './components/Upload/Upload.jsx';

function App() {
  const handleUpload = (file) => {
    // Handle the uploaded file here
    console.log(file);
  };

  return (
    <div className="App">
      <Upload onUpload={handleUpload} showError={true} />
    </div>
  );
}

export default App;
