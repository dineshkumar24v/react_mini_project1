// import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
// import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {Link} from 'react-router-dom'
import './Navbarr.css'
import { IoCartOutline } from "react-icons/io5";
import { FaRegHeart } from "react-icons/fa";

function Navbarr() {
  return (
    <Navbar expand="lg" className="p-3 mb-2 bg-info text-white">
      <Container fluid>
        <Navbar.Brand href="#">Navbar logo</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav className="me-auto my-2 my-lg-0" id='navLinks'
            style={{ maxHeight: '100px' }}
            navbarScroll
            >
            <Link to='recipes' color='white'>Recipies</Link>
            <Link to='/cart'><IoCartOutline fontSize={30} color='white'/></Link>
            <Link to='/favs'><FaRegHeart fontSize={25} color='white'/></Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navbarr;