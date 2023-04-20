import './App.css';
import { BrowserRouter as Router,Routes,Route } from "react-router-dom"
import Navbar from './Components/Navbar/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './Components/Home/Home';
import Services from './Components/Services/Services';
import Chatbtn from './Components/Chatbtn/Chatbtn';

function App() {
  return (
    <>
     <div className='app-container'>
      <Router>
        <Navbar/>
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/services' element={<Services/>}/>
            
        </Routes>
      </Router> 
      <Chatbtn/>
     </div>
     </>
  );
}

export default App;
