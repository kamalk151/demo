import React from 'react';
import { Row, Col, Tab, Nav } from 'react-bootstrap';
import imgOne from '../../Assets/real-estate/images/builders/1.png';
import imgTwo from '../../Assets/real-estate/images/builders/2.png';
import imgThree from '../../Assets/real-estate/images/builders/3.png';
import imgFour from '../../Assets/real-estate/images/builders/4.png';

const WhyUs = () => {
  return (
    <div className="why-us mt-5">
      <Row className="row col-mb-12">
        <Col md={8}>
          <Tab.Container defaultActiveKey="why-us">
            <Nav variant="tabs" className="mb-3" fill>
              <Nav.Item>
                <Nav.Link eventKey="why-us">Why Us?</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="properties">Properties</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="legal">Legal</Nav.Link>
              </Nav.Item>
            </Nav>

            <Tab.Content>
              {/* Tab 1: Why Us */}
              <Tab.Pane eventKey="why-us">
                <p>
                  Proin elit arcu, rutrum commodo, vehicula tempus, commodo a, risus. Curabitur nec arcu. Donec sollicitudin mi sit amet mauris. Nam elementum quam ullamcorper ante. Etiam aliquet massa et lorem. Mauris dapibus lacus auctor risus. Aenean tempor ullamcorper leo. Vivamus sed magna quis ligula eleifend adipiscing. Duis orci. Aliquam sodales tortor vitae ipsum. Aliquam nulla. Duis aliquam molestie erat. Ut et mauris vel pede varius sollicitudin. Sed ut dolor nec orci tincidunt interdum. Phasellus ipsum. Nunc tristique tempus lectus.
                </p>
                <Row className="text-center">
                  <Col sm={6} lg={3}>
                    <div className="counter ls-1 fw-semibold text-muted">
                      <span>964</span>
                    </div>
                    <h5>Floors Built</h5>
                  </Col>
                  <Col sm={6} lg={3}>
                    <div className="counter ls-1 fw-semibold text-muted">
                      <span>8514</span>
                    </div>
                    <h5>Employees</h5>
                  </Col>
                  <Col sm={6} lg={3}>
                    <div className="counter ls-1 fw-semibold text-muted">
                      <span>458</span>
                    </div>
                    <h5>Happy Clients</h5>
                  </Col>
                  <Col sm={6} lg={3}>
                    <div className="counter ls-1 fw-semibold text-muted">
                      <span>159</span>
                    </div>
                    <h5>Cities Served</h5>
                  </Col>
                </Row>
              </Tab.Pane>

              {/* Tab 2: Properties */}
              <Tab.Pane eventKey="properties">
                <p>
                  Mauris eleifend est et turpis. Duis id erat. Suspendisse potenti. Aliquam vulputate, pede vel vehicula accumsan, mi neque rutrum erat, eu congue orci lorem eget lorem. Vestibulum non ante. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Fusce sodales. Quisque eu urna vel enim commodo pellentesque. Praesent eu risus hendrerit ligula tempus pretium. Curabitur lorem enim, pretium nec, feugiat nec, luctus a, lacus.
                </p>
                <Row>
                  <Col sm={6} lg={4}>
                    <ul className="iconlist mb-0">
                      <li><i className="fa-solid fa-check"></i> 100% Assurance</li>
                      <li><i className="fa-solid fa-check"></i> Hard Working</li>
                      <li><i className="fa-solid fa-check"></i> Trustworthy</li>
                    </ul>
                  </Col>
                  <Col sm={6} lg={4}>
                    <ul className="iconlist mb-0">
                      <li><i className="fa-solid fa-check"></i> Intelligent</li>
                      <li><i className="fa-solid fa-check"></i> Always Curious</li>
                      <li><i className="fa-solid fa-check"></i> Perfectionists</li>
                    </ul>
                  </Col>
                  <Col sm={6} lg={4}>
                    <ul className="iconlist mb-0">
                      <li><i className="fa-solid fa-check"></i> Friendly &amp; Helpful</li>
                      <li><i className="fa-solid fa-check"></i> Accommodating Nature</li>
                      <li><i className="fa-solid fa-check"></i> Available 24x7</li>
                    </ul>
                  </Col>
                </Row>
              </Tab.Pane>

              {/* Tab 3: Legal */}
              <Tab.Pane eventKey="legal">
                <Row>
                  <Col md={7}>
                    <p>
                      Morbi tincidunt, dui sit amet facilisis feugiat, odio metus gravida ante, ut pharetra massa metus id nunc. Duis scelerisque molestie turpis. Sed fringilla, massa eget luctus malesuada, metus eros molestie lectus, ut tempus eros massa ut dolor.
                    </p>
                    <Row>
                      <Col md={6}>
                        <address>
                          <strong>Headquarters:</strong><br />
                          795 Folsom Ave, Suite 600<br />
                          San Francisco, CA 94107<br />
                        </address>
                      </Col>
                      <Col md={6}>
                        <abbr title="Phone Number"><strong>Phone:</strong></abbr> (1) 8547 632521<br />
                        <abbr title="Fax"><strong>Fax:</strong></abbr> (1) 11 4752 1433<br />
                        <abbr title="Email Address"><strong>Email:</strong></abbr> info@canvas.com
                      </Col>
                    </Row>
                  </Col>
                  <Col md={5}>
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.925819998654!2d144.9613620758663!3d-37.81520647197522!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642b4758afc1d%3A0x3119cc820fdfc62e!2sEnvato!5e0!3m2!1sen!2sin!4v1683119849609!5m2!1sen!2sin"
                      width="100%"
                      height="250"
                      className="border-0"
                      allowFullScreen=""
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                  </Col>
                </Row>
              </Tab.Pane>
            </Tab.Content>
          </Tab.Container>
        </Col>

        <Col md={4}>
          <h4 className="text-center">Top Builders</h4>
          <Row className="g-3">
            {[imgOne, imgTwo, imgThree, imgFour].map((img, index) => (
              <Col xs={6} md={6} className="text-center" key={index}>
                <a href="#" className="op-09">
                  <img src={img} alt="Clients" className="img-fluid p-2" />
                </a>
              </Col>
            ))}
          </Row>
        </Col>
      </Row>
    </div>
  );
};

export default WhyUs;