import { useState } from "react"
import { Row, Col, Button, Form } from "react-bootstrap"
import itemPageTitle from '../../Assets/real-estate/images/items/page-title.jpg'

const PropertySideFilter = () => {
  const [show, setShow] = useState('')

  return (
    <section
      className="sidbar-filter include-header include-topbar text-start"
    >
      <Row>
        <Col xs={11} className="side-filter-border mb-3">
          <div className="sidebar-container p-2 mob-hide">
            <div className="p-">
              <p >You don`t have any saved properties or projects.</p>
              {/* <button className="btn btn-contact-seller">Find Properties</button> */}
            </div>
          </div>
        </Col>

        <Col xs={11} className="p-2 bx-shadow border-top-radius border-top">
          <div className='displayFlex mb-3 reset' >
            <h5 className="m-0">Filters</h5>
            <button className=" btn"><i className="bi bi-arrow-clockwise"></i> Reset</button>
          </div>
          <div id="budget-section">
            <h6> 
              Select Your Budget
            </h6>
            <Form>
              {[
                { id: 'under-40-lacs', label: 'Under 40 lacs' },
                { id: '40-70-lacs', label: '40 lacs - 70 lacs' },
                { id: '70-lacs-1-crore', label: '70 lacs - 1 Crore' },
                { id: '1-2-crore', label: '1 Crore - 2 Crore' },
                { id: 'above-2-crore', label: 'Above 2 Crore' },
                { id: 'on-request', label: 'On request/Coming Soon' },
              ].map((budget) => (
                <Form.Check
                  key={budget.id}
                  type="checkbox"
                  id={budget.id}
                  label={budget.label}
                  name="filter-budget"
                  className="mb-2"
                />
              ))}
            </Form>
          </div>
        </Col>

        <Col xs={11} className="p-2 border-top bx-shadow">
          <div id="unit-type-section">
            <h6>
              Various Unit Types
            </h6>
            <Form>
              {[
                { id: '1bhk', label: '1 BHK' },
                { id: '2bhk', label: '2 BHK' },
                { id: '3bhk', label: '3 BHK' },
                { id: '4bhk', label: '4 BHK' },
                { id: '4bhkplus', label: '4+ BHK' },
              ].map((unit) => (
                <Form.Check
                  key={unit.id}
                  type="checkbox"
                  id={unit.id}
                  label={unit.label}
                  name="filter-unit-type"
                  className="mb-2"
                />
              ))}
            </Form>
          </div>
        </Col>

        <Col xs={11} className="p-2 border-top bx-shadow">
          <div id="purchase-type-section">
            <h6>
              Purchase Type
            </h6>
            <Form>
              {[
                { id: 'new-projects', label: 'New Projects' },
                { id: 'resale', label: 'Resale' },
              ].map((type) => (
                <Form.Check
                  key={type.id}
                  type="checkbox"
                  id={type.id}
                  label={type.label}
                  name="filter-purchase-type"
                  className="mb-2"
                />
              ))}
            </Form>
          </div>
        </Col>

        <Col xs={11} className="p-2 border-top bx-shadow">
          <div id="age-property-section">
            <h6>
              Age of Property
            </h6>
            <Form>
              {[
                { id: 'less-than-1-year', label: 'Less than a Year' },
                { id: 'less-than-2-years', label: 'Less than 2 Years' },
                { id: 'less-than-3-years', label: 'Less than 3 Years' },
                { id: 'less-than-4-years', label: 'Less than 4 Years' },
              ].map((age) => (
                <Form.Check
                  key={age.id}
                  type="checkbox"
                  id={age.id}
                  label={age.label}
                  name="filter-age-property"
                  className="mb-2"
                />
              ))}
            </Form>
          </div>
        </Col>

        <Col xs={11} className="p-2 border-top bx-shadow border-botom-radius">
          <div id="amenity-section">
            <h6>
              Amenities
            </h6>
            <Form>
              {[
                { id: 'parking', label: 'Parking' },
                { id: 'swimming-pool', label: 'Swimming Pool' },
                { id: 'lift', label: 'Lift' },
                { id: 'gated-community', label: 'Gated Community' },
                { id: 'gas-pipeline', label: 'Gas Pipeline' },
              ].map((amenity) => (
                <Form.Check
                  key={amenity.id}
                  type="checkbox"
                  id={amenity.id}
                  label={amenity.label}
                  name="filter-amenity"
                  className="mb-2"
                />
              ))}
            </Form>
          </div>
        </Col>
      </Row>
    </section>
  )
}

export default PropertySideFilter