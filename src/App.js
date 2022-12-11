import Contact from "./Components/Contact/Contact";
import Experiences from "./Components/Experiences/Experiences";

import Header from "./Components/Header/Header";
import Navbar from "./Components/Navbar/Navbar";
import Projects from "./Components/Projects/Projects";

function App() {
  return (
    <div className="max-w-7xl mx-auto">
      <Header />
      <Projects />
      <Navbar />
      <Experiences />
      <Contact />
    </div>
  );
}

export default App;
