import axiosInstance from "../axiosInstance"
import { getApiUrl } from '../config'

const mockPropertyList = {
  data: [
    {
      "id": 1,
      "image": "itemImg1",
      "label": "For Sale",
      "labelClass": "danger",
      "typeOfProperty": [
        "prime",
        "luxury",
        "premium",
        "specialOffer",
        "rendal",
        "hotDeal",
        "forSale",
        "featured"
      ],
      "price": "1.2",
      "priceType": "Cr",
      "priceDetails": "Leasehold",
      "title": "3 Bedroom Villa",
      "location": "Seminyak Area",
      "badge": "For Sale",
      "badgeClass": "bg-danger",
      "locationId": 1,
      "features": {
        "furnishing": "Unfurnished",
        "baths": 3,
        "propertyType": "Apartment",
        "builtInArea": "1150 sq.ft.",
        "carpetArea": "1050 sq.ft.",
        "pool": true,
        "internet": true,
        "cleaning": false,
        "configurations": "3 bhk",
        "beds": 3,
        "area": "150 sqm"
      }
    },
    {
      "id": 2,
      "image": "itemImg2",
      "label": "Hot Deal",
      "labelClass": "success",
      "price": "200,000",
      "priceType": "Lacs",
      "typeOfProperty": [
        "prime",
        "luxury",
        "premium",
        "specialOffer",
        "rendal",
        "hotDeal",
        "forSale",
        "featured"
      ],
      "priceDetails": "Bi-annually",
      "title": "3 Bedroom Villa",
      "locationId": 2,
      "features": {
        "furnishing": "Unfurnished",
        "configurations": "3 bhk",
        "builtInArea": "1150 sq.ft.",
        "carpetArea": "1050 sq.ft.",
        "pool": true,
        "propertyType": "Apartment",
        "internet": true,
        "cleaning": true,
        "beds": 3,
        "baths": 3,
        "area": "150 sqm"
      }
    },
    {
      "id": 3,
      "image": "itemImg3",
      "label": "Sale",
      "labelClass": "danger",
      "badge": "Long Term Rental",
      "badgeClass": "bg-danger",
      "price": "1600",
      "priceType": "Cr",
      "priceDetails": "Per Sale",
      "typeOfProperty": [
        "prime",
        "luxury",
        "premium",
        "specialOffer",
        "rendal",
        "hotDeal",
        "forSale",
        "featured"
      ],
      "title": "3 Bedroom Villa",
      "locationId": 3,
      "features": {
        "furnishing": "Furnished",
        "propertyType": "Apartment",
        "configurations": "3 bhk",
        "builtInArea": "1150 sq.ft.",
        "carpetArea": "1050 sq.ft.",
        "pool": true,
        "internet": true,
        "cleaning": true,
        "beds": 3,
        "baths": 3,
        "area": "150 sqm"
      }
    }
  ]
}

const getSpecialOfferDelegate = async (apiName) => {
  // const token = getToken()
  const url = getApiUrl(apiName)
  console.log("URL:", url)
  const headers = {
    // Authorization: `Bearer ${token}`,
    "Content-Type": "application/json"
  }

  try {
    const response = await axiosInstance.get(url, { headers })
    return response.data
  } catch (error) {
    console.error("Error fetching special offer:", error)

    return mockPropertyList
    // throw error
  }
}

export default getSpecialOfferDelegate