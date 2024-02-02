import { Route, Routes } from "react-router-dom";
import { Home, About, Menu, Services, Order } from "./Pages/";
import { Navbar, Footer } from "./Components";
import Aos from "aos";
import { useEffect } from "react";

function App() {

  useEffect(() => {
    Aos.init({
      offset: 200,
      duration: 800,
      easing: "ease-in-sine",
      delay: 100
    })
  }, []);



  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/Menu" element={<Menu />} />
        <Route path="/Services" element={<Services />} />
        <Route path="/Order" element={<Order />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App;