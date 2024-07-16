
import { BrowserRouter,Routes,Route } from "react-router-dom";
import Layout from "./Layout";
import Home from "./home";
import About from "./About";
import Contact from "./Contact";
import Student from "./Student";
import Middledata from "./Middledata";
const App=()=>{ 
  return(
    <>
<BrowserRouter>

<Routes>


<Route path="/"element={<Layout/>}>
<Route index element={<Home/>}/>
<Route path="home" element={<Home/>}/>
<Route path="about" element={<About/>}/>
<Route path="contact" element={<Contact/>}/>
<Route path="about" element={<About/>}>
<Route index element={<About/>}/>
<Route path="student"element={<Student/>}/>
<Route path="Middledata" element={<Middledata/>}/>



</Route>

 

</Route>





</Routes>



</BrowserRouter>
    
        
          
      


    </>
  )
}
export default App;