import React from 'react'
import Header from '../../Header'
import PropertyParts from './PropertyParts'
import Amenities from './Amenities'
import BookNow from './BookNow'
import SimilarProperty from './SimilarProperty'
import Footer from '../../Footer'

const ProductDetail = () => {
  return (
    <div className="stretched side-push-panel">
      <div className="wrapper">
        {/* Header Section */}
        <Header />

        {/* Content Section */}
        <section id="content">
          <div className="content-wrap pt-0">
            {/* Property Details */}
            <PropertyParts />

            {/* Amenities and Booking Section */}
            <div className="container">
              <div className="row gx-5 col-mb-80">
                <Amenities />
                <BookNow />
              </div>
            </div>

            {/* Similar Properties Section */}
            <div className="clear mt-5"></div>
            <SimilarProperty />
          </div>
        </section>

        {/* Footer Section */}
        <Footer />
      </div>
    </div>
  )
}

export default ProductDetail