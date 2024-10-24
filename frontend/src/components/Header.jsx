import {Navbar, Nav, Container, NavbarToggle, NavbarCollapse } from 'react-bootstrap';
import { FaShoppingCart, FaUser} from 'react-icons/fa';

const Header = () => {
  return (
    <header>
        <Navbar bg="dark" expand="md" collapseOnSelect>
            <Container>
                <Navbar.Brand href="/">Proshop</Navbar.Brand>
                <NavbarToggle aria-controls="basic-navbar-nav" />
                <NavbarCollapse id="basic-navbar-nav">
                    <Nav className='ms-auto'>
                        <Nav.Link href='/cart'><FaShoppingCart /> Cart</Nav.Link>
                        <Nav.Link href="/login"><FaUser /> Sign In</Nav.Link>
                    </Nav>
                </NavbarCollapse>
            
            </Container>
        </Navbar>
    </header>
    
  )
}

export default Header