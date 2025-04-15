import React from 'react'
import userImg from './../../../Assets/real-estate/images/user.jpg'

const PropertyParts = () => {
  const propertyDetails = [
    {
      icon: 'icon-realestate-rent',
      label: 'Rental Only',
      size: 'i-xlarge', // Icon size
    },
    {
      icon: 'icon-realestate-bed',
      label: '3 Bedrooms',
      size: 'i-large', // Icon size
    },
    {
      icon: 'icon-realestate-plan2',
      label: '1401 SqFt.',
      size: 'i-xlarge', // Icon size
    },
    {
      icon: 'icon-realestate-bathtub',
      label: '2 Bathrooms',
      size: 'i-large', // Icon size
    },
    {
      icon: 'icon-realestate-garage2',
      label: 'Garage',
      size: 'i-xlarge', // Icon size
    },
  ]

  return (
    <div className="section mt-0 py-4">
      <div className="container">
        <div className="row align-items-center text-center">
          {/* Host Section */}
          <div className="col-md-2 col-6">
            <img
              src={userImg}
              alt="Host"
              className="square square-md rounded-circle mt-1"
            />
            <h5 className="mt-2 mb-1">
              <a href="#">
                P. Robert/
                <span
                  className="text-muted fw-normal"
                  style={{ fontFamily: 'Roboto' }}
                >
                  Host
                </span>
              </a>
            </h5>
          </div>

          {/* Property Details */}
          {propertyDetails.map((detail, index) => (
            <div className="col-md-2 col-6" key={index}>
              <i
                className={`${detail.icon} icon-realestate i-plain ${detail.size} mx-auto mb-0`}
              ></i>
              <h5 className="my-1">{detail.label}</h5>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default PropertyParts