import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';
import './Header.css';
import moatup from '../Assets/moatup.png';
import Home from '../Home.js';
import Header1 from '../Header1.js';

function OffcanvasExample() {
  return (
    <>
      {['xxl'].map((expand) => (
        <Navbar fixed="top" key={expand} expand={expand} >
          <Container fluid className="frontpage">

            <Navbar.Brand href="#">
              <div className="portfolio-image">
                <img src={moatup} alt="logo" className="img-fluid logo" />
              </div>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                  Menu
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 pe-3">
                  <Nav.Link
                    className="d-block d-xxl-none"
                    style={{ fontSize: '25px' }}
                    href="/home"
                  >
                    Home
                  </Nav.Link>

                  <Nav.Link
                    className="d-block d-xxl-none"
                    style={{ fontSize: '25px' }}
                    href="/signin"
                  >
                    Sign Up
                  </Nav.Link>
                  <Nav.Link
                    className="d-block d-xxl-none"
                    style={{ fontSize: '25px' }}
                    href="/login"
                  >
                    Sign In
                  </Nav.Link>
                  <Nav.Link
                    className="d-block d-xxl-none"
                    style={{ fontSize: '25px' }}
                    href="/mynetwork"
                  >
                    Sign In
                  </Nav.Link>
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>

          </Container>
       
        </Navbar>
      ))}
    </>
  );
}

export default OffcanvasExample;
