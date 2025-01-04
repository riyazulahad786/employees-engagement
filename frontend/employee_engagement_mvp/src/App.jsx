import {} from "react";
import Navbar from "./components/Navbar";
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Signin from "./pages/Signin";
import Home from "./pages/Home";
import Footer from "./components/Footer";
function App() {
  return (
    <div className="container">
    <Navbar/>
        <Router>
        
           <Routes>
              <Route path="/login" element={<Signin/>}/>
              <Route path="/home" element={<Home/>}/>
              {/* <Route path="/register" element={}/> */}
           </Routes>
        </Router>
    <Footer/>
     
    </div>
  );
}

export default App;
