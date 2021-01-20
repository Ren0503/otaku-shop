import React from 'react'
import { Link } from 'react-router-dom'
import { Navbar, Nav, Container, NavDropdown } from 'react-bootstrap'

const Menu = () => {
    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Container>
                <Navbar.Brand href="#home">OTAKU YUKI</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mr-auto">
                        <NavDropdown title="Product" id="collasible-nav-dropdown">
                            <Link to='/product/genres/action'>
                                <NavDropdown.Item href='/product/genres/action'>Action</NavDropdown.Item>
                            </Link>
                            <Link to='/product/genres/chibi'>
                                <NavDropdown.Item href='/product/genres/chibi'>Chibi</NavDropdown.Item>
                            </Link>
                            <Link to='/product/genres/multi'>
                                <NavDropdown.Item href='/product/genres/multi'>Multi</NavDropdown.Item>
                            </Link>
                            <NavDropdown.Divider />
                            <Link to={`/`}>
                                <NavDropdown.Item>All</NavDropdown.Item>
                            </Link>
                        </NavDropdown>
                        <NavDropdown title="Series" id="collasible-nav-dropdown">
                            <Link to='/product/series/kimetsu'>
                                <NavDropdown.Item href='/product/genres/action'>Kimetsu No Yaiba</NavDropdown.Item>
                            </Link>
                            <Link to='/product/series/naruto'>
                                <NavDropdown.Item href='/product/genres/chibi'>Naruto Shippuden</NavDropdown.Item>
                            </Link>
                            <Link to='/product/series/one'>
                                <NavDropdown.Item href='/product/genres/multi'>One Pieces</NavDropdown.Item>
                            </Link>
                            <Link to='/product/series/titan'>
                               <NavDropdown.Item href='/product/genres/multi'>Attack on the Titan</NavDropdown.Item>
                            </Link>
                        </NavDropdown>
                        <NavDropdown title="Guide" id="collasible-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">What is Figure</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">Compare between Real and Fake</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Question & Ask</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">How to fix Figure</NavDropdown.Item>
                        </NavDropdown>
                        <Nav.Link href="#pricing">About</Nav.Link>
                        <Nav.Link href="#pricing">Contact</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default Menu