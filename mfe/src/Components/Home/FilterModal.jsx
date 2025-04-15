import PropTypes from 'prop-types';
import { useState } from 'react'
import { Row, Col, Form, Button, Modal } from 'react-bootstrap'

const FilterModal = ({ showModal, setShowModal }) => {
  // const [showModal, setShowModal] = useState(false)
  const [minBudget, setMinBudget] = useState(10); // Minimum budget state
  const [maxBudget, setMaxBudget] = useState(100); // Maximum budget state
  const handleModalClose = () => setShowModal(false)

  return (
    <Modal show={showModal} onHide={handleModalClose} centered size='lg' scrollable>
      <Modal.Header closeButton className='justify-content-center'>
        <Modal.Title className='f-15 mb-0'>Filters</Modal.Title>
      </Modal.Header>
      <Modal.Body className='px-4'>
        {/* Buy or Rent Filter */}
        <div className='filter-group pb-1 display-flex'>
          <div className='filter-title'>I want to</div>
          <div className='filter-check-container display-flex'>
            <Form.Check
              type='radio'
              id='buy'
              name='buyRent'
              label='Buy'
              defaultChecked
              className='checkbox-pill'
            />
            <Form.Check
              type='radio'
              id='rent'
              name='buyRent'
              label='Rent'
              className='checkbox-pill'
            />
          </div>
        </div>

        {/* Configuration Filter */}
        <div className='filter-group filter-divider'>
          <div className='filter-title'>Configuration</div>
          <div className='filter-check-container'>
            <Form.Check type='checkbox' id='1bhk' label='1 BHK' className='checkbox-pill' />
            <Form.Check type='checkbox' id='2bhk' label='2 BHK' className='checkbox-pill' />
            <Form.Check type='checkbox' id='3bhk' label='3 BHK' className='checkbox-pill' />
            <Form.Check type='checkbox' id='4bhk' label='4 BHK' className='checkbox-pill' />
            <Form.Check type='checkbox' id='4bhkplus' label='4+ BHK' className='checkbox-pill' />
          </div>
        </div>

        {/* Budget Filter */}
        <div className='filter-group filter-divider'>
          <div className='priceSlider-container'>
          <Form.Label>Budget Range</Form.Label>
            <Row className='align-items-center mb-3'>
              <Col xs={6}>
                <Form.Label>Min</Form.Label>
                <Form.Control
                  type='number'
                  value={minBudget}
                  onChange={(e) => setMinBudget(Number(e.target.value))}
                  placeholder='Min Budget'
                />
              </Col>
              <Col xs={6}>
                <Form.Label>Max</Form.Label>
                <Form.Control
                  type='number'
                  value={maxBudget}
                  onChange={(e) => setMaxBudget(Number(e.target.value))}
                  placeholder='Max Budget'
                />
              </Col>
            </Row>
        </div>
        </div>

        {/* Purchase Type Filter */}
        <div className='filter-group display-flex purchase-type filter-divider'>
          <div className='filter-title'>Purchase Type</div>
          <Form.Check
            type='radio'
            id='launch'
            name='purchaseType'
            label='New Projects'
            className='form-switch'
          />
          <Form.Check
            type='radio'
            id='resale'
            name='purchaseType'
            label='Resale'
            className='form-switch'
          />
        </div>

        {/* Possession Filter */}
        <div className='filter-group filter-divider'>
          <div className='filter-title'>Possession</div>
          <div className='filter-check-container'>
            <Form.Check type='radio' id='rtm' name='possession' label='Ready to Move' />
            <Form.Check type='radio' id='1yr' name='possession' label='In 1 Year' />
            <Form.Check type='radio' id='2yr' name='possession' label='In 2 Years' />
            <Form.Check type='radio' id='3yr' name='possession' label='In 3 Years' />
            <Form.Check type='radio' id='3yrplus' name='possession' label='After 3 Years' />
          </div>
        </div>

        {/* Amenities Filter */}
        <div className='filter-group filter-divider border-0 pb-0'>
          <div className='filter-title'>Amenities</div>
          <Row>
            <Col sm={6}>
              <Form.Check type='checkbox' id='parking' label='Parking' />
            </Col>
            <Col sm={6}>
              <Form.Check type='checkbox' id='swimmingpool' label='Swimming Pool' />
            </Col>
            <Col sm={6}>
              <Form.Check type='checkbox' id='lift' label='Lift' />
            </Col>
            <Col sm={6}>
              <Form.Check type='checkbox' id='gatedcommunity' label='Gated Community' />
            </Col>
            <Col sm={6}>
              <Form.Check type='checkbox' id='pipeline' label='Gas Pipeline' />
            </Col>
          </Row>
        </div>

        {/* Properties with Photos */}
        <div className='filter-group mb-0 pb-4'>
          <Form.Check
            type='checkbox'
            id='reraSwitch'
            label='Properties with Photos'
            className='form-switch'
          />
        </div>
      </Modal.Body>
      <Modal.Footer className='justify-content-between'>
        <Button variant='secondary' onClick={handleModalClose}>
          Clear All
        </Button>
        <Button variant='primary' onClick={handleModalClose}>
          Apply
        </Button>
      </Modal.Footer>
    </Modal>
  )
}

FilterModal.propTypes = {
  showModal: PropTypes.bool.isRequired,
  setShowModal: PropTypes.func.isRequired
}
export default FilterModal