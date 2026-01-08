import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Components/Home";
import About from "./Components/About";
import NotFound from "./Components/NotFound";
import User from "./Components/User";
import Login from "./Components/Login";
import Nav from "./Components/Nav";
import Login2 from "./Components/Login2";
function App() {
  return (
    
     
    <BrowserRouter>
 
    

      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/user/:id" element={<User />} />
        <Route path="/" element={<Login />} />
        <Route path="/login2" element={<Login2 />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/nav" element={<Nav/>}/>
      
      </Routes>
    </BrowserRouter>
 
  );
}

export default App;
