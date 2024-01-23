import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Useefct from './components/Useefct';

function App() {
  return (
    <>
    <Navbar title="ghost" aboutText="about me" />
    <div className="container">
      <TextForm heading="Enter The Text To Analyze" />
      
    </div>
   < component1/>
   <Useefct/>
   
  </>
  );
}
      
export default App;
