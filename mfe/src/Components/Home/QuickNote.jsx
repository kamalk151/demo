import React, { useState } from "react"
import { Row, Col, Form, Button } from "react-bootstrap"

const QuickNote = () => {
  const [contactValue, setContactValue] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
    botcheck: "",
  })

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setContactValue((prevState) => ({
      ...prevState,
      [name]: value,
    }))
  }

  return (
    <section className="content quick-note">
      <Row className="align-items-stretch mx-0 mt-5">
        {/* Map Section */}
        <Col lg={5} className="px-0 d-none d-md-block">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.925819998654!2d144.9613620758663!3d-37.81520647197522!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642b4758afc1d%3A0x3119cc820fdfc62e!2sEnvato!5e0!3m2!1sen!2sin!4v1683119849609!5m2!1sen!2sin"
            width="100%"
            height="100%"
            className="border-0 h-100"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </Col>

        {/* Headquarters Section */}
        {/* <Col lg={3} style={{ backgroundColor: "#E5E5E5" }}> */}
        <Col lg={3}>
          <div style={{ padding: "40px" }}>
            <h4 className="font-body fw-semibold ls-1">Our Headquarters</h4>
            <div style={{ fontSize: "15px", lineHeight: "1.7" }}>
              <address style={{ lineHeight: 1.7 }}>
                <strong>North America:</strong>
                <br />
                795 Folsom Ave, Suite 600
                <br />
                San Francisco, CA 94107.
                <br />
                <br />
                <abbr title="Phone Number">
                  <strong>Phone:</strong>
                </abbr>{" "}
                (1) 8547 632521
                <br />
                <abbr title="Email Address">
                  <strong>Email:</strong>
                </abbr>{" "}
                real-estate@canvas.com
              </address>

              <div className="clear mt-4"></div>

              <h4
                className="font-body fw-medium"
                style={{ fontSize: "17px", marginBottom: "10px" }}
              >
                Working Hours:
              </h4>
              <abbr title="Mondays to Fridays">
                <strong>Mon-Fri:</strong>
              </abbr>{" "}
              10AM to 6PM
              <br />
              <abbr title="Saturday">
                <strong>Saturday:</strong>
              </abbr>{" "}
              11AM to 3PM
              <br />
              <abbr title="Sunday">
                <strong>Sunday:</strong>
              </abbr>{" "}
              Closed
            </div>
          </div>
        </Col>

        {/* Quick Quote Form Section */}
        <Col lg={4} className="bg-color">
          <div className="col-padding">
            <div className="quick-contact-widget form-widget dark">
              <h3 className="text-capitalize ls-1 fw-normal">Get a Quick Quote</h3>
              <Form
                id="quick-contact-form"
                name="quick-contact-form"
                onSubmit={(e) => e.preventDefault()}
                className="quick-contact-form mb-0"
              >
                <Form.Group className="mb-2">
                  <Form.Control
                    type="text"
                    name="name"
                    value={contactValue.name}
                    onChange={handleInputChange}
                    placeholder="Full Name"
                    required
                  />
                </Form.Group>

                <Form.Group className="mb-2">
                  <Form.Control
                    type="email"
                    name="email"
                    value={contactValue.email}
                    onChange={handleInputChange}
                    placeholder="Email Address"
                    required
                  />
                </Form.Group>

                <Form.Group className="mb-2">
                  <Form.Control
                    type="text"
                    name="phone"
                    value={contactValue.phone}
                    onChange={handleInputChange}
                    placeholder="Phone Number (+1-555-2221)"
                    required
                  />
                </Form.Group>

                <Form.Group className="mb-2">
                  <Form.Control
                    as="textarea"
                    name="message"
                    rows={5}
                    value={contactValue.message}
                    onChange={handleInputChange}
                    placeholder="What are you Looking for? (Ex: Villa on the Beach)"
                    required
                  />
                </Form.Group>

                <Form.Group className="d-none">
                  <Form.Control
                    type="text"
                    name="botcheck"
                    value={contactValue.botcheck}
                    onChange={handleInputChange}
                  />
                </Form.Group>

                <Button
                  type="submit"
                  variant="light"
                  className="button button-small button-rounded button-light button-white m-0"
                >
                  Send Email
                </Button>
              </Form>
            </div>
          </div>
        </Col>
      </Row>
    </section>
  )
}

export default QuickNote