/* import Button from 'react-bootstrap/Button'; */
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';
import 'bootstrap/dist/css/bootstrap.min.css';
import { AiOutlineSearch } from 'react-icons/ai';
import { CgProfile } from 'react-icons/cg';
import { BsHandbag } from 'react-icons/bs';
function Navbarpage() {
  return (
    <>
      {[ 'sm'].map((expand) => (
        <Navbar key={expand} expand={expand} className="bg-body-tertiary">
          <Container fluid>
            <Navbar.Brand href="/">BayRang</Navbar.Brand>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
            >{/* 
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                  BayRang
                </Offcanvas.Title>
    chrome-extension://pnhechapfaindjhompbnflcldabbghjo/html/nassh.html          </Offcanvas.Header> */}
              <Offcanvas.Body>
                <Nav className="justify-content-start flex-grow-1 pe-3">
                  <Nav.Link href="/">Home</Nav.Link>
                  <Nav.Link href="/products">Products</Nav.Link>
                  <Nav.Link href="/contact">Contact</Nav.Link>
                  <Nav.Link href="/about">About</Nav.Link>
            
                </Nav>
                <Form className="d-flex">
                  {/* <Form.Control
                    type="search"
                    placeholder="Search"
                    className="me-2"
                    aria-label="Search"
                  />
                  <Button variant="outline-success">Search</Button> */}
                  <a href='/search'style={{justifyContent:'center',display:'flex'}}><AiOutlineSearch style={{height:'2vmax',width:'5rem'}}/></a>
                  <a href='/card'style={{justifyContent:'center',display:'flex'}}><BsHandbag style={{height:'2vmax',width:'5rem'}}/></a>
                  <a href='/login'style={{justifyContent:'center',display:'flex'}}><CgProfile style={{height:'2vmax',width:'5rem'}}/></a>
              
                </Form>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
    </>
  );
}

export default Navbarpage;