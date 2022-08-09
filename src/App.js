import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';

function App() {
  return (
    <>
     <Navbar title="TextUtils" about="About" contact="Contact"/>    
     <div className="container"><TextForm heading="Enter Your Text Here"/></div>

    </>
  );
}

export default App;
