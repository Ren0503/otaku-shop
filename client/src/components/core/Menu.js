import React from 'react'
import { Link } from 'react-router-dom'
import { Navbar, Nav, Container, NavDropdown } from 'react-bootstrap'

const Menu = () => {
    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Container>
            <Navbar.Brand href="/">OTAKU YUKI</Navbar.Brand>
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
                            <Link to='/product/genres/book'>
                            <NavDropdown.Item href='/product/genres/book'>Book</NavDropdown.Item>
                            </Link>
                    </NavDropdown>
                    <NavDropdown title="Series" id="collasible-nav-dropdown2">
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
                </Nav>
                <Nav>
                    <Nav.Link href="/about">About</Nav.Link>

                    <Nav.Link href="/contact">Contact</Nav.Link>
                </Nav>
            </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default Menu