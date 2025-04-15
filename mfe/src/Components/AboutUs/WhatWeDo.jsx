import React from 'react'
import { Container, Row, Col, Accordion } from 'react-bootstrap'
import aboutUsThree from '../../Assets/real-estate/images/about-us/3.jpg'

const WhatWeDo = () => {
  return (
    <Container className="what-we-do my-5">
      <Row className="align-items-center">
        {/* Left Section: Heading and Accordion */}
        <Col md={6} className="mb-4 mb-md-0 min-height-35em">
          <div className="heading-block border-0 text-start mb-4">
            <h2 className="fw-semibold fs-3 mb-3">What We Do</h2>
            <p className="text-muted fs-6">
              Discover how we make your real estate journey seamless, whether you`re buying, renting, or selling.
            </p>
            <div className="divider"></div>
          </div>
          <Accordion defaultActiveKey="0" flush>
            <Accordion.Item eventKey="0">
              <Accordion.Header>The Way We Respond</Accordion.Header>
              <Accordion.Body>
                We ensure timely responses to all your queries, providing you with the best solutions for your real estate needs.
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1">
              <Accordion.Header>Rent A House</Accordion.Header>
              <Accordion.Body>
                Explore a wide range of rental properties tailored to your preferences and budget.
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="2">
              <Accordion.Header>Need Office Space</Accordion.Header>
              <Accordion.Body>
                Find the perfect office space to grow your business in prime locations.
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="3">
              <Accordion.Header>Sell A House</Accordion.Header>
              <Accordion.Body>
                Get the best value for your property with our expert marketing and sales strategies.
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="4">
              <Accordion.Header>Our Pricing</Accordion.Header>
              <Accordion.Body>
                Transparent and competitive pricing to ensure you get the best deals in the market.
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </Col>

        {/* Right Section: Image */}
        <Col md={6}>
          <div className="image-container text-center">
            <img
              src={aboutUsThree}
              alt="What We Do"
              className="img-fluid rounded shadow-lg"
              style={{ maxHeight: '400px', objectFit: 'cover' }}
            />
          </div>
        </Col>
      </Row>
    </Container>
  )
}

export default WhatWeDo