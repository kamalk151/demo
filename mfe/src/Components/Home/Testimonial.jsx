import React from 'react'
import { Container, Row, Col, Card, Button } from 'react-bootstrap'
import imgTwo from '../../Assets/real-estate/images/items/2.jpg'

const Testimonial = () => {
  const testimonials = [
    {
      name: 'Mr. Deepak Pakhare',
      designation: 'Senior UX Designer - Amazon',
      image: imgTwo,
      feedback:
        'PropertyPistol represented the buyer of my property in a recently concluded deal. Despite being not a direct client, PropertyPistol extended unbiased support to me in the most professional manner.',
    },
    {
      name: 'Mr. Kartik Gopal',
      designation: 'Manager International Business - Hindustan Pencils Pvt. Ltd',
      image: imgTwo,
      feedback:
        'Thanks for the support that PropertyPistol and its team provided to us. Special thanks to Mr. Ashish Ukey for getting our dream home.',
    },
    {
      name: 'Mr. Rishi Kumar Yadav',
      designation: 'Electrical Officer - Teekay Shipping (I) Pvt Ltd',
      image: imgTwo,
      feedback:
        'My last experience with a brokering agent was not good, but after meeting with team PropertyPistol, I got the confidence, and indeed it was a pleasure working with them.',
    },
  ]

  return (
    <section className="testimonialBg px-0">
      <Container>
        {/* Header Section */}
        <Row className="mb-4">
          <Col>
            <h2 className="subtitle text-start mb-2 fw-bold fs-2">Testimonials</h2>
            <div className="title text-start text-muted fs-5">
              Our Happy Clients Say About Us
            </div>
            <div className="divider mt-2"></div>
          </Col>
        </Row>

        {/* Testimonials Section */}
        <Row className="g-4">
          {testimonials.map((testimonial, index) => (
            <Col md={4} key={index}>
              <Card className="h-100">
                <Card.Body>
                  <div className="user-holder d-flex align-items-center mb-3">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="profile-pic me-3"
                      style={{ width: '60px', height: '60px', borderRadius: '50%' }}
                    />
                    <div>
                      <p className="testimonial-name mb-0">{testimonial.name}</p>
                      <p className="testimonial-designation text-muted">{testimonial.designation}</p>
                    </div>
                  </div>
                  <Card.Text className="p-info">{testimonial.feedback}</Card.Text>
                  <Button variant="primary" className="read-more">
                    Read More
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  )
}

export default Testimonial