import React from "react"
import { Row, Col, Container } from "react-bootstrap"

const OurService = () => {
  const services = [
    {
      icon: "icon-realestate-my-house",
      title: "Hassle Free",
      description:
        "Canvas provides support for Native HTML5 Videos that can be added to a Full Width Background.",
    },
    {
      icon: "icon-realestate-hammer",
      title: "Well Constructed",
      description:
        "Display your Content attractively using Parallax Sections that have unlimited customizable areas.",
    },
    {
      icon: "icon-realestate-garage",
      title: "Free Utilities",
      description:
        "You have complete easy control on each & every element that provides endless customization possibilities.",
    },
    {
      icon: "icon-realestate-rent",
      title: "Flexible Rentals",
      description:
        "Canvas provides support for Native HTML5 Videos that can be added to a Full Width Background.",
    },
    {
      icon: "icon-realestate-credit",
      title: "Easy Financing",
      description:
        "Display your Content attractively using Parallax Sections that have unlimited customizable areas.",
    },
    {
      icon: "icon-realestate-doc",
      title: "Solid Paperwork",
      description:
        "You have complete easy control on each & every element that provides endless customization possibilities.",
    },
  ]

  return (
    <section className="our-services mt-5">
      <Container>
        {/* Heading Section */}
        <Row className="mb-4">
					<Col>
						<h2 className="text-start fw-semibold fs-3 mb-3">Our Services</h2>
						<p className="text-start text-muted fs-6">
							Explore the wide range of services we offer to make your real estate journey seamless.
						</p>
						<div className="divider"></div>
					</Col>
				</Row>

        {/* Services Section */}
        <Row className="g-4">
          {services.map((service, index) => (
            <Col xs={12} md={6} key={index}>
              <div className="d-flex align-items-center feature-box">
                {/* Icon Section */}
                <div className="fbox-icon me-4">
                  <i className={`${service.icon} display-3 text-primary`}></i>
                </div>

                {/* Content Section */}
                <div className="fbox-content">
								<h3 className="fw-medium fs-5 mb-2">{service.title}</h3>
                  <p className="text-muted mb-0">{service.description}</p>
                </div>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  )
}

export default OurService