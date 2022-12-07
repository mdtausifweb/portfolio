import "./App.css";
import Navbar from "./components/Navbar";
import Profile from "./components/Profile";
import About from "./components/About";
import Skills from "./components/Skills";
import Project from "./components/Project";
import Contact from "./components/Contact";
import { BrowserRouter} from "react-router-dom";
import Footer from "./components/Footer";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Profile />
        <About />
        <Skills />
        <Project />
        <Contact />
        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
