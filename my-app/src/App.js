
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';

function App() {
  return (
    <>
      {/* <Navbar title="TextUtils" aboutText="About Text"/> */}

      {/* <Navbar/>  */}
      {/* for default props */}
      <Navbar title="TextUtils" />

      <div className='container my-3'>
      {/* <TextForm heading="Enter the text to analyze below" /> */}
      <About/>
        </div>
    </>


  );
}

export default App;
