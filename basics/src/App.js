import Header from "./Header";
import About from "./About";
import Contact from "./Contact";
import Home from "./Home";
import Greeting from "./Greeting";
function App() {
  let name = "Pooja";
  return (
      <div>
        <h1>Hello</h1>
        <Header />
        <Greeting name = {"Akash"} />
        <Greeting name = {"James"} />
        <Greeting name = {"Amith"} />
      </div>
  );
}

export default App;
