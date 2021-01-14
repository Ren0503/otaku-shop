import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import logo from '../../assets/images/logo.png'
import background from '../../assets/images/background.jpg'

var sectionStyle = {
  width: '100%',
  backgroundImage: `url(${background})`,
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover',
  backgroundPosition: 'center'
}

const Footer = () => {
  return (
      <footer className="bg-light text-light" style={sectionStyle}>
        <Container className="py-1" variant="dark">
          <Row className="py-4">
            <Col lg={4} md={6} ><img src={logo} alt="logo" width={180} className="mb-3" variant="dark" />
              <p className="font-italic text-light">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt.</p>
              <ul className="list-inline mt-4">
                <li className="list-inline-item"><a href="#" target="_blank" title="twitter"><i className="fa fa-twitter" /></a></li>
                <li className="list-inline-item"><a href="#" target="_blank" title="facebook"><i className="fa fa-facebook" /></a></li>
                <li className="list-inline-item"><a href="#" target="_blank" title="instagram"><i className="fa fa-instagram" /></a></li>
                <li className="list-inline-item"><a href="#" target="_blank" title="pinterest"><i className="fa fa-pinterest" /></a></li>
                <li className="list-inline-item"><a href="#" target="_blank" title="vimeo"><i className="fa fa-vimeo" /></a></li>
              </ul>
            </Col>
            <Col lg={2} md={6}>
              <h6 className="text-uppercase font-weight-bold mb-4 text-light">Shop</h6>
              <ul className="list-unstyled mb-0">
                <li className="mb-2"><a href="#" className="text-light">Action</a></li>
                <li className="mb-2"><a href="#" className="text-light">Chibi</a></li>
                <li className="mb-2"><a href="#" className="text-light">Multi</a></li>
                <li className="mb-2"><a href="#" className="text-light">Our Blog</a></li>
              </ul>
            </Col>
            <Col lg={2} md={6}>
              <h6 className="text-uppercase font-weight-bold mb-4 text-light">Company</h6>
              <ul className="list-unstyled mb-0">
                <li className="mb-2"><a href="#" className="text-light">Login</a></li>
                <li className="mb-2"><a href="#" className="text-light">Register</a></li>
                <li className="mb-2"><a href="#" className="text-light">Wishlist</a></li>
                <li className="mb-2"><a href="#" className="text-light">Our Products</a></li>
              </ul>
            </Col>
            <Col lg={4} md={6}>
              <h6 className="text-uppercase font-weight-bold mb-4 text-light">Newsletter</h6>
              <p className="text-light mb-4">Lorem ipsum dolor sit amet, consectetur adipisicing elit. At itaque temporibus.</p>
              <div className="p-1 rounded border">
                <div className="input-group">
                  <input type="email" placeholder="Enter your email address" aria-describedby="button-addon1" className="form-control border-0 shadow-0" />
                  <div className="input-group-append">
                    <button id="button-addon1" type="submit" className="btn btn-link text-light"><i className="fa fa-paper-plane" /></button>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
        <div className="bg-light">
          <Container className="text-center">
            <p className="text-muted mb-0 py-2">© 2019 Bootstrapious All rights reserved.</p>
          </Container>
        </div>
      </footer>

  )
}

export default Footer
