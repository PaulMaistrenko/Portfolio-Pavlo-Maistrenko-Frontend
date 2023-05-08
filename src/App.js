import { Header } from "./components/Header/Header";
import { Footer } from "./components/Footer/Footer";
import { About } from "./components/About/About";
import "./styles/main.css"

export const App = () => {
  return (
    <div className="App">
      <Header />
      <About />
      <Footer />
    </div>
  );
}


