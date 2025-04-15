import React, { useEffect } from 'react'
import { NavLink } from 'react-router'
import { Dropdown, Stack, Container, Row, Col } from 'react-bootstrap'
import useGetLocationsQuery from '../services/queries/useGetLocationsQuery'

const TopBar = () => {
  const [mainLocation, setMainLocation] = React.useState([])
  const { data: locationList, isLoading } = useGetLocationsQuery()
  useEffect(() => {
    // Add any side effects or data fetching here if needed
    if (locationList?.data) {
      const stateList = locationList?.data.map((location) => location.state)
      const uniqueStateList = [...new Set(stateList)]
      console.log(uniqueStateList, '==uniqueStateList===>')
      console.log(uniqueStateList.sort((a, b) => a.localeCompare(b)))
      setMainLocation(uniqueStateList.sort((a, b) => a.localeCompare(b)))
    }
  }
  , [locationList])
  return (
    <div className="transparent-topbar border-bottom-0">
      <Container fluid>
        <Row className="align-items-center">
          {/* Dropdown Section */}
          <Col md={3} lg={3} xs={12} className="mb-1 mt-1">
            <Dropdown>
              <Dropdown.Toggle variant="light" id="dropdown-basic">
                All Locations
              </Dropdown.Toggle>
              <Dropdown.Menu>
              { isLoading ? <Dropdown.Item>Loading...</Dropdown.Item> :
                mainLocation?.map((location, keyId) => (
                  <Dropdown.Item key={keyId} href='#/action-1'>
                    {location}
                  </Dropdown.Item>
                ))}
              </Dropdown.Menu>
            </Dropdown>
          </Col>

          {/* Links Section */}
          <Col md={9} lg={9} xs={12}>
            <Stack
              direction="horizontal"
              gap={3}
              className="justify-content-md-end flex-wrap align-items-center"
            >
              <div className="top-links-item d-none d-md-block">
                <a href="#" className="d-flex top-links-item align-items-center">
                  <i className="fa-solid fa-phone me-2"></i> +1800-123-7890
                </a>
              </div>
              <div className="top-links-item">
                <a href="#" className="d-flex top-links-item align-items-center">
                  <i className="bi-download me-2"></i> Download App
                </a>
              </div>
              <div className="top-links-item top-bar-highlight">
                <NavLink className='fw-bold top-links-item' to="/free-sell-property">Sell/Rent your Property</NavLink>
                <div className="top-links-section text-muted">
                  Genuine Clients, 100% Trust Assurance and Lowest Fees on the Market.
                  <a
                    href="#"
                    className="more-link font-secondary ms-1"
                  >
                    Learn More &rarr;
                  </a>
                </div>
              </div>
              {/* <div className="top-links-item">
                <a href="#" className="side-panel-trigger">
                  Login/Register
                </a>
              </div> */}
            </Stack>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default TopBar