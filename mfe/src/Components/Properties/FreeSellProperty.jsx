import React from 'react'
import { Container, Row, Col, Form, Button } from 'react-bootstrap'
import chair from '../../Assets/images/chair.png'
import floor from '../../Assets/images/floor.png'

const FreeSellProperty = () => {
  return (
    <div className='section free-sell-property'>
      <div className='card-main container' style={{ maxWidth: '1250px'}}>
        <Row>
          {/* Left Side: Description */}
          <Col lg={1} className='text-white p-4'></Col>
          <Col lg={7} className='text-white p-4 mt-5'>
            <h1 className='mb-3 rent-heading'>Sell or Rent your property, effortlessly.</h1>
            <p className='rent-description'>
              PropertyPistol, India`s foremost real estate authority, trusted for over a decade. Our expert team ensures your property is in safe hands. Enjoy hassle-free, lifetime-free listings on our intuitive platform, with dedicated experts to support your property sales or rentals.
            </p>
            <Row className='borkers-section mb-4 mt-5'>
              <Col>
                <h3 className='brokers-count'>20,000+</h3>
                <p className='brokers-text'>Brokers</p>
              </Col>
              <Col>
                <h3 className='brokers-count'>50,000+</h3>
                <p className='brokers-text'>Properties</p>
              </Col>
              <Col>
                <h3 className='brokers-count'>50+</h3>
                <p className='brokers-text'>Offices Globally</p>
              </Col>
            </Row>
          </Col>

          {/* Right Side: Form */}
          <Col lg={4} className='content p-4 mt-2 new-property'>
            <div className='mb-5' style={{ padding: '8px', background: '#fff' }}>
              <div className='mb-5' style={{ 
                position: 'relative',
                display: 'flex'
              }} >
                <div className='flag-wrap'>
                  <span className='flag'>Post a FREE Listing</span>
                </div>
              </div>
              
              <Row className='m-3 d-flex '>
                <h4 className='f-22 fw-600 mb-4'>Create New Property Listing</h4>
                {/* <Col md={1} lg={2} xs={4} className='content mt-2'></Col> */}
                <Col md={1} lg={2} xs={3} className='content mt-2'>
                  <Form.Control
                    type='text'
                    readOnly
                    placeholder='Mobile Number'
                    className='numberCode'
                    defaultValue={'+91'}
                  />
                </Col>
                <Col md={9} lg={9} xs={9} className='content mt-2  ml-1'>
                  <Form.Control
                    type='text'
                    id='mobilenumber'
                    placeholder='Mobile Number'
                    className='phone-number'
                  />
                </Col>
              </Row>
              <Row>
                <Col md={1} lg={1} xs={1} className='content mt-2  ml-1'></Col>
                <Col md={10} lg={10} xs={12} className='content mt-2  ml-1'>
                  <Button type='submit' variant='primary' className='btn-login w-100'>
                    Continue
                  </Button>
                </Col>
              </Row>
              <div className='or-container my-4 text-center'>
                <div className='line-separator'></div>
                <span className='or-label'>OR</span>
                <div className='line-separator'></div>
              </div>
              <Row  className='mb-5'>
                <Col md={12} lg={12} xs={12} className='content mt-2  ml-1'>
                  <div className='text-center'>
                    <span className='phone just-call'>Or Just Call us on</span>
                    <span className='toll-free number'>
                      +91 80 80 190 190
                    </span>
                  </div>
                </Col>
                <Col md={12} lg={12} xs={12} className='content mt-2 '>
                  <p className='desc'>I authorize PROPERTY PISTOL REALTY PRIVATE LIMITED and its representatives to Call, SMS, Email or WhatsApp me about its products and offers. This consent overrides any registration for DNC/NDNC.
                  </p>
                </Col>
              </Row>
            </div>
          </Col>
        </Row>
      </div>
      <Row>
      
             
            
        <Col lg={12} className='content'>
          <Col md={8} lg={8} className='knowledge-description'>
            <div className='bottom-txt mt-4'>
              Their deep knowledge, personalized advice, and ethical approach set them apart. No need to look elsewhere for future transactions.

              <p>Mr. Deepak Pakhare - Senior UX Designer-Amazon</p>
            </div>
          </Col>
          <div className="image-container">
            <img src={floor} alt="Floor" className="img-fluid floor-img" />
            <img src={chair} alt="Chair" className="img-fluid chair-img" />
          </div>
        </Col>
      </Row>
    </div>
  )
}

export default FreeSellProperty