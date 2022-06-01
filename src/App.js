import { About } from "./components/About";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { Home } from "./components/Home";
import { Nav } from "./components/Nav";
import Projects from "./components/Projects";

function App() {
  return (
    <div className="">
      <Nav />
      <Home />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
