import { Router } from "./Components/App/Approuter/router";
import { Footer } from "./Components/Partials/footer";
import { Header } from "./Components/Partials/header";
import { Container } from "./Components/Style/container";

function App() {
  return (
    <>
    <Container>
      <Header />
      <Router />
      <Footer />
    </Container>
    
    </>
  );
}

export default App;
