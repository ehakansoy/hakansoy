import {Nav, Navbar, NavDropdown} from "react-bootstrap";
import {Link} from "react-router-dom";

function MyNavbar() {
    return (
        <Navbar bg="light" expand="lg" className="ps-3 pe-3">
            <Navbar.Brand href="/">hakan.soy</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav"/>
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                    <NavDropdown title="Trips" id="basic-nav-dropdown">
                        <NavDropdown.Item>
                            <Link to="/trips/sl-25" className="nav-link">Sri Lanka 2025</Link>
                        </NavDropdown.Item>
                    </NavDropdown>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
}

export default MyNavbar;
