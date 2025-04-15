import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import builderImg1 from '../../Assets/real-estate/images/builders/1.png'
import builderImg2 from '../../Assets/real-estate/images/builders/2.png'
import builderImg3 from '../../Assets/real-estate/images/builders/3.png'
import builderImg4 from '../../Assets/real-estate/images/builders/4.png'
import builderImg5 from '../../Assets/real-estate/images/builders/3.png'
import builderImg6 from '../../Assets/real-estate/images/builders/2.png'
import builderImg7 from '../../Assets/real-estate/images/builders/2.png'
import builderImg8 from '../../Assets/real-estate/images/builders/1.png'

const OurPartner = () => {
  const partners = [
    builderImg1,
    builderImg2,
    builderImg3,
    builderImg4,
    builderImg5,
    builderImg6,
    builderImg7,
    builderImg8,
  ]

  return (
    <Container className="our-partners my-5">
      {/* Heading Section */}
      <div className="heading-block border-0 mw-100 text-start mb-5">
        <h2 className="fw-semibold fs-3 mb-3">Our Partners</h2>
        <p className="text-muted fs-6">
          Rerum morbi wisi purus illum, dolor consectetuer nulla, iusto eveniet? Fuga rem inventore
          scelerisque, wisi, hac illo wisi iste platea natus ante anim augue convallis. Lacinia
          laoreet mus quisque repellat.
        </p>
        <div className="divider"></div>
      </div>

      {/* Partners Section */}
      <Row className="g-4 text-center">
        {partners.map((partner, index) => (
          <Col xs={4} sm={3} md={2} key={index}>
            <img
              src={partner}
              alt={`Partner ${index + 1}`}
              className="img-fluid rounded shadow-sm"
            />
          </Col>
        ))}
      </Row>
    </Container>
  )
}

export default OurPartner