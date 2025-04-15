import { useState } from "react"
import PopularCities from './PopularCities'
import itemPageTitle from '../../Assets/real-estate/images/items/page-title.jpg'

const PropertyFilter = () => {
  const [show, setShow] = useState('')

  return (
    <section
      id="filter"
      className="slider-element include-header include-topbar"
      style={{
        background: `url(${itemPageTitle}) center center no-repeat`,
        backgroundSize: 'cover',
        position: 'relative',
      }}
    >
      <div className="container" style={{ zIndex: 2 }}>
        {/* Popular Cities Component */}
        <PopularCities setShow={setShow} show={show} />
        {/* Filter Section */}
        <div className="tabs advanced-real-estate-tabs">
          <div className="tab-container">
            <div className="tab-content" id="tab-properties">
              <form action="#" method="post" className="mb-0">
                <div className="row g-3">
                  {/* Type Filter */}
                  <div className="col-md-2 col-sm-6">
                    <label htmlFor="type" className="d-block">Type</label>
                    <input
                      className="bt-switch"
                      type="checkbox"
                      checked
                      data-on-text="Buy"
                      data-off-text="Rent"
                      data-on-color="themecolor"
                      data-off-color="themecolor"
                      onChange={() => {}}
                    />
                  </div>

                  {/* Location Filter */}
                  <div className="col-md-4 col-sm-6">
                    <label htmlFor="locations">Locations</label>
                    <select
                      className="form-select"
                      multiple
                      style={{ width: '100%' }}
                    >
                      <optgroup label="Alaskan/Hawaiian Time Zone">
                        <option value="AK">Alaska</option>
                        <option value="HI">Hawaii</option>
                      </optgroup>
                      <optgroup label="Pacific Time Zone">
                        <option value="CA">California</option>
                        <option value="NV">Nevada</option>
                        <option value="OR">Oregon</option>
                        <option value="WA">Washington</option>
                      </optgroup>
                      <optgroup label="Mountain Time Zone">
                        <option value="AZ">Arizona</option>
                        <option value="CO">Colorado</option>
                        <option value="ID">Idaho</option>
                        <option value="MT">Montana</option>
                      </optgroup>
                    </select>
                  </div>

                  {/* Property Type Filter */}
                  <div className="col-md-4 col-sm-6">
                    <label htmlFor="property-type">Property Type</label>
                    <select className="form-select" style={{ width: '100%' }}>
                      <option value="Any">Any</option>
                      <optgroup label="Residential">
                        <option value="Apartment">Apartment</option>
                        <option value="Condo">Condo</option>
                        <option value="Villa">Villa</option>
                      </optgroup>
                      <optgroup label="Commercial">
                        <option value="Shop">Shop</option>
                        <option value="Office">Office</option>
                      </optgroup>
                    </select>
                  </div>

                  {/* Search Button */}
                  <div className="col-md-2 col-sm-6">
                    <button
                      className="btn btn-primary w-100 mt-4"
                      type="submit"
                    >
                      Search
                    </button>
                  </div>
                </div>

                {/* Advanced Filters */}
                <div className="row justify-content-between mt-4 g-3">
                  {/* Price Range */}
                  <div className="col-md-4 col-sm-6">
                    <label htmlFor="price-range" className="mb-2">Price Range</label>
                    <input
                      type="range"
                      className="form-range"
                      id="price-range"
                      onChange={() => {}}
                    />
                  </div>

                  {/* Property Area */}
                  <div className="col-md-4 col-sm-6">
                    <label htmlFor="area-range" className="mb-2">Property Area</label>
                    <input
                      type="range"
                      className="form-range"
                      id="area-range"
                      onChange={() => {}}
                    />
                  </div>

                  {/* Beds Filter */}
                  <div className="col-md-2 col-sm-6">
                    <label htmlFor="beds">Beds</label>
                    <select className="form-select" id="beds">
                      <option value="1">1</option>
                      <option value="2">2</option>
                      <option value="3">3</option>
                      <option value="4">4</option>
                      <option value="5+">5+</option>
                    </select>
                  </div>

                  {/* Baths Filter */}
                  <div className="col-md-2 col-sm-6">
                    <label htmlFor="baths">Baths</label>
                    <select className="form-select" id="baths">
                      <option value="1">1</option>
                      <option value="2">2</option>
                      <option value="3">3</option>
                      <option value="4">4</option>
                      <option value="5+">5+</option>
                    </select>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Background Overlay */}
     
    </section>
  )
}

export default PropertyFilter