// Desc: Footer component for the application
import { Container, Row, Col, Form, Button } from 'react-bootstrap'
import { Link } from 'react-router'
import imgLogo from "./../Assets/real-estate/images/logo.png"

const Footer = () => {
  return (
    <footer className="dark mt-5 footer">
      <Container>
        {/* Footer Widgets */}
        <div className="footer-widgets-wrap">
          <Row className="mb-5">
            {/* Left Section */}
            <Col lg={5} className="order-last order-lg-first">
              <div className="widget">
                <img
                  src={imgLogo}
                  style={{
                    position: 'relative',
                    opacity: 0.85,
                    left: '-10px',
                    maxHeight: '80px',
                    marginBottom: '20px',
                  }}
                  alt="Footer Logo"
                />
                <p>
                  We believe in <strong>Simple</strong>, <strong>Creative</strong> &amp; <strong>Flexible</strong> Design Standards with a Retina &amp; Responsive Approach. Browse the amazing Features this template offers.
                </p>
                <hr style={{ margin: '30px 0px' }} />
                <p className="ls-1 fw-light" style={{ opacity: 0.6, fontSize: '13px' }}>
                  Copyrights &copy; 2023 Canvas: Real Estate
                </p>
              </div>
            </Col>

            {/* Right Section */}
            <Col lg={7}>
              <Row className="mb-5">
                {/* Popular Locations */}
                <Col md={6}>
                  <h4 className="ls-1 fw-normal text-uppercase">Popular Locations</h4>
                  <Row>
                    <Col xs={6}>
                      <ul className="list-unstyled">
                        <li><Link to="/dashboard">California</Link></li>
                        <li><Link to="/dashboard">Nevada</Link></li>
                        <li><Link to="/dashboard">Hawaii</Link></li>
                        <li><Link to="/dashboard">Washington</Link></li>
                        <li><Link to="/dashboard">Ottawa</Link></li>
                        <li><Link to="/dashboard">Virginia</Link></li>
                        <li><Link to="/dashboard">Ohio</Link></li>
                      </ul>
                    </Col>
                    <Col xs={6}>
                      <ul className="list-unstyled">
                        <li><Link to="/dashboard">Oregon</Link></li>
                        <li><Link to="/dashboard">Colorado</Link></li>
                        <li><Link to="/dashboard">Kentucky</Link></li>
                        <li><Link to="/dashboard">Texas</Link></li>
                        <li><Link to="/dashboard">Miami</Link></li>
                        <li><Link to="/dashboard">New York</Link></li>
                        <li><Link to="/dashboard">New Jersey</Link></li>
                      </ul>
                    </Col>
                  </Row>
                </Col>

                {/* Connect Socially */}
                <Col md={6}>
                  <h4 className="ls-1 fw-normal text-uppercase">Connect Socially</h4>
                  <div className="d-flex mb-4">
                    <a href="/dashboard" className="social-icon si-small rounded-circle text-white bg-facebook me-2" title="Facebook">
                      <i className="fa-brands fa-facebook-f"></i>
                    </a>
                    <a href="/dashboard" className="social-icon si-small rounded-circle text-white bg-x-twitter me-2" title="Twitter">
                      <i className="fa-brands fa-x-twitter"></i>
                    </a>
                    <a href="/dashboard" className="social-icon si-small rounded-circle text-white bg-instagram me-2" title="Instagram">
                      <i className="bi-instagram"></i>
                    </a>
                    <a href="/dashboard" className="social-icon si-small rounded-circle text-white bg-apple me-2" title="App Store">
                      <i className="fa-brands fa-apple"></i>
                    </a>
                    <a href="/dashboard" className="social-icon si-small rounded-circle text-white bg-android me-2" title="Play Store">
                      <i className="fa-brands fa-android"></i>
                    </a>
                    <a href="/dashboard" className="social-icon si-small rounded-circle text-white bg-skype" title="Skype">
                      <i className="fa-brands fa-skype"></i>
                    </a>
                  </div>

                  {/* Subscribe Form */}
                  <Form action="https://canvastemplate.com/include/subscribe.php" method="post">
                    <Form.Group controlId="widget-subscribe-form-email">
                      <Form.Control
                        type="email"
                        placeholder="Enter your Email"
                        className="not-dark required email"
                      />
                    </Form.Group>
                    <Button
                      variant="dark"
                      type="submit"
                      className="button-3d mt-3"
                    >
                      Subscribe
                    </Button>
                  </Form>
                </Col>
              </Row>
            </Col>
          </Row>
        </div>
        {/* .footer-widgets-wrap end */}
      </Container>
    </footer>
  )
}

export default Footer