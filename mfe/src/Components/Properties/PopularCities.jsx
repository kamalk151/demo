import React from 'react'
import PropTypes from 'prop-types'
import { Modal, Button } from 'react-bootstrap'
import mumbai from '../../Assets/images/icons/gate-of-india.png'
import pune from '../../Assets/images/icons/pune.png'
import delhi from '../../Assets/images/icons/india-gate.png'
import gurgram from '../../Assets/images/icons/gurgram.png'
import gzb from '../../Assets/images/icons/gzb.png'
import office from '../../Assets/images/icons/office.png'

const PopularCities = ({ setShow, show }) => {
  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)

  const cities = [
    { name: 'Mumbai', image: mumbai },
    { name: 'Pune', image: pune },
    { name: 'Delhi', image: delhi },
    { name: 'Noida', image: office },
    { name: 'Ghaziabad', image: gzb },
    { name: 'Gurgram', image: gurgram },
  ]

  return (
    <div id="popular-city">
      {/* Button to Open Modal */}
      <Button variant="primary" onClick={handleShow}>
        View Popular Cities
      </Button>

      {/* Modal for Popular Cities */}
      <Modal show={show} className="city-modal" onHide={handleClose}>
        <Modal.Header className="header-text" closeButton>
          <Modal.Title>Popular Cities</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="modal-body p-0">
            <div className="multi-city-section">
              <div className="container-fluid px-0">
                <div className="popular-city-wrapper">
                  {cities.map((city, index) => (
                    <div key={index} className="popular-city-item">
                      <div className="popular-city-title">
                        <img
                          width="46"
                          src={city.image}
                          alt={city.name}
                          className="img-fluid"
                        />
                        <span>{city.name}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </div>
  )
}

PopularCities.propTypes = {
  setShow: PropTypes.func.isRequired,
  show: PropTypes.bool.isRequired,
}

export default PopularCities