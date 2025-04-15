import React from 'react'
import ReviewList from './ReviewList'

const Amenities = () => {
  const specifications = [
    ['Construction year', '2021'],
    ['Square Areas', '1401'],
    ['Living rooms', '12'],
    ['Bathrooms', '2'],
    ['Bedrooms', '3'],
    ['Balconies', '3'],
    ['Car Parking', '5'],
    ['Total Floors', '25'],
    ['Kitchens', '1'],
    ['Garages', '1'],
    ['Pools', '2'],
    ['Insurance', 'Yes'],
  ]

  const amenities = [
    ['icon-realestate-garage2', 'Parking/Garage'],
    ['icon-realestate-realtor', 'Porter/security'],
    ['icon-realestate-air-conditioning', 'Air Conditioning'],
    ['icon-realestate-washing-machine', 'Washer'],
    ['icon-realestate-tv', 'Television'],
    ['icon-realestate-balcony', 'Balcony/terrace'],
    ['icon-realestate-fireplace', 'Fireplace'],
    ['icon-realestate-restaurant', 'Barbeque'],
    ['icon-realestate-ventilation', 'Ventilation'],
    ['icon-realestate-shower', 'Outdoor Shower'],
    ['icon-realestate-wood', 'Garden'],
    ['icon-realestate-barrow', 'Rural/secluded'],
    ['icon-realestate-vacuum-cleaner', 'Microwave'],
    ['icon-realestate-phone2', 'Intercom'],
    ['icon-realestate-parking', 'Parking'],
  ]

  return (
    <main className="postcontent col-lg-9">
      {/* Property Description */}
      <p>
        The interior of the house is focused around a large central hallway serving as the main avenue of traffic and entrance area to the adjacent rooms. The hallway flows into a large, wide staircase that provides the main means of egress.
        <br />
        <br />
        On the south side of the hall is the large front parlor. This room contains original wallpaper including ceiling panels of small birds and orange flowers with vibrant leaves of green and yellow set upon a light blue background. The main body of the wallpaper is shades.
      </p>

      {/* Specifications Section */}
      <h4 className="mb-0 mt-5">Specification</h4>
      <div className="line line-sm mt-1 mb-3"></div>
      <div className="row">
        {specifications.map(([label, value], index) => (
          <div className="col-md-4" key={index}>
            <ul className="iconlist">
              <li className="mb-1">
                <i className="bi-check-circle"></i> {label}: {value}
              </li>
            </ul>
          </div>
        ))}
      </div>

      {/* Amenities Section */}
      <h4 className="mb-0 mt-3">Amenities</h4>
      <div className="line line-sm mt-1 mb-3"></div>
      <div className="row">
        {amenities.map(([icon, label], index) => (
          <div className="col-md-4" key={index}>
            <ul className="iconlist">
              <li className="mb-1">
                <i className={icon}></i> {label}
              </li>
            </ul>
          </div>
        ))}
      </div>

      {/* Additional Description */}
      <p className="mt-3">
        Put this magnificent property on the top of your list, oozing quality from the moment you enter through the unique brick portico into the Tuscan style courtyard with Mural and vertical garden. Floors of European oak and parquetry, award-winning kitchen with limed solid American oak, bevelled glass cabinets, polished marble bench tops, and separate scullery. Bi-fold doors open out to the sun-filled courtyard. Elegant lounge which also includes a drop-down screen for a home theatre. Guest bedroom or an ideal home office.
        <br />
        <br />
        Throughout this incredible residence, you will find a vast array of imported features. Doors and fittings from France, stained glass windows from Europe, and a wine cellar under the staircase. Upper level: Elegant master bedroom with balcony, ensuite with Emperador Scuro marble bench tops, mirrors with bevelled glass and American cherry frames. A most spacious dressing room... every woman`s dream! Many fixtures have been especially commissioned, including the stand-alone bath in the second bathroom, light switches, and power points. Even the grandchildren are catered for with their own space built into the roof area. An ideal cubby!
        <br />
        <br />
        The home has another two bedrooms with built-in robes. Quality fixtures and fittings, reverse cycle air conditioning, security alarm, and intercom. Designed by award-winner Peter Fryer, this landmark Centro residence will impress and delight... a viewing is a must! Contact Susan Taylor on 0417 771 112 or Trevor Neil 0438 354 556 for your private viewing.
      </p>

      <div className="line"></div>

      {/* Review List */}
      <ReviewList />
    </main>
  )
}

export default Amenities