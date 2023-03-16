import { Route, Routes } from "react-router-dom";
import { Contact } from "./Components/Pages/contact";
import { Login } from "./Components/Pages/login";
import { Products } from "./Components/Pages/products";
import { Footer } from "./Components/Partials/footer";
import { Hero } from "./Components/Partials/Hero";
import { Container } from "./Components/Style/container";

function App() {
  return (
    <>
    <Container>

    <Routes>
        <Route path="/" element={<Hero />} />
        <Route path='/kontakt' element={<Contact />} />
        <Route path='/produkter' element={<Products />} />
        <Route path='/login' element={<Login />} />
    </Routes>
      <Footer />
    
    </Container>
    
    </>
  );
}

export default App;
