import { useEffect, useState } from "react"
import { Row, Col } from "react-bootstrap"
import imgOne from "../../Assets/real-estate/images/items/1.jpg"
import imgTwo from "../../Assets/real-estate/images/items/2.jpg"
import imgThree from "../../Assets/real-estate/images/items/4.jpg"
import imgCityfour from "../../Assets/real-estate/images/cities/4.jpg"
import imgCityFive from "../../Assets/real-estate/images/cities/5.jpg"
import imgCityTwo from "../../Assets/real-estate/images/cities/2.jpg"
import imgCityThree from "../../Assets/real-estate/images/cities/3.jpg"
import imgCityOne from "../../Assets/real-estate/images/cities/1.jpg"
import useGetSpecialOfferQuery from "../../services/queries/useGetSpecialOfferQuery"

const SpecailOffers = () => {
	const { data: getSpecialOffer, isLoading } = useGetSpecialOfferQuery()
	const [propertyData, setPropertyData] = useState([])
	const images = [imgCityFive, imgCityThree, imgCityfour, imgCityOne, imgCityTwo, imgCityTwo]
	const locationList = [
		{ "id": 1, "state": "Uttar Pradesh"},
		{ "id": 2, "state": "Delhi"},
		{ "id": 3, "state": "Haryana"},
		{ "id": 4, "state": "Maharashtra"},
		{ "id": 5, "state": "Karnataka"},
	]
	useEffect(() => {
		// Add any side effects or data fetching here if needed
		getSpecialOffer?.data && setPropertyData(getSpecialOffer?.data)
		// console.log(getSpecialOffer?.data, '==getSpecialOffer===>')
	}
	, [getSpecialOffer])

  return (
    <section className="content special-offer mt-5">
			<div className="promo promo-dark bg-color mb-4 p-4">
			<Row
				className="align-items-center"
				style={{
					backgroundColor: '#2c3e50', // A dark blue-gray color matching the real estate theme
					// padding: '20px', // Add padding for spacing
					borderRadius: '8px', // Rounded corners for aesthetics
				}}
			>
				{/* Title Section */}
				<Col lg={9} xs={12}>
					<h3
						className="fw-bold text-start mb-0"
						style={{
							fontSize: '1.5rem',
							lineHeight: '1.5',
							color: '#f8f9fa', // Light font color for contrast
						}}
					>
						Special Offers on Villa Long Term Rentals &amp; Lease Agreements
					</h3>
				</Col>

				{/* Button Section */}
				<Col lg={3} xs={12} className="text-lg-end text-start mt-3 mt-lg-0">
					<a
						href="#"
						className="btn btn-warning btn-lg rounded-pill"
						style={{
							padding: '10px 20px',
							fontSize: '1rem',
							fontWeight: 'bold',
							color: '#fff', // White text for contrast
						}}
					>
						Contact Now
					</a>
				</Col>
			</Row>
			</div>

			<Row className="row real-estate-properties">
				{ 
					!isLoading && propertyData.map((property) => (
						<Col xs={12} md={6} lg={4} key={property.id}>
							<a href="#"
								style={{
									background: `url(${images[property.id - 1]}) no-repeat bottom center`,
									backgroundSize: 'cover'
								}}>
								<div className="vertical-middle dark text-center">
									<div className="heading-block m-0 border-0">
										<h3 className="text-capitalize fw-medium">{ locationList.find(location => location.id === property.id )?.state}</h3>
										<span style={{ marginTop: '5px', fontSize: '17px' }}>23 Properties</span>
									</div>
								</div>
							</a>
						</Col>
					))
				}
			</Row>
		</section>
  )
}

export default SpecailOffers