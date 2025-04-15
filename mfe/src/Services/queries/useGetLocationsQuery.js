import { useQuery } from '@tanstack/react-query'
import getLocationsDelegate from '../getLocationsDelegate'
import productConfig from '../../config/'


const useGetLocationsQuery = () => {
  /**
   * Fetches locations from the API.
   * @returns {Promise<Array>} - A promise that resolves to an array of locations.
   */
  
  return useQuery({
    queryKey: ['get-locations'],
    queryFn: () => getLocationsDelegate(productConfig.getLocationsEndPoint),
    enabled: true,
    retry: false
  })
  // console.log(response, '==response===>')
  // return response?.data

}

export default useGetLocationsQuery
