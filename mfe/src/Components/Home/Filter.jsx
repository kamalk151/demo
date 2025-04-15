import React, { useState } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import heroImg from '../../Assets/real-estate/images/hero/1.jpg';
import FilterModal from './FilterModal';

const Filter = () => {
  const [showModal, setShowModal] = useState(false);
  const [locations, setLocations] = useState([]);
  const [propArea, setPropArea] = useState('');

  const handleModalOpen = () => setShowModal(true);

  return (
    <section
      id="filter"
      className="filter-element min-vh-60 min-vh-md-100 d-flex align-items-center"
      style={{
        background: `url(${heroImg}) center center no-repeat`,
        backgroundSize: 'cover',
        minHeight: '20em',
      }}
    >
      <div className="header-filter w-100">
        <Container className="py-5" style={{
            position: 'absolute',
            margin: '0px 5%',
          }}>
          <div style={{
            marginTop: '0em',
          }}></div>
          <div className="tabs advanced-real-estate-tabs">
            <ul className="nav nav-tabs mb-3">
              <li className="nav-item border-top-radius search-filter-tab">
                <a
                  className="search-properties"
                  href="#tab-properties"
                  data-scrollto="#tab-properties"
                  data-offset="133"
                >
                  Search Properties
                </a>
              </li>
            </ul>
            <div className="tab-content">
              <Row className="home-search align-items-center g-3">
                {/* Location Dropdown */}
                <Col lg={2} md={4} xs={12}>
                  <Form.Select
                    aria-label="Select Popular Cities"
                    onChange={(e) => setLocations([e.target.value])}
                  >
                    <option>Popular Cities</option>
                    <option value="Noida">Noida</option>
                    <option value="Delhi">Delhi</option>
                    <option value="Ghaziabad">Ghaziabad</option>
                    <option value="Gurgram">Gurgram</option>
                  </Form.Select>
                </Col>

                {/* Search Input */}
                <Col lg={7} md={9} xs={12}>
                  <div className="position-relative">
                    <Form.Control
                      type="text"
                      placeholder="Search a locality or Property"
                      onChange={(e) => setPropArea(e.target.value)}
                      className="ps-5"
                    />
                    <i
                      className="fa fa-search position-absolute"
                      style={{
                        top: '50%',
                        left: '15px',
                        transform: 'translateY(-50%)',
                        color: '#6c757d',
                      }}
                    ></i>
                  </div>
                </Col>

                {/* Filters Button */}
                <Col lg={2} md={12} xs={12}>
                  <Button variant="primary" className="w-100" onClick={handleModalOpen}>
                    <i className="bi bi-funnel-fill me-2"></i> Filters
                  </Button>
                </Col>
              </Row>
            </div>
            <FilterModal showModal={showModal} setShowModal={setShowModal} />
          </div>
        </Container>
      </div>
    </section>
  );
};

export default Filter;