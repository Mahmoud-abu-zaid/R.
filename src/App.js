import About from "./components/About";
import Blog from "./components/Blog";
import Footer from "./components/layout/Footer";
import Header from "./components/layout/Header";
import Home from "./components/Home";
import Services from "./components/Services";

function App() {
  return (
    <>
      <Header />
      <Home />
      <About />
      <Services />
      <Blog />
      <Footer />
    </>
  );
}

export default App;
