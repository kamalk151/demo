import { Row, Col, Container, Card, Button } from 'react-bootstrap'
import itemImg3 from '../../Assets/real-estate/images/items/3.jpg'
import itemImg5 from '../../Assets/real-estate/images/items/5.jpg'
import itemImg6 from '../../Assets/real-estate/images/items/6.jpg'

const OurStory = () => {
  const cards = [
    {
      image: itemImg3,
      title: 'Private Villa',
      description: 'Some quick example text to build on the card title and make up the bulk of the card content.',
      link: '#',
    },
    {
      image: itemImg5,
      title: 'Office Lease',
      description: 'Some quick example text to build on the card title and make up the bulk of the card content.',
      link: '#',
    },
    {
      image: itemImg6,
      title: 'Furnished Apartment',
      description: 'Some quick example text to build on the card title and make up the bulk of the card content.',
      link: '#',
    },
  ]

  return (
    <Container className="our-story my-5">
      {/* Heading Section */}
      <div className="heading-block border-0 mw-100 text-start mb-5">
				<h2 className="fw-bold fs-2 mb-3">Our Story</h2>
				<p className="lead text-muted">
					Rerum morbi wisi purus illum, dolor consectetuer nulla, iusto eveniet? Fuga rem inventore
					scelerisque, wisi, hac illo wisi iste platea natus ante anim augue convallis. Lacinia
					laoreet mus quisque repellat, libero fusce, ullamco molestie taciti doloremq Iste quae
					possimus recusandae curae repellat.
				</p>
				<div className="divider"></div>
			</div>

      {/* Cards Section */}
      <Row className="g-4">
        {cards.map((card, index) => (
          <Col md={4} key={index}>
            <Card className="h-100 shadow-sm">
              <Card.Img variant="top" src={card.image} alt={card.title} />
              <Card.Body>
                <Card.Title className="fw-semibold">{card.title}</Card.Title>
                <Card.Text className="text-muted">{card.description}</Card.Text>
                <Button variant="primary" href={card.link} className="rounded-pill">
                  Learn More
                </Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  )
}

export default OurStory