import React from 'react'
import { Link } from 'react-router-dom'
import { Navbar, Nav, Container, NavDropdown } from 'react-bootstrap'

const Menu = () => {
    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Container>
            <Navbar.Brand href="/product">OTAKU YUKI</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mr-auto">
                    <NavDropdown title="Product" id="collasible-nav-dropdown">
                            <Link to='/category/genres/action'>
                                <NavDropdown.Item href='/category/genres/action'>Action</NavDropdown.Item>
                            </Link>
                            <Link to='/category/genres/chibi'>
                                <NavDropdown.Item href='/category/genres/chibi'>Chibi</NavDropdown.Item>
                            </Link>
                            <Link to='/category/genres/scale'>
                                <NavDropdown.Item href='/category/genres/scale'>Scale</NavDropdown.Item>
                            </Link>
                            <NavDropdown.Divider />
                            <Link to='/category/genres/book'>
                            <NavDropdown.Item href='/category/genres/book'>Book</NavDropdown.Item>
                            </Link>
                    </NavDropdown>
                    <Nav.Link href="/about">About</Nav.Link>

                    <Nav.Link href="/contact">Contact</Nav.Link>
                </Nav>
            </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default Menu