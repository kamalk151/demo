import axiosInstance from "../axiosInstance"
import { getApiUrl } from '../config'

// Mock data for locations if hoverfly is not running
const mockLocations = {
  data: [
    { id: 1, name: "Noida", state: "Uttar Pradesh", country: "India" },
    { id: 2, name: "Delhi", state: "Delhi", country: "India" },
    { id: 3, name: "Gurgaon", state: "Haryana", country: "India" },
    { id: 4, name: "Mumbai", state: "Maharashtra", country: "India" },
    { id: 5, name: "Bangalore", state: "Karnataka", country: "India" }
  ]
}

const getLocationsDelegate = async (apiName) => {
  // const token = getToken()
  const url = getApiUrl(apiName)
  const headers = {
    // Authorization: `Bearer ${token}`,
    "Content-Type": "application/json"
  }

  try {
    const response = await axiosInstance.get(url, { headers })
    return response.data
  } catch (error) {
    console.error("Error fetching locations:", error)
    // for testing
    return mockLocations
    // throw error
  }
}

export default getLocationsDelegate