import "./App.scss";
import Header from "./components/Header/Header";
import About from "./containers/About/About";
import Home from "./containers/Home/Home";
import { HashRouter, Route, Routes } from "react-router-dom";
import Projects from "./containers/Projects/Projects";
import Skills from "./containers/Skills/Skills";

function App() {
  return (
    <HashRouter>
      <Header />
      <main className="main spectrum-background">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/skills" element={<Skills />} />
        </Routes>
      </main>
    </HashRouter>
  );
}

export default App;
