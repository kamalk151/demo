import { useEffect, useState } from 'react'
import { Row, Col, Form, Dropdown, Button } from 'react-bootstrap'
import FilterModal from '../Home/FilterModal'
import useGetLocationsQuery from '../../services/queries/useGetLocationsQuery'

const PropertyHeader = () => {
  const [searchQuery, setSearchQuery] = useState('')
  const [showModal, setShowModal] = useState(false)
  const [mainCity, setMainCity] = useState([])
  const { data: locationList, isLoading } = useGetLocationsQuery()
  
  useEffect(() => {
    // Fetch locations when the component mounts
    if (locationList?.data) {
      setMainCity(locationList?.data.sort((a, b) => a.name.localeCompare(b.name)))
    }
  }, [locationList])

  
  const handleModalOpen = () => setShowModal(true)
  const handleModalClose = () => setShowModal(false)

  return (
    <section className='slider-element include-header include-topbar py-3'>
      <Row className='property-filter-header '>
        {/* Location Dropdown */}
        <Col xs={12} md={2} className='padding-8'>
          <Dropdown>
            <Dropdown.Toggle variant='primary' className='w-100'>
              <i className='bi bi-geo-alt-fill me-2'></i> Location
            </Dropdown.Toggle>
            <Dropdown.Menu>
             { isLoading ? <Dropdown.Item>Loading...</Dropdown.Item> :
              mainCity?.map((location) => (
                <Dropdown.Item key={location.id} href='#/action-1'>
                  {location.name}
                </Dropdown.Item>
              ))}
            </Dropdown.Menu>
          </Dropdown>
        </Col>

        {/* Search Filter */}
        <Col xs={12} md={5} className='padding-8'>
          <div className='position-relative'>
            <Form.Control
              type='text'
              placeholder='Search a locality or property'
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className='ps-5'
            />
            <i
              className='fa fa-search position-absolute'
              style={{
                top: '50%',
                left: '15px',
                transform: 'translateY(-50%)',
                color: '#6c757d',
              }}
            ></i>
          </div>
        </Col>
        {/* Advanced Filter Button */}
        <Col xs={12} md={2} className='padding-8'>
          <Button variant='primary' className='w-100' onClick={handleModalOpen}>
            <i className='bi bi-funnel-fill me-2'></i> Filters
          </Button>
        </Col>
        {/* Price Sorting Dropdown */}
        <Col xs={12} md={2} className='padding-8'>
          <Dropdown>
            <Dropdown.Toggle variant='primary' id='price-sorting-dropdown' className='w-100'>
              Sort by Price
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item href='#/action-1'>Low to High</Dropdown.Item>
              <Dropdown.Item href='#/action-2'>High to Low</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </Col>
      </Row>

      {/* Advanced Filter Modal */}
      <FilterModal showModal={showModal} setShowModal={setShowModal} />
    </section>
  )
}

export default PropertyHeader