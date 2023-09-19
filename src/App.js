import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { Header } from "./components/Header/Header";
import { Footer } from "./components/Footer/Footer";
import { About } from "./components/About/About";
import { Projects } from "./components/Projects/Projects";
import { Contacts } from "./components/Contacts/Contacts";
import "./styles/main.css"

export const App = () => {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path="/Portfolio-Pavlo-Maistrenko-Frontend/" element={<About />}/>
          <Route path="/projects" element={<Projects />}/>
          <Route path="/contacts" element={<Contacts />}/>
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}


