import "./App.css";
// BrowserRouter: vamos a manejar todo los que tiene que ver con rutas
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomeScreen from "./screens/HomeScreen";
import MascotaScreen from "./screens/MascotaScreen";
// --------
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import { LinkContainer } from "react-router-bootstrap";

function App() {
  return (
    <BrowserRouter>
      <div className="d-flex flex-column site-container">
        <header>
          <Navbar bg="dark" variant="dark">
            <Container>
              <LinkContainer to="/">
                <Navbar.Brand>PetFinder</Navbar.Brand>
              </LinkContainer>
            </Container>
          </Navbar>
        </header>
        <main>
          <Container>
            <Routes>
              <Route path="/mascota/:slug" element={<MascotaScreen />} />;
              <Route path="/" element={<HomeScreen />} />
            </Routes>
          </Container>
        </main>
        <footer>
          <div className="text-center">Derechos Reservados AlbertoZMiranda</div>
        </footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
