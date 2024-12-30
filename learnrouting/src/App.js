import {Link, Route, Routes} from 'react-router-dom';
import Contact from "./Contact";
import About from "./About";
import Home from "./Home";
export default function App() {
  return (
      <div>
          <button><Link to= '/'> Home </Link></button>
          <button><Link to= '/about'> About </Link></button>
          <button><Link to= '/contact'> Contact </Link></button>
        <Routes>
            <Route path = '/' element = {<Home />}> </Route>
            <Route path = '/about' element = {<About />}> </Route>
            <Route path = '/contact' element = {<Contact />}> </Route>
        </Routes>
      </div>
  )
}