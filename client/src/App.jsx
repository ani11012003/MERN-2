import {BrowserRouter,Routes,Route} from "react-router-dom";
import Home from "./pages/Home.jsx"
import Contact from "./pages/Contact.jsx"
import About from "./pages/About.jsx"
import Register from "./pages/Register.jsx"
import Login from "./pages/Login.jsx"
import Services from "./pages/Services.jsx"
import Error from "./pages/Error.jsx"
import Logout from "./pages/Logout.jsx"
import {Navbar} from "./components/Navbar.jsx"
import {Footer} from "./components/Footer.jsx"
const App=()=>{
  return <>
    <BrowserRouter>
    <Navbar/>
      <Routes>
<Route path="/" element={<Home/>}/>
<Route path="/about" element={<About/>}/>
<Route path="/contact" element={<Contact/>}/>
<Route path="/services" element={<Services/>}/>
<Route path="/login" element={<Login/>}/>
<Route path="/register" element={<Register/>}/>
<Route path="/logout" element={<Logout/>}/>
<Route path="*" element={<Error/>}/> 
      </Routes>
    <Footer/>
    </BrowserRouter>
  </>
}
export default App;