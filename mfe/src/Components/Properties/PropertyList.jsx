import React, { useEffect } from 'react'
import { Container, Row, Col, Form, Card, Button, Badge } from 'react-bootstrap'
import itemImg1 from '../../Assets/real-estate/images/items/1.jpg'
import itemImg2 from '../../Assets/real-estate/images/items/2.jpg'
import itemImg3 from '../../Assets/real-estate/images/items/3.jpg'
import PropertySideFilter from './PropertySideFilter'
import PropertyHeader from './PropertyHeader'
import { Link } from 'react-router'
import useGetPropertyListQuery from '../../services/queries/useGetPropertyListQuery'

const PropertyList = () => {
  const { data: getProperty, isLoading, isError } = useGetPropertyListQuery()
  const [propertyData, setPropertyData] = React.useState([])
  const images = [itemImg1, itemImg2, itemImg3, itemImg2, itemImg3]
 
  useEffect(() => {
    // Add any side effects or data fetching here if needed
    getProperty?.data && setPropertyData(getProperty?.data)
  }
  , [getProperty])

  return (
    <section id="content">
      <Container fluid className="pt-0">
        {/* Header Section */}
        <PropertyHeader />
        <hr />
        <Row className="g-4">
          <Col xs={12} md={3} className="text-md-end text-start">
            <PropertySideFilter />
          </Col>

          <Col xs={12} md={9} className="text-start">
            <h4 className='search-result mb-5'> { propertyData.length} results - Flats, Apartments for sale in Gautam Budh Nagar, Noida</h4>
            <Row className="g-4">
              {/* Property List */}
              { isLoading && <div className="text-center">Loading...</div> }
              { propertyData.length === 0 && !isLoading && !isError && <div className="text-center">No properties found</div> }


              { !isLoading && propertyData.map((property) => (
                <Col xs={12} md={6} lg={6} key={property.id}>
                  <Link to={`/property-detail/${property.id}`} className="text-decoration-none">
                    <Card className="position-relative">
                      {/* Property Image */}
                      <Badge
                        bg={property.labelClass}
                        className="position-absolute top-0 start-0 m-2"
                      >
                        {property.label}
                      </Badge>
                      <Card.Img variant="top" src={images[property.id - 1]} alt={property.title} />
                      {/* Price Overlay */}
                      <Card.Body>
                        <Card.Title>{property.title}</Card.Title>
                        <Card.Subtitle className="text-muted mb-3">{property.location}</Card.Subtitle>
                        <Row>
                          <Col xs={12}>Configurations: <span>
                              {property.features.configurations} {property.features.propertyType}
                            </span>
                          </Col>
                          
                          <div className='mb-3'></div>
                          <Col xs={6}>Furnishing: <span>{property.features.furnishing}</span></Col>
                          <div className='mb-3'></div>
                          <Col xs={6}>Built up Area: <span>{property.features.builtInArea}</span></Col>
                          <Col xs={6}>Carpet Area: <span>{property.features.carpetArea}</span></Col>
                          <div className='mb-4'></div>
                          <Col xs={6}>INR <span>{property.price} {property.priceType} </span> <span> Onwards </span></Col>
                          <Col xs={12}>
                          </Col>
                        </Row>
                      </Card.Body>
                      <Card.Footer><Button className='w-100' variant="primary"> Get In Touch </Button></Card.Footer>
                    </Card>
                  </Link>
                </Col>
              )) }
            </Row>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default PropertyList