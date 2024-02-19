import { useState, useEffect} from "react";
import { Navbar, Container, Nav} from "react-bootstrap";
import { navLinks} from "../data/index"
import { NavLink } from "react-router-dom"


const NavbarComponent = () => {
  const [changeColor, setChangeColor] = useState(false);

  const changeBackgroundColor = () => {
    if(window.scrollY > 10) {
        setChangeColor(true);
    } else {
        setChangeColor(false);
    }
  };

  useEffect(() => {
    changeBackgroundColor();

    window.addEventListener("scroll", changeBackgroundColor);
  })

  return (
    <div>
        <Navbar expand="lg" className={changeColor ? "color-active" : ""}>    
            <Container>
                <Navbar.Brand href="#home" className="font-header">
                    Course Website
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mx-auto text-center">
                        {navLinks.map((link) => {
                            return (
                                <div className="nav-link" key={link.id}>
                                    <NavLink to={link.path} className={({ isActive, isPending }) => isPending ? "pending" : 
                                    isActive ? "active" : ""} end>
                                     {link.text}
                                    </NavLink>
                                </div>
                            );
                        })}
                {/* <Nav.Link href="#home">Home</Nav.Link>
                <Nav.Link href="#link">Link</Nav.Link> */}
                {/* <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                    <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                    </NavDropdown> */}
                    </Nav>

                    <div className="text-center">
                        <button className="btn btn-outline-danger rounded-3">
                            Join Us
                        </button>
                    </div>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    </div>
  )
}

export default NavbarComponent;

