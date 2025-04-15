import React from 'react'
import { Card, Form, Button, Spinner } from 'react-bootstrap'

const BookNow = () => {
  const socialLinks = [
    { platform: 'facebook', icon: 'fa-facebook-f', bg: 'bg-facebook' },
    { platform: 'twitter', icon: 'fa-x-twitter', bg: 'bg-x-twitter' },
    { platform: 'pinterest', icon: 'fa-pinterest-p', bg: 'bg-pinterest' },
    { platform: 'google', icon: 'fa-google', bg: 'bg-google' },
    { platform: 'rss', icon: 'fa-rss', bg: 'bg-rss' },
    { platform: 'instagram', icon: 'bi-instagram', bg: 'bg-instagram' },
  ]

  return (
    <aside className="sidebar sticky-sidebar-wrap col-lg-3">
      <div className="sidebar-widgets-wrap">
        <div className="sticky-sidebar">
          {/* Booking Form */}
          <Card className="bg-light mb-4">
            <Card.Header>Reserve Now</Card.Header>
            <Card.Body>
              <Form action="https://canvastemplate.com/include/form.php" method="post">
                <div className="form-process">
                  <Spinner animation="border" role="status" className="css3-spinner">
                    <span className="visually-hidden">Loading...</span>
                  </Spinner>
                </div>

                <Form.Group className="mb-3" controlId="quick-contact-form-name">
                  <Form.Label>Full Name</Form.Label>
                  <Form.Control type="text" placeholder="Full Name" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="quick-contact-form-email">
                  <Form.Label>Email Address</Form.Label>
                  <Form.Control type="email" placeholder="Email Address" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="quick-contact-form-number">
                  <Form.Label>Phone Number</Form.Label>
                  <Form.Control type="number" placeholder="Phone Number" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="quick-contact-form-message">
                  <Form.Label>Message</Form.Label>
                  <Form.Control as="textarea" rows={4} placeholder="Message" required />
                </Form.Group>

                <Button type="submit" variant="primary" className="w-100">
                  Book Now
                </Button>
              </Form>
            </Card.Body>
          </Card>

          {/* Map Section */}
          <Card className="mb-4">
            <Card.Header>Map</Card.Header>
            <Card.Body>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.8401081815946!2d144.9537363153534!3d-37.81721397975177!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad65d4c2b349649%3A0xb6899234e561db11!2sEnvato!5e0!3m2!1sen!2sin!4v1513601296579"
                width="100%"
                height="250"
                style={{ border: 0 }}
                allowFullScreen
                title="Google Map"
              ></iframe>
            </Card.Body>
          </Card>

          {/* Video Section */}
          <Card className="mb-4">
            <Card.Header>Video</Card.Header>
            <Card.Body>
              <iframe
                width="100%"
                height="250"
                src="https://www.youtube.com/embed/GU58qaKmZhQ"
                allow="encrypted-media"
                allowFullScreen
                title="Property Video"
              ></iframe>
            </Card.Body>
          </Card>

          {/* Social Share Section */}
          <Card className="share-card mb-4">
            <Card.Header>Share</Card.Header>
            <Card.Body>
              <div className="d-flex">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href="#"
                    className={`social-icon si-small rounded-circle text-white ${social.bg} me-2`}
                  >
                    <i className={`fa-brands ${social.icon}`}></i>
                  </a>
                ))}
              </div>
            </Card.Body>
          </Card>
        </div>
      </div>
    </aside>
  )
}

export default BookNow