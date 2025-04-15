import { Container, Row, Col } from "react-bootstrap"
import imgOne from "../../Assets/real-estate/images/items/1.jpg"
import imgTwo from "../../Assets/real-estate/images/items/2.jpg"
import imgThree from "../../Assets/real-estate/images/items/4.jpg"
import useGetSpecialOfferQuery from "../../services/queries/useGetSpecialOfferQuery"
import { useEffect, useState } from "react"

const FeaturedProperty = () => {

  const { data: getFeaturedProperty, isLoading } = useGetSpecialOfferQuery({ featured: true })
  const [propertyData, setPropertyData] = useState([])
  const images = [imgOne, imgThree, imgTwo]

  useEffect(() => {
    // Add any side effects or data fetching here if needed
    const propertyData = getFeaturedProperty?.data.length > 3 && getFeaturedProperty?.data.slice(0, 3)
    if (getFeaturedProperty?.data.length) {
      setPropertyData(propertyData?.data || getFeaturedProperty?.data)
    }
  }
  , [getFeaturedProperty])

  return (
    <div className="featured-property mt-5">
      <Container>
        {/* Header Section */}
				<Row className="mb-4 align-items-center">
					<Col xs={12} md={8}>
						<h3 className="text-start fw-semibold fs-3 mb-0">Featured Properties</h3>
            <div className="divider mt-2"></div>
					</Col>
					<Col xs={12} md={4} className="text-md-end text-start mt-3 mt-md-0">
						<a
							href="#"
							className="btn btn-primary btn-sm rounded-pill fw-medium"
						>
							Check All
						</a>
					</Col>
				</Row>
        {/* Properties Section */}
        <Row>
          {!isLoading && propertyData.map((property) => (
            <Col xs={12} md={4} className="mb-4" key={property.id}>
              <div className="real-estate-item-image">
                <div className={`badge ${property.badgeClass}`}>{property.badge}</div>
                <a href="#">
                  <img src={images[property.id-1]} alt={property.title} className="img-fluid" />
                </a>
                <div className="real-estate-item-price">
                  {property.price}
                  <span>{property.priceDetails}</span>
                </div>
                <div className="real-estate-item-info">
                  <a href="#">
                    <i className="uil uil-images"></i>
                  </a>
                  <a href="#">
                    <i className="bi-heart"></i>
                  </a>
                </div>
              </div>
              <div className="real-estate-item-desc">
                <h3 className="mb-1">
                  <a href="#">{property.title}</a>
                </h3>
                <span className="text-muted d-block">{property.location}</span>
                <a href="#" className="real-estate-item-link">
                  <i className="bi-info-circle"></i>
                </a>
                <hr />
                <div className="real-estate-item-features fw-medium font-primary">
                  <Row className="g-0">
                    <Col xs={6} lg={4} className="p-0">
                      Beds: <span className="color">{property.features.beds}</span>
                    </Col>
                    <Col xs={6} lg={4} className="p-0">
                      Baths: <span className="color">{property.features.baths}</span>
                    </Col>
                    <Col xs={6} lg={4} className="p-0">
                      Area: <span className="color">{property.features.area}</span>
                    </Col>
                    <Col xs={6} lg={4} className="p-0">
                      Pool:
                      <span className={property.features.pool ? "text-success" : "text-danger"}>
                        <i
                          className={
                            property.features.pool
                              ? "fa-solid fa-square-check"
                              : "bi-dash-square-fill"
                          }
                        ></i>
                      </span>
                    </Col>
                    <Col xs={6} lg={4} className="p-0">
                      Internet:
                      <span className={property.features.internet ? "text-success" : "text-danger"}>
                        <i
                          className={
                            property.features.internet
                              ? "fa-solid fa-square-check"
                              : "bi-dash-square-fill"
                          }
                        ></i>
                      </span>
                    </Col>
                    <Col xs={6} lg={4} className="p-0">
                      Cleaning:
                      <span className={property.features.cleaning ? "text-success" : "text-danger"}>
                        <i
                          className={
                            property.features.cleaning
                              ? "fa-solid fa-square-check"
                              : "bi-dash-square-fill"
                          }
                        ></i>
                      </span>
                    </Col>
                  </Row>
                </div>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  )
}

export default FeaturedProperty